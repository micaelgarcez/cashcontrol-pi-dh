const Categoria = require("../models/Categorias");

const { check, validationResult, body } = require('express-validator');
const Sequelize = require('sequelize');

function listar(id){
    const listar = Categoria.findAll({
        attributes: ['id', 'nome', [Sequelize.literal(`CASE tipo WHEN 1 THEN 'Fixa' ELSE 'Variável' END`), 'tipo'], 'cor', 'icone'],
        where: { usuario_id : id }
    });
    return listar;
}

module.exports = {
    async store (req, res) {

        let listaDeErros = validationResult(req);

        if (listaDeErros.isEmpty()){
            //Id do Usuário
            let { id } = JSON.parse(req.session.usuario);

            //Campo do Formulário
            let { nome, tipo, cor, icone} = req.body;

            const categoria = await Categoria.create(
                {nome, tipo, usuario_id: id, cor, icone}
                )

            const categorias = await listar(id);

            res.render('crud-categorias/categorialist', {categorias})
        }
        else {
            res.render('crud-categorias/categoria', {erros:listaDeErros.errors})
        }
        
    },
    create: (req, res) => {
        res.render('crud-categorias/categoria');
    },
    async list (req, res) {

        let { id } = JSON.parse(req.session.usuario);
        
        const categorias = await listar(id);

        res.render('crud-categorias/categorialist', {categorias})
    },
    async edit (req, res) {
		const id = req.params.id;
        
        const categoria = await Categoria.findByPk(id);

		res.render('crud-categorias/categoriaedit', {categoria: categoria});
    },
    async update (req, res) {
        let listaDeErros = validationResult(req);

        //Id da Categoria
        let id = req.params.id;

        if (listaDeErros.isEmpty()){
            //Id do Usuário
            let { id: usuario_id } = JSON.parse(req.session.usuario);

            //Campo do Formulário
            let { nome, tipo} = req.body;

            const categoria = await Categoria.update(
                {nome, tipo},
                {where: {id}}
            )

            const categorias = await listar(usuario_id);

            res.render('crud-categorias/categorialist', {categorias})
        }
        else {
            const categoria2 = await Categoria.findByPk(id);

            res.render('crud-categorias/categoriaedit', {erros:listaDeErros.errors, categoria: categoria2})
        }
    },
    async delete (req, res) {
		//Id do Usuário
        let { id: usuario_id } = JSON.parse(req.session.usuario);

		// Capturar ID da categoria a ser removida
        let id = req.params.id;
        
        id = Number(id);

		await Categoria.destroy(
            {where: {id}}
        )

        const categorias = await listar(usuario_id);

        res.render('crud-categorias/categorialist', {categorias})
    }
    ,
    async listaCategoriasMetas (req, res) {

        let { id } = JSON.parse(req.session.usuario);

        const categorias = await listar(id);

        res.send(categorias);
    }
}