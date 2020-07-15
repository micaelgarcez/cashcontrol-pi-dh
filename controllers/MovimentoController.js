const Movimentos = require("../models/Movimentos");
const Receita = require("../models/Receitas");
const Carteira = require("../models/Carteiras");
const tiporeceitas = require("../models/TipoReceitas");
const { check, validationResult, body } = require("express-validator");
const dbConfig = require("../config/database");
const Sequelize = require("sequelize");
const con = new Sequelize(dbConfig);
const moment = require("moment");

function listaMovimentos(id, anofiltro, mesfiltro) {
  const lista = con.query(
    "Select CASE WHEN IFNULL(m.receita_id,0)>0 THEN 'Receita' WHEN IFNULL(m.despesa_id,0)>0 THEN 'Despesa' " +
      "ELSE 'Transferência' END origem, CASE WHEN m.tipo_mov=1 THEN 'Débito' ELSE 'Crédito' END tipo, c.nome carteira, " +
      "DATE_FORMAT (m.data_mov,'%d/%m/%Y') AS data_mov, DATE_FORMAT (m.data_mov,'%Y-%m-%d') AS data_mov2, m.valor_mov, " +
      "IFNULL(t.nome,'') transferencia, m.id, IFNULL(m.id_transf,0) id_transf, m.carteira_id, m.carteira_id_transf, " +
      "m.despesa_id, m.receita_id " +
      "from movimentos m " +
      "INNER JOIN carteiras c ON m.carteira_id=c.id " +
      " LEFT  JOIN carteiras t ON m.carteira_id_transf=t.id " +
      " LEFT  JOIN despesas d ON m.despesa_id=d.id " +
      " LEFT  JOIN receitas r ON m.receita_id=r.id " +
      "WHERE m.usuario_id=:id AND YEAR(m.data_mov)=:anofiltro AND MONTH(m.data_mov)=:mesfiltro " +
      "ORDER BY m.data_mov desc, m.id desc",
    {
      replacements: {
        id,
        anofiltro,
        mesfiltro,
      },
      type: Sequelize.QueryTypes.SELECT,
    }
  );

  return lista;
}

module.exports = {
  async insereMovimento(
    usuario,
    carteira,
    despesa,
    receita,
    tipo,
    valor,
    data
  ) {
    //Id do Usuário
    let id = usuario;

    const mov = await Movimentos.create({
      usuario_id: id,
      carteira_id: carteira,
      carteira_id_transf: 0,
      id_transf: 0,
      despesa_id: despesa,
      receita_id: receita,
      tipo_mov: tipo,
      valor_mov: valor,
      data_mov: data,
    });

    return mov.id;
  },
  async alteraMovimento(usuario, despesa, receita, carteira, valor, data) {
    //Id do Usuário
    let usuario_id = usuario;

    const movDespesa = await Movimentos.findOne({
      where: { despesa_id: despesa, usuario_id: usuario_id },
    });

    const movReceita = await Movimentos.findOne({
      where: { receita_id: receita, usuario_id: usuario_id },
    });

    if (movDespesa) {
      const mov = await Movimentos.update(
        {
          data_mov: data,
          valor_mov: valor,
          carteira_id: carteira,
        },
        { where: { id: movDespesa.id } }
      );
      return movDespesa.id;
    } else if (movReceita) {
      const mov = await Movimentos.update(
        {
          data_mov: data,
          valor_mov: valor,
          carteira_id: carteira,
        },
        { where: { id: movReceita.id } }
      );
      return movReceita.id;
    } else {
      return 0;
    }
  },
  async excluiMovimento(usuario, despesa, receita) {
    //Id do Usuário
    let usuario_id = usuario;

    var mov;

    if (despesa > 0) {
      mov = await Movimentos.findOne({
        where: { despesa_id: despesa, usuario_id: usuario_id },
      });
    } else {
      mov = await Movimentos.findOne({
        where: { receita_id: receita, usuario_id: usuario_id },
      });
    }
    if (mov) {
      await Movimentos.destroy({ where: { id: mov.id } });
      return mov.id;
    }
    {
      return 0;
    }
  },
  async listaMovimentos(req, res) {
    let { id } = JSON.parse(req.session.usuario);

    let { ano, mes } = req.query;

    let Periodo = {
      Ano: moment().year(),
      Mes: moment().format("MM"),
    };

    if (ano != undefined && mes != undefined) {
      Periodo.Ano = ano;
      Periodo.Mes = mes;
    }

    let anofiltro = Periodo.Ano;
    let mesfiltro = Number(Periodo.Mes);

    const movimentos = await listaMovimentos(id, anofiltro, mesfiltro);

    res.render("crud-movimentos/movimentolist", { movimentos, Periodo });
  },
  async store(req, res) {
    //Armazena nova Transferência

    let listaDeErros = validationResult(req);

    //Id do Usuário
    let { id } = JSON.parse(req.session.usuario);

    let { ano, mes } = req.query;

    let Periodo = {
      Ano: moment().year(),
      Mes: moment().format("MM"),
    };

    if (ano != undefined && mes != undefined) {
      Periodo.Ano = ano;
      Periodo.Mes = mes;
    }

    let anofiltro = Periodo.Ano;
    let mesfiltro = Number(Periodo.Mes);

    if (listaDeErros.isEmpty()) {
      //Campos do Formulário
      let { data, carteira, valor, carteiradestino } = req.body;

      //Saída na Carteira de Origem
      const origem = await Movimentos.create({
        usuario_id: id,
        carteira_id: carteira,
        carteira_id_transf: carteiradestino,
        id_transf: 0,
        despesa_id: 0,
        receita_id: 0,
        tipo_mov: 1,
        valor_mov: valor,
        data_mov: data,
      });

      //Entrada na Carteira de Destino
      const destino = await Movimentos.create({
        usuario_id: id,
        carteira_id: carteiradestino,
        carteira_id_transf: carteira,
        id_transf: origem.id,
        despesa_id: 0,
        receita_id: 0,
        tipo_mov: 2,
        valor_mov: valor,
        data_mov: data,
      });

      //Atualiza Id Transf Destino no Registro de Origem
      const atualiza = await Movimentos.update(
        {
          id_transf: destino.id,
        },
        { where: { id: origem.id } }
      );

      res.redirect("/movimentos");
    } else {
      res.status(404).send("Campos obrigatórios não preenchidos!");
    }
  },
  async update(req, res) {
    let listaDeErros = validationResult(req);

    //Id da Transferência
    let id = req.params.id;

    let { ano, mes } = req.query;

    let Periodo = {
      Ano: moment().year(),
      Mes: moment().format("MM"),
    };

    if (ano != undefined && mes != undefined) {
      Periodo.Ano = ano;
      Periodo.Mes = mes;
    }

    let anofiltro = Periodo.Ano;
    let mesfiltro = Number(Periodo.Mes);

    //Id do Usuário
    let { id: usuario_id } = JSON.parse(req.session.usuario);

    if (listaDeErros.isEmpty()) {
      //Campos do Formulário
      let { data, valor } = req.body;

      const mov = await Movimentos.findByPk(id);

      const mov1 = await Movimentos.update(
        {
          data_mov: data,
          valor_mov: valor,
        },
        { where: { id } }
      );

      const mov2 = await Movimentos.update(
        {
          data_mov: data,
          valor_mov: valor,
        },
        { where: { id: mov.id_transf } }
      );

      res.redirect("/movimentos");
    } else {
      return res.status(404).send("Campos obrigatórios não preenchidos!");
    }
  },
  async delete(req, res) {
    //Id do Usuário
    let { id: usuario_id } = JSON.parse(req.session.usuario);

    // Capturar ID da Transferência a ser removida
    let id = req.params.id;

    let { ano, mes } = req.query;

    let Periodo = {
      Ano: moment().year(),
      Mes: moment().format("MM"),
    };

    if (ano != undefined && mes != undefined) {
      Periodo.Ano = ano;
      Periodo.Mes = mes;
    }

    let anofiltro = Periodo.Ano;
    let mesfiltro = Number(Periodo.Mes);

    const mov = await Movimentos.findByPk(id);

    await Movimentos.destroy({ where: { id: mov.id_transf } });

    await Movimentos.destroy({ where: { id: mov.id } });

    res.redirect("/movimentos");
  },
  async listaCarteirasReceita(req, res) {
    let { id } = JSON.parse(req.session.usuario);

    const carteiras = await con.query(
      "Select c.id, c.nome " +
        "from carteiras c where c.tipo in (1,2) and " +
        "c.usuario_id=:id",
      {
        replacements: {
          id,
        },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    res.send(carteiras);
  },
};
