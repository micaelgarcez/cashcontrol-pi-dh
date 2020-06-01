const TipoReceita = require("../models/TipoReceitas");

const { check, validationResult, body } = require('express-validator');
const Sequelize = require('sequelize');

function lista (id){
    const lista = TipoReceita.findAll({
        attributes: ['id', 'nome'],
        where: { usuario_id : id },
        order: [
            ['nome', 'ASC'],
        ]
    });
    return lista;
}

module.exports = {
    async store (req, res) {

        let listaDeErros = validationResult(req);

        if (listaDeErros.isEmpty()){
            //Id do Usuário
            let { id } = JSON.parse(req.session.usuario);

            //Campo do Formulário
            let { nome} = req.body;

            const tiporeceita = await TipoReceita.create(
                {nome, usuario_id: id}
                )

            const tiporeceitas = await lista(id);

            res.render('crud-tiporeceitas/tiporeceitalist', {tiporeceitas})
        }
        else {
            res.render('crud-tiporeceitas/tiporeceita', {erros:listaDeErros.errors})
        }
        
    },
    create: (req, res) => {
        res.render('crud-tiporeceitas/tiporeceita');
    },
    async list (req, res) {
        
        let { id } = JSON.parse(req.session.usuario);
        
        const tiporeceitas = await lista(id);

        res.render('crud-tiporeceitas/tiporeceitalist', {tiporeceitas})
    },
    async edit (req, res) {
		const id = req.params.id;
        
        const tiporeceita = await TipoReceita.findByPk(id);

		res.render('crud-tiporeceitas/tiporeceitaedit', {tiporeceita});
    },
    async update (req, res) {
        let listaDeErros = validationResult(req);

        //Id
        let id = req.params.id;

        if (listaDeErros.isEmpty()){
            //Id do Usuário
            let { id: usuario_id } = JSON.parse(req.session.usuario);

            //Campo do Formulário
            let { nome} = req.body;

            const tiporeceita = await TipoReceita.update(
                {nome},
                {where: {id}}
            )

            const tiporeceitas = await lista(usuario_id);

            res.render('crud-tiporeceitas/tiporeceitalist', {tiporeceitas})
        }
        else {
            const tiporeceita = await TipoReceita.findByPk(id);

            res.render('crud-tiporeceitas/tiporeceitaedit', {erros:listaDeErros.errors, tiporeceita})
        }
    },
    async delete (req, res) {
		//Id do Usuário
        let { id: usuario_id } = JSON.parse(req.session.usuario);

		// Capturar ID do tipo de receita a ser removido
        let id = req.params.id;
        
        id = Number(id);

		await TipoReceita.destroy(
            {where: {id}}
        )

        const tiporeceitas = await lista(usuario_id);

        res.render('crud-tiporeceitas/tiporeceitalist', {tiporeceitas})
    }
}