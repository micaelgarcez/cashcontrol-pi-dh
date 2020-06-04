const Carteira = require("../models/Carteiras");

const { check, validationResult, body } = require('express-validator');
const Sequelize = require('sequelize');

function listarCarteiras(id){
    const listarCarteiras = Carteira.findAll({
        attributes: ['id', 'nome', [Sequelize.literal(`CASE tipo WHEN 1 THEN 'Conta Bancária' WHEN 2 THEN 'Carteira Pessoal' WHEN 3 THEN 'Cartão de Débito' ELSE 'Cartão de Crédito' END`), 'tipo'], 'cor', 'icone'],
        where: { usuario_id : id }
    });
    return listarCarteiras;
}

module.exports = {
    async store (req, res) {

        let listaDeErros = validationResult(req);

        if (listaDeErros.isEmpty()){
            //Id do Usuário
            let { id } = JSON.parse(req.session.usuario);

            //Campo do Formulário
            let { nome, tipo, cor, icone} = req.body;

            const carteira = await Carteira.create(
                {nome, tipo, usuario_id: id, cor, icone}
                )
            
            const carteiras = await listarCarteiras(id);
            
            res.render('crud-carteiras/carteiralist', {carteiras})
        }
        else {
            res.render('crud-carteiras/carteira', {erros:listaDeErros.errors})
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

		res.render('crud-carteiras/carteiraedit', {carteira: carteira});
    },
    async update (req, res) {
        let listaDeErros = validationResult(req);

        //Id da Carteira
        let id = req.params.id;

        if (listaDeErros.isEmpty()){
            //Id do Usuário
            let { id: usuario_id } = JSON.parse(req.session.usuario);

            //Campo do Formulário
            let { nome, tipo, cor, icone} = req.body;

            const carteira = await Carteira.update(
                {nome, tipo, cor, icone},
                {where: {id}}
            )

            const carteiras = await listarCarteiras(usuario_id);

            res.render('crud-carteiras/carteiralist', {carteiras})
        }
        else {
            const carteira2 = await Carteira.findByPk(id);

            res.render('crud-carteiras/carteiraedit', {erros:listaDeErros.errors, carteira: carteira2})
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

        const carteiras = await listarCarteiras(usuario_id);

        res.render('crud-carteiras/carteiralist', {carteiras})
    }
}