var express = require('express');
var router = express.Router();

const VerificaSeEstaLogado = require('../middlewares/VerificaSeEstaLogado');

const IndexController = require('../controllers/IndexController');

router.get('/', IndexController.show);
router.get('/dashboard', VerificaSeEstaLogado, IndexController.dashboard);

module.exports = router;