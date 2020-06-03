const Despesa = require("../models/Despesas");
const Carteira = require("../models/Carteiras");
const Categoria = require("../models/Categorias");
const { check, validationResult, body } = require('express-validator');
const Sequelize = require('sequelize');
const Mov = require("../controllers/MovimentoController");

module.exports = {
    async store (req, res) {

        let listaDeErros = validationResult(req);

        //Id do Usuário
        let { id } = JSON.parse(req.session.usuario);

        if (listaDeErros.isEmpty()){
            
            //Campos do Formulário
            let { data, valor, categoria, carteira, obs} = req.body;

            //Cria nova despesa
            const despesa = await Despesa.create(
                {
                    data_despesa: data, 
                    valor: valor, 
                    obs: obs, 
                    carteira_id: carteira, 
                    categoria_id: categoria, 
                    usuario_id: id
                }
            )

            //Lança na tabela de movimento
            const carteiraLocal = await Carteira.findByPk(carteira);
            if (carteiraLocal.tipo!=4) {
                const retornoMov = await Mov.insereMovimento(id, carteira, despesa.id, 0, 1, valor, data);
            }

            const despesas = await Despesa.findAll({
                attributes: [
                    'id', 
                    'valor', 
                    'obs', 
                    [Sequelize.fn('date_format', Sequelize.col('data_despesa'), '%d/%m/%Y'), 'data_despesa']
                ],
                where: { usuario_id : id },
                include: [{
                    model: Carteira,
                    as: 'carteira',
                    attributes: ['nome']
                },
                {
                    model: Categoria,
                    as: 'categoria',
                    attributes: ['nome']
                }]
            });

            res.render('crud-despesas/despesalist', {despesas})
        }
        else {
            //Carteiras do Usuário
            const carteiras = await Carteira.findAll({
                where: { usuario_id : id }
            });

            //Categorias do Usuário
            const categorias = await Categoria.findAll({
                where: { usuario_id : id }
            });

            res.render('crud-despesas/despesa',{categorias, carteiras, erros:listaDeErros.errors});
        }
        
    },
    async create (req, res) {
        let listaDeErros = validationResult(req);

        //Usuário Logado
        let { id } = JSON.parse(req.session.usuario);

        //Carteiras do Usuário
        const carteiras = await Carteira.findAll({
            where: { usuario_id : id }
        });

        //Categorias do Usuário
        const categorias = await Categoria.findAll({
            where: { usuario_id : id }
        });

        res.render('crud-despesas/despesa',{categorias, carteiras});
    },
    async list (req, res) {

        let { id } = JSON.parse(req.session.usuario);

        const despesas = await Despesa.findAll({
            attributes: [
                'id', 
                'valor', 
                'obs', 
                [Sequelize.fn('date_format', Sequelize.col('data_despesa'), '%d/%m/%Y'), 'data_despesa']
            ],
            where: { usuario_id : id },
            include: [{
                model: Carteira,
                as: 'carteira',
                attributes: ['nome']
            },
            {
                model: Categoria,
                as: 'categoria',
                attributes: ['nome']
            }]
        });
                
        res.render('crud-despesas/despesalist', {despesas})
    },
    async edit (req, res) {
        let { id: usuario_id } = JSON.parse(req.session.usuario);

		const id = req.params.id;
        
        const despesa = await Despesa.findOne({
            attributes: [
            'id', 
            'valor', 
            'obs', 
            'categoria_id', 
            'carteira_id', 
            [Sequelize.fn('date_format', Sequelize.col('data_despesa'), '%Y-%m-%d'), 'data_despesa']
        ],
            where: { id : id }
        });

        //Carteiras do Usuário
        const carteiras = await Carteira.findAll({
            where: { usuario_id }
        });
        
        //Categorias do Usuário
        const categorias = await Categoria.findAll({
            where: { usuario_id }
        });

		res.render('crud-despesas/despesaedit', {despesa, carteiras, categorias});
    },
    async update (req, res) {
        let listaDeErros = validationResult(req);

        //Id da Despesa
        let id = req.params.id;

        //Id do Usuário
        let { id: usuario_id } = JSON.parse(req.session.usuario);

        if (listaDeErros.isEmpty()){
            //Campos do Formulário
            let { data, valor, categoria, carteira, obs} = req.body;

            const despesa = await Despesa.update({
                data_despesa: data,
                valor,
                categoria_id: categoria,
                carteira_id: carteira,
                obs
            },
                { where: {id} }
            )

            //Lança na tabela de movimento
            const carteiraLocal = await Carteira.findByPk(carteira);
            if (carteiraLocal.tipo!=4) {
                const retornoMov = await Mov.alteraMovimento(usuario_id,id, 0, valor, data);
            }

            const despesas = await Despesa.findAll({
                attributes: [
                    'id', 
                    'valor', 
                    'obs', 
                    [Sequelize.fn('date_format', Sequelize.col('data_despesa'), '%d/%m/%Y'), 'data_despesa']
                ],
                where: { usuario_id : id },
                include: [{
                    model: Carteira,
                    as: 'carteira',
                    attributes: ['nome']
                },
                {
                    model: Categoria,
                    as: 'categoria',
                    attributes: ['nome']
                }]
            });

            res.render('crud-despesas/despesalist', {despesas})
        }
        else {
            const despesa = await Despesa.findOne({
                attributes: [
                    'id', 
                    'valor', 
                    'obs', 
                    'categoria_id', 
                    'carteira_id', 
                    [Sequelize.fn('date_format', Sequelize.col('data_despesa'), '%Y-%m-%d'), 'data_despesa']
                ],
                where: { id : id }
            });

            //Carteiras do Usuário
            const carteiras = await Carteira.findAll({
                where: { usuario_id : id }
            });

            //Categorias do Usuário
            const categorias = await Categoria.findAll({
                where: { usuario_id : id }
            });

            res.render('crud-despesas/despesaedit',{despesa, categorias, carteiras, erros:listaDeErros.errors});
        }
    },
    async delete (req, res) {
		//Id do Usuário
        let { id: usuario_id } = JSON.parse(req.session.usuario);

		// Capturar ID da despesa a ser removida
        let id = req.params.id;
        
        id = Number(id);

        const despesa = await Despesa.findByPk(id);

		await Despesa.destroy(
            {where: {id}}
        )

        //Lança na tabela de movimento
        const carteiraLocal = await Carteira.findByPk(despesa.carteira_id);
        if (carteiraLocal.tipo!=4) {
            const retornoMov = await Mov.excluiMovimento(usuario_id, id, 0);
        }

        const despesas = await Despesa.findAll({
            attributes: [
                'id', 
                'valor', 
                'obs', 
                [Sequelize.fn('date_format', Sequelize.col('data_despesa'), '%d/%m/%Y'), 'data_despesa']
            ],
            where: { usuario_id : usuario_id },
            include: [{
                model: Carteira,
                as: 'carteira',
                attributes: ['nome']
            },
            {
                model: Categoria,
                as: 'categoria',
                attributes: ['nome']
            }]
        });

        res.render('crud-despesas/despesalist', {despesas})
    }
}