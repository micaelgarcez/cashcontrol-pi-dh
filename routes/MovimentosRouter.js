var express = require('express');
var router = express.Router();
const VerificaSeEstaLogado = require('../middlewares/VerificaSeEstaLogado');
const MovimentoController = require('../controllers/MovimentoController');
const { check, validationResult, body } = require('express-validator');

router.get('/movimentos', VerificaSeEstaLogado, MovimentoController.listaMovimentos);
router.post('/transferencias/store', VerificaSeEstaLogado, [
    check("data").not().isEmpty().withMessage("Informe a Data"),
    check("carteira").not().isEmpty().withMessage("Selecione a Carteira!"),
    check("valor").not().isEmpty().withMessage("Informe o Valor!"),
    check("carteiradestino").not().isEmpty().withMessage("Selecione a Carteira Destino!")
], MovimentoController.store);
router.put('/transferencias/:id/update', VerificaSeEstaLogado, [
    check("data").not().isEmpty().withMessage("Informe a Data"),
    check("carteira").not().isEmpty().withMessage("Selecione a Carteira!"),
    check("valor").not().isEmpty().withMessage("Informe o Valor!"),
    check("carteiradestino").not().isEmpty().withMessage("Selecione a Carteira Destino!")
], MovimentoController.update);
router.delete('/transferencias/:id/delete', VerificaSeEstaLogado, MovimentoController.delete);

module.exports = router;