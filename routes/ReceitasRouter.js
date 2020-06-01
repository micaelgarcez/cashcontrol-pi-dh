var express = require('express');
var router = express.Router();
const VerificaSeEstaLogado = require('../middlewares/VerificaSeEstaLogado');
const ReceitaController = require('../controllers/ReceitaController');
const { check, validationResult, body } = require('express-validator');


router.get('/listacarteirasreceita', VerificaSeEstaLogado, ReceitaController.listaCarteirasReceita);
router.get('/receitas', VerificaSeEstaLogado, ReceitaController.list);
//router.get('/receitas/create', VerificaSeEstaLogado, ReceitaController.create);
router.post('/receitas/store', VerificaSeEstaLogado, [
    check("data").not().isEmpty().withMessage("Informe a Data"),
    check("valor").not().isEmpty().withMessage("Informe o Valor!"),
    check("tiporeceita").not().isEmpty().withMessage("Selecione o Tipo!"),
    check("carteira").not().isEmpty().withMessage("Selecione a Categoria!")
], ReceitaController.store);
router.get('/receitas/:id/edit', VerificaSeEstaLogado, ReceitaController.edit);
router.put('/receitas/:id/update', VerificaSeEstaLogado, [
    check("data").not().isEmpty().withMessage("Informe a Data"),
    check("valor").not().isEmpty().withMessage("Informe o Valor!"),
    check("tiporeceita").not().isEmpty().withMessage("Selecione o Tipo!"),
    check("carteira").not().isEmpty().withMessage("Selecione a Categoria!")
], ReceitaController.update);
router.delete('/receitas/:id/delete', VerificaSeEstaLogado, ReceitaController.delete);

module.exports = router;