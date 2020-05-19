var express = require('express');
var router = express.Router();
const VerificaSeEstaLogado = require('../middlewares/VerificaSeEstaLogado');
const LoginController = require('../controllers/LoginController');

router.get('/login', LoginController.show);
router.post('/login', LoginController.login);
router.get('/Principal', VerificaSeEstaLogado, LoginController.principal);

module.exports = router;