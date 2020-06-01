const Receita = require("../models/Receitas");
const Carteira = require("../models/Carteiras");
const tiporeceitas = require("../models/TipoReceitas");
const { check, validationResult, body } = require('express-validator');
const dbConfig = require('../config/database');
const Sequelize = require('sequelize');
const con = new Sequelize(dbConfig);

function lista (id){
    const lista = Receita.findAll({
        attributes: [
            'id', 
            'valor', 
            'obs', 
            [Sequelize.fn('date_format', Sequelize.col('data_receita'), '%d/%m/%Y'), 'data_receita']
        ],
        where: { usuario_id : id },
        include: [{
            model: Carteira,
            as: 'carteira',
            attributes: ['nome']
        },
        {
            model: tiporeceitas,
            as: 'tiporeceita',
            attributes: ['nome']
        }]
    });
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

            const receitas = await lista(id);

            res.render('crud-receitas/receitalist', {receitas})
        }
        else {
            //Carteiras do Usuário
            const carteiras = await listaCarteiras(id);

            //Tipo de Receitas do Usuário
            const tipodereceitas = await listaTiposDeReceita(id);

            res.render('crud-receitas/receita',{tipodereceitas, carteiras, erros:listaDeErros.errors});
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

            const receitas = await lista(usuario_id);

            res.render('crud-receitas/receitalist', {receitas})
        }
        else {
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
    }
}