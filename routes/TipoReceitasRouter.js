var express = require('express');
var router = express.Router();
const VerificaSeEstaLogado = require('../middlewares/VerificaSeEstaLogado');
const TipoReceitaController = require('../controllers/TipoReceitaController');
const { check, validationResult, body } = require('express-validator');

router.get('/tiporeceitas', VerificaSeEstaLogado, TipoReceitaController.list);
router.get('/tiporeceitas/create', VerificaSeEstaLogado, TipoReceitaController.create);
router.post('/tiporeceitas/store', VerificaSeEstaLogado, [
    check("nome").not().isEmpty().withMessage("Informe o nome da Categoria!")
], TipoReceitaController.store);
router.get('/tiporeceitas/:id/edit', VerificaSeEstaLogado, TipoReceitaController.edit);
router.put('/tiporeceitas/:id/update', VerificaSeEstaLogado, [
    check("nome").not().isEmpty().withMessage("Informe o nome da Categoria!")
], TipoReceitaController.update);
router.delete('/tiporeceitas/:id/delete', VerificaSeEstaLogado, TipoReceitaController.delete);

module.exports = router;