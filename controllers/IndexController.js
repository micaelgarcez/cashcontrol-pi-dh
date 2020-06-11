const Usuario = require("../models/Usuarios");
//const users = require("../database/Users.json");
const fs = require("fs");
const bcrypt = require("bcrypt");

const Sequelize = require('sequelize');
const moment = require('moment');
const dbConfig = require('../config/database');
moment.locale('pt-BR');
const con = new Sequelize(dbConfig);

module.exports = {
  show: (req, res) => {
    res.render('index');
  },
  dashboard: async (req, res) => {
		let { id } = JSON.parse(req.session.usuario);

		const Periodo = {
      Ano: moment().year(),
      Mes: moment().format('MM')
		}
		
		let anofiltro=Periodo.Ano;
    let mesfiltro=Number(Periodo.Mes);
    let usuariofiltro=Number(id);

		const resultado = await con.query(
      "Select c.nome CATEGORIA, IFNULL(m.valorprevisto,0) PREVISTO, " +
			"IFNULL((Select sum(d.valor) from despesas d where d.usuario_id=c.usuario_id and d.categoria_id=c.id " +
			"and year(d.data_despesa)=:anofiltro and month(d.data_despesa)=:mesfiltro),0) GASTO " +
			"from categorias c left outer join metas m on c.usuario_id=m.usuario_id and c.id=m.categoria_id " +
			"and m.ano=:anofiltro and m.mes=:mesfiltro where c.usuario_id=:usuariofiltro",
      {
        replacements: {
          anofiltro, mesfiltro, usuariofiltro,
        },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    const resumo = await con.query(
      "Select sum(credito) credito, sum(debito) debito, sum(despesas) despesas, sum(cartao) cartao from ( " +
        "Select IFNULL(sum(m.valor_mov),0) credito, 0 debito, 0 despesas, 0 cartao from movimentos m " +
        "WHERE m.usuario_id=:usuariofiltro AND m.tipo_mov=2 AND YEAR(m.data_mov)=:anofiltro AND MONTH(m.data_mov)=:mesfiltro " +
        "UNION " +
        "Select 0 credito, IFNULL(sum(m.valor_mov),0) debito, 0 despesas, 0 cartao from movimentos m " +
        "WHERE m.usuario_id=:usuariofiltro AND m.tipo_mov=1 AND YEAR(m.data_mov)=:anofiltro AND MONTH(m.data_mov)=:mesfiltro " +
        "UNION " +
        "Select 0 credito, 0 debito, IFNULL(sum(d.valor),0) despesas, 0 cartao from despesas d " +
        "WHERE d.usuario_id=:usuariofiltro AND YEAR(d.data_despesa)=:anofiltro AND MONTH(d.data_despesa)=:mesfiltro " +
        "UNION " +
        "Select 0 credito, 0 debito, 0 despesas, IFNULL(sum(d.valor),0) cartao from despesas d INNER JOIN carteiras c ON d.carteira_id=c.id AND c.TIPO=4 " +
        "WHERE d.usuario_id=:usuariofiltro AND c.TIPO=4 AND YEAR(d.data_despesa)=:anofiltro AND MONTH(d.data_despesa)=:mesfiltro) x ",
      {
        replacements: {
          anofiltro, mesfiltro, usuariofiltro,
        },
        type: Sequelize.QueryTypes.SELECT,
      }
    );

    //return res.send(resumo);

    //console.log(resumo);
				
    res.render('dashboard',{resultado, resumo});
  }
}