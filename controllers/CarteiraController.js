const Carteira = require("../models/Carteiras");

const { check, validationResult, body } = require('express-validator');
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const con = new Sequelize(dbConfig);

function listarCarteiras(id){
    const listarCarteiras = Carteira.findAll({
        attributes: ['id', 'nome', [Sequelize.literal(`CASE tipo WHEN 1 THEN 'Conta Bancária' WHEN 2 THEN 'Carteira Pessoal' WHEN 3 THEN 'Cartão de Débito' ELSE 'Cartão de Crédito' END`), 'tipo'], 'cor', 'icone'],
        where: { usuario_id : id }
    });
    return listarCarteiras;
}

module.exports = {
    async store (req, res) {
        console.log(req.body);
        let listaDeErros = validationResult(req);

        if (listaDeErros.isEmpty()){
            //Id do Usuário
            let { id } = JSON.parse(req.session.usuario);

            //Campo do Formulário
            let { nome, tipo, cor, icone} = req.body;

            await Carteira.create(
                {nome, tipo, usuario_id: id, cor, icone}
            )
            
            res.redirect('/carteiras');
        }
        else {
            res.status(400).send({res: 'erro', listaDeErros})
        }
        
    },
    create: (req, res) => {
        res.render('crud-carteiras/carteira');
    },
    async list (req, res) {

        let { id } = JSON.parse(req.session.usuario);

        const carteiras = await listarCarteiras(id);
        
        res.render('crud-carteiras/carteiralist', {carteiras})
    },
    async edit (req, res) {
		const id = req.params.id;
        
        const carteira = await Carteira.findByPk(id);

		res.status(200).send(carteira);
    },
    async update (req, res) {
        let listaDeErros = validationResult(req);

        //Id da Carteira
        let id = req.params.id;

        if (listaDeErros.isEmpty()){
            //Campo do Formulário
            let { nome, tipo, cor, icone} = req.body;

            await Carteira.update(
                {nome, tipo, cor, icone},
                {where: {id}}
            )

            res.redirect('/carteiras');
        }
        else {
            res.status(400).send({res: 'erro', listaDeErros});
        }
    },
    async delete (req, res) {
		//Id do Usuário
        let { id: usuario_id } = JSON.parse(req.session.usuario);

		// Capturar ID da carteira a ser removida
        let id = req.params.id;
        
        id = Number(id);

		await Carteira.destroy(
            {where: {id}}
        )

        res.status(200).send({
            success: true,
            message: 'Carteira removida com sucesso!!!'
        });
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
    async listaCarteiras (req, res) {

        let { id } = JSON.parse(req.session.usuario);

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

        res.send(carteiras);
    }
}