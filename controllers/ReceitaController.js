const Receita = require("../models/Receitas");
const Carteira = require("../models/Carteiras");
const tiporeceitas = require("../models/TipoReceitas");
const { check, validationResult, body } = require('express-validator');
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const con = new Sequelize(dbConfig);
const Mov = require("../controllers/MovimentoController");

function lista (id){
    const lista = con.query(
        "Select c.id, c.valor, c.obs, c.carteira_id, c.tiporeceita_id, t.nome carteira, s.nome tiporeceita, " +
        "DATE_FORMAT (c.data_receita,'%d/%m/%Y') AS data_receita, DATE_FORMAT (c.data_receita,'%Y-%m-%d') AS data_receita2 " +
        "from receitas c INNER JOIN carteiras t ON c.carteira_id=t.id INNER JOIN tiporeceitas s ON c.tiporeceita_id=s.id " +
        "where c.usuario_id=:id",
        {
          replacements: {
            id,
          },
          type: Sequelize.QueryTypes.SELECT,
        }
      );

    return lista;
}
function listaCarteiras (id){
    const listaCarteiras = Carteira.findAll({
        where: { usuario_id : id }
    });
    return listaCarteiras;
}
function listaTiposDeReceita (id){
    const listaTiposDeReceita = tiporeceitas.findAll({
        where: { usuario_id : id }
    });
    return listaTiposDeReceita;
}

module.exports = {
    async store (req, res) {

        let listaDeErros = validationResult(req);

        //Id do Usuário
        let { id } = JSON.parse(req.session.usuario);

        if (listaDeErros.isEmpty()){
            
            //Campos do Formulário
            let { data, valor, tiporeceita, carteira, obs} = req.body;

            //Cria nova receita
            const receita = await Receita.create(
                {
                    data_receita: data, 
                    valor: valor, 
                    obs: obs, 
                    carteira_id: carteira, 
                    tiporeceita_id: tiporeceita, 
                    usuario_id: id
                }
            )

            //Lança na tabela de movimento
            const retornoMov = await Mov.insereMovimento(id, carteira, 0, receita.id, 2, valor, data);
            
            const receitas = await lista(id);

            res.render('crud-receitas/receitalist', {receitas})
        }
        else {
            res.status(404).send("Campos obrigatórios não preenchidos!");
        }
        
    },
    async create (req, res) {
        let listaDeErros = validationResult(req);

        //Usuário Logado
        let { id } = JSON.parse(req.session.usuario);

        //Carteiras do Usuário
        const carteiras = await listaCarteiras(id);

        //Tipo de Receitas do Usuário
        const tipodereceitas = await listaTiposDeReceita(id);

        res.render('crud-receitas/receita',{tipodereceitas, carteiras});
    },
    async list (req, res) {

        let { id } = JSON.parse(req.session.usuario);

        const receitas = await lista(id);

        //const carteiras = await listaCarteiras(id);

        const carteiras = await con.query(
            "Select c.id, c.nome " +
            "from carteiras c where " +
            "c.usuario_id=:id",
            {
              replacements: {
                id,
              },
              type: Sequelize.QueryTypes.SELECT,
            }
          );

        res.render('crud-receitas/receitalist', {receitas, carteiras})
    },
    async edit (req, res) {
        let { id: usuario_id } = JSON.parse(req.session.usuario);

		const id = req.params.id;
        
        const receita = await Receita.findOne({
            attributes: [
            'id', 
            'valor', 
            'obs', 
            'tiporeceita_id', 
            'carteira_id', 
            [Sequelize.fn('date_format', Sequelize.col('data_receita'), '%Y-%m-%d'), 'data_receita']
        ],
            where: { id : id }
        });

        //Carteiras do Usuário
        const carteiras = await listaCarteiras(usuario_id);
        
        //Tipo de Receitas do Usuário
        const tipodereceitas = await listaTiposDeReceita(usuario_id);

		res.render('crud-despesas/despesaedit', {receita, carteiras, tipodereceitas});
    },
    async update (req, res) {
        let listaDeErros = validationResult(req);

        //Id da Receita
        let id = req.params.id;

        //Id do Usuário
        let { id: usuario_id } = JSON.parse(req.session.usuario);

        if (listaDeErros.isEmpty()){
            //Campos do Formulário
            let { data, valor, tiporeceita, carteira, obs} = req.body;

            const receita = await Receita.update({
                data_receita: data,
                valor,
                tiporeceita_id: tiporeceita,
                carteira_id: carteira,
                obs
            },
                { where: {id} }
            )

            //Lança na tabela de movimento
            const retornoMov = await Mov.alteraMovimento(usuario_id, 0, id, valor, data);
            
            const receitas = await lista(usuario_id);

            res.render('crud-receitas/receitalist', {receitas})
        }
        else {

            return res.status(404).send("Campos obrigatórios não preenchidos!");
            const receita = await Receita.findOne({
                attributes: [
                'id', 
                'valor', 
                'obs', 
                'tiporeceita_id', 
                'carteira_id', 
                [Sequelize.fn('date_format', Sequelize.col('data_receita'), '%Y-%m-%d'), 'data_receita']
            ],
                where: { id : id }
            });

            //Carteiras do Usuário
            const carteiras = await listaCarteiras(usuario_id);
        
            //Tipo de Receitas do Usuário
            const tipodereceitas = await listaTiposDeReceita(usuario_id);

            res.render('crud-receitas/receitaedit',{receita, tipodereceitas, carteiras, erros:listaDeErros.errors});
        }
    },
    async delete (req, res) {
		//Id do Usuário
        let { id: usuario_id } = JSON.parse(req.session.usuario);

		// Capturar ID da Receita a ser removida
        let id = req.params.id;
        
        id = Number(id);

		await Receita.destroy(
            {where: {id}}
        )

        //Lança na tabela de movimento
        const retornoMov = await Mov.excluiMovimento(usuario_id, 0, id);
        
        const receitas = await lista(usuario_id);

        res.render('crud-receitas/receitalist', {receitas})
    },
    async listaCarteirasReceita (req, res) {

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
    async listatiposreceita (req, res) {

        let { id } = JSON.parse(req.session.usuario);

        const tipodereceitas = await con.query(
            "Select c.id, c.nome " +
            "from tiporeceitas c where " +
            "c.usuario_id=:id",
            {
              replacements: {
                id,
              },
              type: Sequelize.QueryTypes.SELECT,
            }
          );

        res.send(tipodereceitas);
    }
}