/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/all.js":
/*!***********************!*\
  !*** ./src/js/all.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./popup */ "./src/js/popup/index.js");

/***/ }),

/***/ "./src/js/popup/index.js":
/*!*******************************!*\
  !*** ./src/js/popup/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function popupActive(arrayItems) {
  arrayItems.forEach(function (item) {
    if (!$(item).classList.contains('active')) {
      $(item).classList.add('active');
    }
  });
}

function popupDeactivated(arrayItems) {
  arrayItems.forEach(function (item) {
    if ($(item).classList.contains('active')) {
      $(item).classList.remove('active');
    }
  });
}

var popups = {
  "login": "\n        <form method=\"POST\" action=\"/login\">\n        <span class=\"title\">Login</span>  \n        <button class=\"btn facebook\" ype=\"button\">Login com Facebook</button>\n        <button class=\"btn google\" type=\"button\">Login com Google</button>\n\n        <div class=\"container-field\">\n            <input type=\"email\" id=\"email\" name=\"email\" placeholder=\"Informe seu Email\">\n        </div>\n\n        <div class=\"container-field\">\n            <input type=\"password\" id=\"password\" name=\"password\" placeholder=\"Digite sua Senha\">\n        </div>            \n\n        <button class=\"btn green\" type=\"submit\">Entrar</button>\n        \n        <div class=\"last-link\">\n            <p> N\xE3o tem conta?  \n            <a class=\"popup\" href=\"#cadastro\" onclick=\"activePopup(event)\">Clique Aqui!</a>\n            </p>\n        </div>\n        </div>\n        </form>\n    ",
  "cadastro": "\n        <form id=\"form-pizza\" method=\"POST\" action=\"/users/store\">\n            <span class=\"title\">Cadastro</span>\n            <div class=\"container-field\">\n                <input type=\"text\" name=\"nome\" id=\"nome\" placeholder=\"Digite o seu nome\">\n            </div>\n            <div class=\"container-field\">\n                <input type=\"email\" name=\"email\" id=\"email\" placeholder=\"Digite o seu E-mail\">\n            </div>\n            <div class=\"container-field\">\n                <input type=\"password\" name=\"password\" id=\"password\" placeholder=\"Digite sua senha\">\n            </div>\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n            <div class=\"last-link\">\n                <p> J\xE1 tem conta?  \n                <a class=\"popup\" href=\"#login\" onclick=\"activePopup(event)\">Clique Aqui!</a>\n                </p>\n            </div>\n        </form>\n    ",
  "carteiraCreate": "\n        <form method=\"POST\" action=\"/carteiras/store\">\n            <span class=\"title\"> Nova Carteira </span>\n\n            <div class=\"container-field\">\n                <input type=\"text\" name=\"nome\" id=\"nome\" placeholder=\"Digite o nome da carteira\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"tipo\" id=\"tipo\" required>\n                <option selected disabled>Selecione</option>\n                <option value=\"1\">Conta Banc\xE1ria</option>\n                <option value=\"2\">Carteira Pessoal</option>\n                <option value=\"3\">Cart\xE3o de D\xE9bito</option>\n                <option value=\"4\">Cart\xE3o de Cr\xE9dito</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n                <div class=\"container-more-options\">\n                    <input type=\"hidden\" name=\"cor\" value=\"#449999\" >\n                    <button type=\"button\" class=\"selected\" style=\"background: #449999;\"></button>\n                    <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                    <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                    <span class=\"mais-opcoes\">Mais Cores</span>\n                    <div class=\"container-opcoes\">\n                        <div class=\"todas-opcoes\">\n                            <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                            <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                            <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                            <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                            <button type=\"button\" style=\"background: #cc0000;\" data-color=\"#cc0000\"></button>\n                            <button type=\"button\" style=\"background: #2cb1e1;\" data-color=\"#2cb1e1\"></button>\n                            <button type=\"button\" style=\"background: #c58be2;\" data-color=\"#c58be2\"></button>\n                            <button type=\"button\" style=\"background: #99cc00;\" data-color=\"#99cc00\"></button>\n                            <button type=\"button\" style=\"background: #ffbd21;\" data-color=\"#ffbd21\"></button>\n                            <button type=\"button\" style=\"background: #ff4444;\" data-color=\"#ff4444\"></button>\n                            <button type=\"button\" style=\"background: #8ad5f0;\" data-color=\"#8ad5f0\"></button>\n                            <button type=\"button\" style=\"background: #d6adeb;\" data-color=\"#d6adeb\"></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"container-field\">\n                <div class=\"container-more-options\">\n                    <input type=\"hidden\" name=\"icone\" value=\"eco\" >\n                    <button type=\"button\" class=\"material-icons selected\">eco</button>\n                    <button type=\"button\" class=\"material-icons\">shopping_basket</button>\n                    <button type=\"button\" class=\"material-icons\">stars</button>\n                    <span class=\"mais-opcoes\">Mais Icones</span>\n                    <div class=\"container-opcoes\">\n                        <div class=\"todas-opcoes\">\n                            <button type=\"button\" class=\"material-icons\">support</button>\n                            <button type=\"button\" class=\"material-icons\">store</button>\n                            <button type=\"button\" class=\"material-icons\">track_changes</button>\n                            <button type=\"button\" class=\"material-icons\">verified_user</button>\n                            <button type=\"button\" class=\"material-icons\">work_outline</button>\n                            <button type=\"button\" class=\"material-icons\">call</button>\n                            <button type=\"button\" class=\"material-icons\">business</button>\n                            <button type=\"button\" class=\"material-icons\">mail_outline</button>\n                            <button type=\"button\" class=\"material-icons\">sentiment_satisfied_alt</button>\n                            <button type=\"button\" class=\"material-icons\">vpn_key</button>\n                            <button type=\"button\" class=\"material-icons\">weekend</button>\n                            <button type=\"button\" class=\"material-icons\">signal_wifi_4_bar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "carteiraEdit": "\n        <form method=\"POST\" action=\"/carteiras/cateiraEdit_id/update?_method=PUT\">\n            <span class=\"title\"> Editar Carteira </span>\n\n            <div class=\"container-field\">\n            <input type=\"text\" name=\"nome\" id=\"nome\" value=\"cateiraEdit_name\" placeholder=\"Digite o nome da carteira\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"tipo\" id=\"tipo\" required>\n                <option value=\"1\">Conta Banc\xE1ria</option>\n                <option value=\"2\">Carteira Pessoal</option>\n                <option value=\"3\">Cart\xE3o de D\xE9bito</option>\n                <option value=\"4\">Cart\xE3o de Cr\xE9dito</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n                <div class=\"container-more-options\">\n                    <input type=\"hidden\" name=\"cor\" value=\"cateiraEdit_color\" >\n                    <button type=\"button\" class=\"selected\" style=\"background: cateiraEdit_color;\"></button>\n                    <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                    <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                    <span class=\"mais-opcoes\">Mais Cores</span>\n                    <div class=\"container-opcoes\">\n                        <div class=\"todas-opcoes\">\n                            <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                            <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                            <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                            <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                            <button type=\"button\" style=\"background: #cc0000;\" data-color=\"#cc0000\"></button>\n                            <button type=\"button\" style=\"background: #2cb1e1;\" data-color=\"#2cb1e1\"></button>\n                            <button type=\"button\" style=\"background: #c58be2;\" data-color=\"#c58be2\"></button>\n                            <button type=\"button\" style=\"background: #99cc00;\" data-color=\"#99cc00\"></button>\n                            <button type=\"button\" style=\"background: #ffbd21;\" data-color=\"#ffbd21\"></button>\n                            <button type=\"button\" style=\"background: #ff4444;\" data-color=\"#ff4444\"></button>\n                            <button type=\"button\" style=\"background: #8ad5f0;\" data-color=\"#8ad5f0\"></button>\n                            <button type=\"button\" style=\"background: #d6adeb;\" data-color=\"#d6adeb\"></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"container-field\">\n                <div class=\"container-more-options\">\n                    <input type=\"hidden\" name=\"icone\" value=\"cateiraEdit_ico\" >\n                    <button type=\"button\" class=\"material-icons selected\">cateiraEdit_ico</button>\n                    <button type=\"button\" class=\"material-icons\">shopping_basket</button>\n                    <button type=\"button\" class=\"material-icons\">stars</button>\n                    <span class=\"mais-opcoes\">Mais Icones</span>\n                    <div class=\"container-opcoes\">\n                        <div class=\"todas-opcoes\">\n                            <button type=\"button\" class=\"material-icons\">support</button>\n                            <button type=\"button\" class=\"material-icons\">store</button>\n                            <button type=\"button\" class=\"material-icons\">track_changes</button>\n                            <button type=\"button\" class=\"material-icons\">verified_user</button>\n                            <button type=\"button\" class=\"material-icons\">work_outline</button>\n                            <button type=\"button\" class=\"material-icons\">call</button>\n                            <button type=\"button\" class=\"material-icons\">business</button>\n                            <button type=\"button\" class=\"material-icons\">mail_outline</button>\n                            <button type=\"button\" class=\"material-icons\">sentiment_satisfied_alt</button>\n                            <button type=\"button\" class=\"material-icons\">vpn_key</button>\n                            <button type=\"button\" class=\"material-icons\">weekend</button>\n                            <button type=\"button\" class=\"material-icons\">signal_wifi_4_bar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "tiporeceitaCreate": "\n        <form method=\"POST\" action=\"/tiporeceitas/store\">\n            <span class=\"title\"> Novo Tipo de Receita </span>\n\n            <div class=\"container-field\">\n            <input type=\"text\" name=\"nome\" id=\"nome\" placeholder=\"Digite o nome do Tipo de Receita\" required>\n            </div>\n\n            <div class=\"container-field\">\n                <div class=\"container-more-options\">\n                    <input type=\"hidden\" name=\"cor\" value=\"#449999\" >\n                    <button type=\"button\" class=\"selected\" style=\"background: #449999;\"></button>\n                    <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                    <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                    <span class=\"mais-opcoes\">Mais Cores</span>\n                    <div class=\"container-opcoes\">\n                        <div class=\"todas-opcoes\">\n                            <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                            <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                            <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                            <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                            <button type=\"button\" style=\"background: #cc0000;\" data-color=\"#cc0000\"></button>\n                            <button type=\"button\" style=\"background: #2cb1e1;\" data-color=\"#2cb1e1\"></button>\n                            <button type=\"button\" style=\"background: #c58be2;\" data-color=\"#c58be2\"></button>\n                            <button type=\"button\" style=\"background: #99cc00;\" data-color=\"#99cc00\"></button>\n                            <button type=\"button\" style=\"background: #ffbd21;\" data-color=\"#ffbd21\"></button>\n                            <button type=\"button\" style=\"background: #ff4444;\" data-color=\"#ff4444\"></button>\n                            <button type=\"button\" style=\"background: #8ad5f0;\" data-color=\"#8ad5f0\"></button>\n                            <button type=\"button\" style=\"background: #d6adeb;\" data-color=\"#d6adeb\"></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"container-field\">\n                <div class=\"container-more-options\">\n                    <input type=\"hidden\" name=\"icone\" value=\"eco\" >\n                    <button type=\"button\" class=\"material-icons selected\">eco</button>\n                    <button type=\"button\" class=\"material-icons\">shopping_basket</button>\n                    <button type=\"button\" class=\"material-icons\">stars</button>\n                    <span class=\"mais-opcoes\">Mais Icones</span>\n                    <div class=\"container-opcoes\">\n                        <div class=\"todas-opcoes\">\n                            <button type=\"button\" class=\"material-icons\">support</button>\n                            <button type=\"button\" class=\"material-icons\">store</button>\n                            <button type=\"button\" class=\"material-icons\">track_changes</button>\n                            <button type=\"button\" class=\"material-icons\">verified_user</button>\n                            <button type=\"button\" class=\"material-icons\">work_outline</button>\n                            <button type=\"button\" class=\"material-icons\">call</button>\n                            <button type=\"button\" class=\"material-icons\">business</button>\n                            <button type=\"button\" class=\"material-icons\">mail_outline</button>\n                            <button type=\"button\" class=\"material-icons\">sentiment_satisfied_alt</button>\n                            <button type=\"button\" class=\"material-icons\">vpn_key</button>\n                            <button type=\"button\" class=\"material-icons\">weekend</button>\n                            <button type=\"button\" class=\"material-icons\">signal_wifi_4_bar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "tiporeceitaEdit": "\n        <form method=\"POST\" action=\"/tiporeceitas/tiporeceitaEdit_id/update?_method=PUT\">\n            <span class=\"title\"> Editar Tipo de Receita </span>\n\n            <div class=\"container-field\">\n            <input type=\"text\" name=\"nome\" id=\"nome\" value=\"tiporeceitaEdit_name\" placeholder=\"Digite o nome do Tipo de Receita\" required>\n            </div>\n\n            <div class=\"container-field\">\n                <div class=\"container-more-options\">\n                    <input type=\"hidden\" name=\"cor\" value=\"tiporeceitaEdit_color\" >\n                    <button type=\"button\" class=\"selected\" style=\"background: tiporeceitaEdit_color;\"></button>\n                    <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                    <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                    <span class=\"mais-opcoes\">Mais Cores</span>\n                    <div class=\"container-opcoes\">\n                        <div class=\"todas-opcoes\">\n                            <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                            <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                            <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                            <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                            <button type=\"button\" style=\"background: #cc0000;\" data-color=\"#cc0000\"></button>\n                            <button type=\"button\" style=\"background: #2cb1e1;\" data-color=\"#2cb1e1\"></button>\n                            <button type=\"button\" style=\"background: #c58be2;\" data-color=\"#c58be2\"></button>\n                            <button type=\"button\" style=\"background: #99cc00;\" data-color=\"#99cc00\"></button>\n                            <button type=\"button\" style=\"background: #ffbd21;\" data-color=\"#ffbd21\"></button>\n                            <button type=\"button\" style=\"background: #ff4444;\" data-color=\"#ff4444\"></button>\n                            <button type=\"button\" style=\"background: #8ad5f0;\" data-color=\"#8ad5f0\"></button>\n                            <button type=\"button\" style=\"background: #d6adeb;\" data-color=\"#d6adeb\"></button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"container-field\">\n                <div class=\"container-more-options\">\n                    <input type=\"hidden\" name=\"icone\" value=\"tiporeceitaEdit_ico\" >\n                    <button type=\"button\" class=\"material-icons selected\">tiporeceitaEdit_ico</button>\n                    <button type=\"button\" class=\"material-icons\">shopping_basket</button>\n                    <button type=\"button\" class=\"material-icons\">stars</button>\n                    <span class=\"mais-opcoes\">Mais Icones</span>\n                    <div class=\"container-opcoes\">\n                        <div class=\"todas-opcoes\">\n                            <button type=\"button\" class=\"material-icons\">support</button>\n                            <button type=\"button\" class=\"material-icons\">store</button>\n                            <button type=\"button\" class=\"material-icons\">track_changes</button>\n                            <button type=\"button\" class=\"material-icons\">verified_user</button>\n                            <button type=\"button\" class=\"material-icons\">work_outline</button>\n                            <button type=\"button\" class=\"material-icons\">call</button>\n                            <button type=\"button\" class=\"material-icons\">business</button>\n                            <button type=\"button\" class=\"material-icons\">mail_outline</button>\n                            <button type=\"button\" class=\"material-icons\">sentiment_satisfied_alt</button>\n                            <button type=\"button\" class=\"material-icons\">vpn_key</button>\n                            <button type=\"button\" class=\"material-icons\">weekend</button>\n                            <button type=\"button\" class=\"material-icons\">signal_wifi_4_bar</button>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "receitaCreate": "\n        <form method=\"POST\" action=\"/receitas/store\">\n            <span class=\"title\"> Nova Receita </span>\n\n            <div class=\"container-field\">\n            <input type=\"date\" name=\"data\" id=\"data\" value=\"receitaCreate_data\" placeholder=\"\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"number\" step=\"0.01\" name=\"valor\" id=\"valor\" placeholder=\"Valor da Receita\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"carteira\" id=\"carteira-create\" required>\n                <option selected disabled>Selecione a Carteira</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"tiporeceita\" id=\"tiporeceita-create\" required>\n                <option selected disabled>Selecione Tipo de Receita</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"text\" name=\"obs\" id=\"obs\" placeholder=\"Observa\xE7\xE3o\">\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "receitaEdit": "\n        <form method=\"POST\" action=\"/receitas/receitaEdit_id/update?_method=PUT\">\n            <span class=\"title\"> Editar Receita </span>\n\n            <div class=\"container-field\" id=\"divReceitaDataEdit\">\n                <input type=\"date\" name=\"data\" id=\"data\" value=\"receitaEdit_data\" placeholder=\"\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"number\" step=\"0.01\" name=\"valor\" id=\"valor\" value=\"receitaEdit_valor\" placeholder=\"Valor da Receita\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"carteira\" id=\"carteira-create\" required>\n                <option selected disabled>Selecione a Carteira</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"tiporeceita\" id=\"tiporeceita-create\" required>\n                <option selected disabled>Selecione Tipo de Receita</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"text\" name=\"obs\" id=\"obs\" value=\"receitaEdit_obs\" placeholder=\"Observa\xE7\xE3o\">\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "transferenciaCreate": "\n        <form method=\"POST\" action=\"/transferencias/store\">\n            <span class=\"title\"> Nova Transfer\xEAncia </span>\n\n            <div class=\"container-field\">\n            <input type=\"date\" name=\"data\" id=\"data\" value=\"transferenciaCreate_data\" placeholder=\"\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"carteira\" id=\"carteiraOrigem-create\" required>\n                <option selected disabled>Selecione a Carteira de Origem</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"number\" step=\"0.01\" name=\"valor\" id=\"valor\" placeholder=\"Valor da Transfer\xEAncia\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"carteiradestino\" id=\"carteiraDestino-create\" required>\n                <option selected disabled>Selecione a Carteira de Destino</option>\n            </select>\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "transferenciaEdit": "\n        <form method=\"POST\" action=\"/transferencias/transferenciaEdit_id/update?_method=PUT\">\n            <span class=\"title\"> Nova Transfer\xEAncia </span>\n\n            <div class=\"container-field\">\n            <input type=\"date\" name=\"data\" id=\"data\" value=\"transferenciaEdit_data\" placeholder=\"\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"carteira\" id=\"carteiraOrigem-edit\">\n                <option selected disabled>Selecione a Carteira de Origem</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"number\" step=\"0.01\" name=\"valor\" id=\"valor\" value=\"transferenciaEdit_valor\" placeholder=\"Valor da Transfer\xEAncia\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"carteiradestino\" id=\"carteiraDestino-edit\">\n                <option selected disabled>Selecione a Carteira de Destino</option>\n            </select>\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "categoriaCreate": "\n    <form method=\"POST\" action=\"/categorias/store\">\n        <span class=\"title\"> Nova Categoria </span>\n\n        <div class=\"container-field\">\n        <input type=\"text\" name=\"nome\" id=\"nome\" placeholder=\"Digite o nome da categoria\" required>\n        </div>\n\n        <div class=\"container-field\">\n        <select name=\"tipo\" id=\"tipo\" required>\n            <option selected disabled>Selecione</option>\n            <option value=\"1\">Fixa</option>\n            <option value=\"2\">Vari\xE1vel</option>\n        </select>\n        </div>\n\n        <div class=\"container-field\">\n            <div class=\"container-more-options\">\n                <input type=\"hidden\" name=\"cor\" value=\"#449999\" >\n                <button type=\"button\" class=\"selected\" style=\"background: #449999;\"></button>\n                <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                <span class=\"mais-opcoes\">Mais Cores</span>\n                <div class=\"container-opcoes\">\n                    <div class=\"todas-opcoes\">\n                        <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                        <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                        <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                        <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                        <button type=\"button\" style=\"background: #cc0000;\" data-color=\"#cc0000\"></button>\n                        <button type=\"button\" style=\"background: #2cb1e1;\" data-color=\"#2cb1e1\"></button>\n                        <button type=\"button\" style=\"background: #c58be2;\" data-color=\"#c58be2\"></button>\n                        <button type=\"button\" style=\"background: #99cc00;\" data-color=\"#99cc00\"></button>\n                        <button type=\"button\" style=\"background: #ffbd21;\" data-color=\"#ffbd21\"></button>\n                        <button type=\"button\" style=\"background: #ff4444;\" data-color=\"#ff4444\"></button>\n                        <button type=\"button\" style=\"background: #8ad5f0;\" data-color=\"#8ad5f0\"></button>\n                        <button type=\"button\" style=\"background: #d6adeb;\" data-color=\"#d6adeb\"></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"container-field\">\n            <div class=\"container-more-options\">\n                <input type=\"hidden\" name=\"icone\" value=\"eco\" >\n                <button type=\"button\" class=\"material-icons selected\">eco</button>\n                <button type=\"button\" class=\"material-icons\">shopping_basket</button>\n                <button type=\"button\" class=\"material-icons\">stars</button>\n                <span class=\"mais-opcoes\">Mais Icones</span>\n                <div class=\"container-opcoes\">\n                    <div class=\"todas-opcoes\">\n                        <button type=\"button\" class=\"material-icons\">support</button>\n                        <button type=\"button\" class=\"material-icons\">store</button>\n                        <button type=\"button\" class=\"material-icons\">track_changes</button>\n                        <button type=\"button\" class=\"material-icons\">verified_user</button>\n                        <button type=\"button\" class=\"material-icons\">work_outline</button>\n                        <button type=\"button\" class=\"material-icons\">call</button>\n                        <button type=\"button\" class=\"material-icons\">business</button>\n                        <button type=\"button\" class=\"material-icons\">mail_outline</button>\n                        <button type=\"button\" class=\"material-icons\">sentiment_satisfied_alt</button>\n                        <button type=\"button\" class=\"material-icons\">vpn_key</button>\n                        <button type=\"button\" class=\"material-icons\">weekend</button>\n                        <button type=\"button\" class=\"material-icons\">signal_wifi_4_bar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <button class=\"btn green\" type=\"submit\">Salvar</button>\n    </form>\n    ",
  "categoriaEdit": "\n    <form method=\"POST\" action=\"/categorias/categoriaEdit_id/update?_method=PUT\">\n        <span class=\"title\"> Editar Cartegoria </span>\n        <div class=\"container-field\">\n            <input type=\"text\" name=\"nome\" id=\"nome\" value=\"categoriaEdit_name\" placeholder=\"Digite o nome da categoria\" required>\n        </div> \n        <div class=\"container-field\">\n            <select name=\"tipo\" id=\"tipo\" required>\n            <option selected disabled>Selecione</option>\n            <option value=\"1\">Fixa</option>\n            <option value=\"2\">Vari\xE1vel</option>\n            </select>\n        </div>\n\n        <div class=\"container-field\">\n            <div class=\"container-more-options\">\n                <input type=\"hidden\" name=\"cor\" value=\"categoriaEdit_color\" >\n                <button type=\"button\" class=\"selected\" style=\"background: categoriaEdit_color;\"></button>\n                <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                <span class=\"mais-opcoes\">Mais Cores</span>\n                <div class=\"container-opcoes\">\n                    <div class=\"todas-opcoes\">\n                        <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                        <button type=\"button\" style=\"background: #9933cc;\" data-color=\"#9933cc\"></button>\n                        <button type=\"button\" style=\"background: #0099cc;\" data-color=\"#0099cc\"></button>\n                        <button type=\"button\" style=\"background: #669900;\" data-color=\"#669900\"></button>\n                        <button type=\"button\" style=\"background: #cc0000;\" data-color=\"#cc0000\"></button>\n                        <button type=\"button\" style=\"background: #2cb1e1;\" data-color=\"#2cb1e1\"></button>\n                        <button type=\"button\" style=\"background: #c58be2;\" data-color=\"#c58be2\"></button>\n                        <button type=\"button\" style=\"background: #99cc00;\" data-color=\"#99cc00\"></button>\n                        <button type=\"button\" style=\"background: #ffbd21;\" data-color=\"#ffbd21\"></button>\n                        <button type=\"button\" style=\"background: #ff4444;\" data-color=\"#ff4444\"></button>\n                        <button type=\"button\" style=\"background: #8ad5f0;\" data-color=\"#8ad5f0\"></button>\n                        <button type=\"button\" style=\"background: #d6adeb;\" data-color=\"#d6adeb\"></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"container-field\">\n            <div class=\"container-more-options\">\n                <input type=\"hidden\" name=\"icone\" value=\"categoriaEdit_ico\" >\n                <button type=\"button\" class=\"material-icons selected\">categoriaEdit_ico</button>\n                <button type=\"button\" class=\"material-icons\">shopping_basket</button>\n                <button type=\"button\" class=\"material-icons\">stars</button>\n                <span class=\"mais-opcoes\">Mais Icones</span>\n                <div class=\"container-opcoes\">\n                    <div class=\"todas-opcoes\">\n                        <button type=\"button\" class=\"material-icons\">support</button>\n                        <button type=\"button\" class=\"material-icons\">store</button>\n                        <button type=\"button\" class=\"material-icons\">track_changes</button>\n                        <button type=\"button\" class=\"material-icons\">verified_user</button>\n                        <button type=\"button\" class=\"material-icons\">work_outline</button>\n                        <button type=\"button\" class=\"material-icons\">call</button>\n                        <button type=\"button\" class=\"material-icons\">business</button>\n                        <button type=\"button\" class=\"material-icons\">mail_outline</button>\n                        <button type=\"button\" class=\"material-icons\">sentiment_satisfied_alt</button>\n                        <button type=\"button\" class=\"material-icons\">vpn_key</button>\n                        <button type=\"button\" class=\"material-icons\">weekend</button>\n                        <button type=\"button\" class=\"material-icons\">signal_wifi_4_bar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        <button class=\"btn green\" type=\"submit\">Salvar</button>\n    </form>\n    ",
  "despesaCreate": "\n    <form method=\"POST\" action=\"/despesas/store\">\n        <span class=\"title\"> Nova Despesa </span>\n\n        <div class=\"container-field\">\n            <input type=\"date\" name=\"data\" id=\"data\" value=\"despesaCreate_data\" placeholder=\"\">\n        </div>\n\n        <div class=\"container-field\">\n            <input type=\"number\" step=\"0.01\" name=\"valor\" id=\"valor\" placeholder=\"Valor da Despesa\">\n        </div>\n    \n        <div class=\"container-field\">\n            <select name=\"categoria\" id=\"despesaCategoria-create\">\n                <option selected disabled>Selecione a Categoria</option>\n            </select>\n        </div>\n\n        <div class=\"container-field\">\n            <select name=\"carteira\" id=\"despesaCarteira-create\">\n                <option selected disabled>Selecione a Carteira</option>\n            </select>\n        </div>\n\n        <div class=\"container-field\">\n            <input type=\"text\" name=\"obs\" id=\"obs\" placeholder=\"Obs\">\n        </div>\n    \n    \n        <button class=\"btn green\" type=\"submit\">Salvar</button>\n    </form>\n    ",
  "despesaEdit": "\n    <form method=\"POST\" action=\"/despesas/despesaEdit_id/update?_method=PUT\">\n    <span class=\"title\"> Editar Despesa</span>\n    \n        <div class=\"container-field\">\n            <input type=\"date\" name=\"data\" id=\"data\" value=\"despesaEdit_data\" placeholder=\"\">\n        </div>\n\n        <div class=\"container-field\">\n            <input type=\"number\" step=\"0.01\" name=\"valor\" id=\"valor\" value=\"despesaEdit_valor\" placeholder=\"Valor da Despesa\">\n        </div>\n    \n        <div class=\"container-field\">\n            <select name=\"categoria\" id=\"despesaCategoria-edit\">\n                <option selected disabled>Selecione a Categoria</option>\n            </select>\n        </div>\n\n        <div class=\"container-field\">\n            <select name=\"carteira\" id=\"despesaCarteira-edit\">\n                <option selected disabled>Selecione a Carteira</option>\n            </select>\n        </div>\n\n        <div class=\"container-field\">\n            <input type=\"text\" name=\"obs\" id=\"obs\" value=\"despesaEdit_obs\" placeholder=\"Obs\">\n        </div>\n    \n    \n        <button class=\"btn green\" type=\"submit\">Salvar</button>\n    </form>\n    ",
  "metaCreate": "\n        <form method=\"POST\" action=\"/metas/store\">\n            <span class=\"title\"> Nova Meta </span>\n\n            <div class=\"container-field\">\n            <input type=\"number\" name=\"ano\" id=\"ano\" value=\"metaCreate_ano\" placeholder=\"\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"number\" name=\"mes\" id=\"mes\" value=\"metaCreate_mes\" placeholder=\"\" required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"categoria\" id=\"categoria-create\" required>\n                <option selected disabled>Selecione a Categoria</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"number\" step=\"0.01\" name=\"valorprevisto\" id=\"valorprevisto\" placeholder=\"Valor Previsto\" required>\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    ",
  "metaEdit": "\n        <form method=\"POST\" action=\"/metas/metaEdit_id/update?_method=PUT\">\n            <span class=\"title\"> Alterar Meta </span>\n\n            <div class=\"container-field\">\n            <input type=\"number\" name=\"ano\" id=\"ano\" value=\"metaEdit_ano\" readonly required>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"number\" name=\"mes\" id=\"mes\" value=\"metaEdit_mes\" readonly required>\n            </div>\n\n            <div class=\"container-field\">\n            <select name=\"categoria\" id=\"categoria-edit\" required>\n                <option selected disabled>Selecione a Categoria</option>\n            </select>\n            </div>\n\n            <div class=\"container-field\">\n            <input type=\"number\" step=\"0.01\" name=\"valorprevisto\" id=\"valorprevisto\" value=\"valorprevistoEdit\" placeholder=\"Valor Previsto\" required>\n            </div>\n\n            <button class=\"btn green\" type=\"submit\">Salvar</button>\n        </form>\n    "
};
var classPopup = ['.sob-popup', '#popup'];

function activePopup(e) {
  e.preventDefault();
  var popupOpen = e.target.getAttribute('href').replace('#', '');
  console.log(popupOpen);

  switch (popupOpen) {
    case 'carteiraEdit':
      var id = e.target.getAttribute('data-id');
      fetch("/carteiras/".concat(id, "/edit")).then(function (response) {
        return response.json();
      }).then(function (data) {
        var newForm = popups[popupOpen].replace('cateiraEdit_id', data.id).replace('cateiraEdit_name', data.nome).replace(/cateiraEdit_color/g, data.cor).replace(/cateiraEdit_ico/g, data.icone).replace("value=\"".concat(data.tipo, "\""), "value=\"".concat(data.tipo, "\" selected"));
        $('#popup .popup-body').innerHTML = newForm;
        var moreLinks = document.querySelectorAll('.mais-opcoes');
        moreLinks.forEach(function (link) {
          link.onclick = function (e) {
            activeMoreOptions(e);
          };
        });
        var buttonsVariables = document.querySelectorAll('.container-more-options button');
        buttonsVariables.forEach(function (button) {
          button.onclick = function (e) {
            changeVariable(e);
          };
        });
        popupActive(classPopup);
      });
      break;

    default:
      $('#popup .popup-body').innerHTML = popups[popupOpen];
      var moreLinks = document.querySelectorAll('.mais-opcoes');
      moreLinks.forEach(function (link) {
        link.onclick = function (e) {
          activeMoreOptions(e);
        };
      });
      var buttonsVariables = document.querySelectorAll('.container-more-options button');
      buttonsVariables.forEach(function (button) {
        button.onclick = function (e) {
          changeVariable(e);
        };
      });
      popupActive(classPopup);
      break;
  }

  if (popupOpen == 'tiporeceitaEdit') {
    var _id = e.target.getAttribute('data-id');

    var name = e.target.getAttribute('data-name');
    var color = e.target.getAttribute('data-color');
    var ico = e.target.getAttribute('data-ico');
    var newForm = popups[popupOpen].replace('tiporeceitaEdit_id', _id).replace('tiporeceitaEdit_name', name).replace(/tiporeceitaEdit_color/g, color).replace(/tiporeceitaEdit_ico/g, ico);
    $('#popup .popup-body').innerHTML = newForm;

    var _moreLinks = document.querySelectorAll('.mais-opcoes');

    _moreLinks.forEach(function (link) {
      link.onclick = function (e) {
        activeMoreOptions(e);
      };
    });

    var _buttonsVariables = document.querySelectorAll('.container-more-options button');

    _buttonsVariables.forEach(function (button) {
      button.onclick = function (e) {
        changeVariable(e);
      };
    });

    popupActive(classPopup);
  } else if (popupOpen == 'receitaCreate') {
    var data = new Date();
    var dataReceita = data.getFullYear() + '-' + ("0" + (data.getMonth() + 1)).slice(-2) + '-' + ("0" + data.getDate()).slice(-2);

    var _newForm = popups[popupOpen].replace('receitaCreate_data', dataReceita);

    $('#popup .popup-body').innerHTML = _newForm;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteirasreceita", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach(function (carteira) {
          var option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute('value', carteira.id);
          $('#carteira-create').appendChild(option);
        });
      }
    };

    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "/listatiposreceita", true);
    ajax2.send();

    ajax2.onreadystatechange = function () {
      if (ajax2.readyState == 4 && (ajax2.status == 200 || ajax2.status == 304)) {
        var data2 = JSON.parse(ajax2.responseText);
        data2.forEach(function (tiporeceita) {
          var option2 = document.createElement("option");
          option2.innerHTML = tiporeceita.nome;
          option2.setAttribute('value', tiporeceita.id);
          $('#tiporeceita-create').appendChild(option2);
        });
      }
    };

    popupActive(classPopup);
  } else if (popupOpen == 'receitaEdit') {
    var receitaId = e.target.getAttribute('data-id');
    var receitaData = e.target.getAttribute('data-date');
    var receitaValor = e.target.getAttribute('data-valor');
    var receitaCarteiraId = e.target.getAttribute('data-carteiraid');
    var receitaTipoCarteiraId = e.target.getAttribute('data-tiporeceitaid');
    var receitaObs = e.target.getAttribute('data-obs');

    var _newForm2 = popups[popupOpen].replace('receitaEdit_id', receitaId).replace('receitaEdit_data', receitaData).replace('receitaEdit_valor', receitaValor).replace('receitaEdit_obs', receitaObs);

    $('#popup .popup-body').innerHTML = _newForm2;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteirasreceita", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach(function (carteira) {
          var option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute('value', carteira.id);

          if (carteira.id == receitaCarteiraId) {
            option.setAttribute('selected', 'selected');
          }

          $('#carteira-create').appendChild(option);
        });
      }
    };

    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "/listatiposreceita", true);
    ajax2.send();

    ajax2.onreadystatechange = function () {
      if (ajax2.readyState == 4 && (ajax2.status == 200 || ajax2.status == 304)) {
        var data2 = JSON.parse(ajax2.responseText);
        data2.forEach(function (tiporeceita) {
          var option2 = document.createElement("option");
          option2.innerHTML = tiporeceita.nome;
          option2.setAttribute('value', tiporeceita.id);

          if (tiporeceita.id == receitaTipoCarteiraId) {
            option2.setAttribute('selected', 'selected');
          }

          $('#tiporeceita-create').appendChild(option2);
        });
      }
    };

    popupActive(classPopup);
  } else if (popupOpen == 'transferenciaCreate') {
    var data = new Date();
    var dataReceita = data.getFullYear() + '-' + ("0" + (data.getMonth() + 1)).slice(-2) + '-' + ("0" + data.getDate()).slice(-2);

    var _newForm3 = popups[popupOpen].replace('transferenciaCreate_data', dataReceita);

    $('#popup .popup-body').innerHTML = _newForm3;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteirasreceita", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach(function (carteira) {
          var option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute('value', carteira.id);
          $('#carteiraOrigem-create').appendChild(option);
          var option2 = document.createElement("option");
          option2.innerHTML = carteira.nome;
          option2.setAttribute('value', carteira.id);
          $('#carteiraDestino-create').appendChild(option2);
        });
        popupActive(classPopup);
      }
    };
  } else if (popupOpen == 'transferenciaEdit') {
    var tId = e.target.getAttribute('data-id');
    var tData = e.target.getAttribute('data-date');
    var tValor = e.target.getAttribute('data-valor');
    var tCarteiraId = e.target.getAttribute('data-carteiraid');
    var tCarteiraId_transf = e.target.getAttribute('data-carteiraid-transf');

    var _newForm4 = popups[popupOpen].replace('transferenciaEdit_id', tId).replace('transferenciaEdit_data', tData).replace('transferenciaEdit_valor', tValor);

    $('#popup .popup-body').innerHTML = _newForm4;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteirasreceita", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach(function (carteira) {
          var option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute('value', carteira.id);

          if (carteira.id == tCarteiraId) {
            option.setAttribute('selected', 'selected');
          } else {
            option.setAttribute('disabled', 'disabled');
          }

          $('#carteiraOrigem-edit').appendChild(option);
          var option2 = document.createElement("option");
          option2.innerHTML = carteira.nome;
          option2.setAttribute('value', carteira.id);

          if (carteira.id == tCarteiraId_transf) {
            option2.setAttribute('selected', 'selected');
          } else {
            option2.setAttribute('disabled', 'disabled');
          }

          $('#carteiraDestino-edit').appendChild(option2);
        });
        popupActive(classPopup);
      }
    };
  } else if (popupOpen == 'categoriaEdit') {
    var _id2 = e.target.getAttribute('data-id');

    var _name = e.target.getAttribute('data-name');

    var type = e.target.getAttribute('data-type');

    var _color = e.target.getAttribute('data-color');

    var _ico = e.target.getAttribute('data-ico');

    var _newForm5 = popups[popupOpen].replace('categoriaEdit_id', _id2).replace('categoriaEdit_name', _name).replace(/categoriaEdit_color/g, _color).replace(/categoriaEdit_ico/g, _ico).replace(">".concat(type), "selected>".concat(type));

    $('#popup .popup-body').innerHTML = _newForm5;

    var _moreLinks2 = document.querySelectorAll('.mais-opcoes');

    _moreLinks2.forEach(function (link) {
      link.onclick = function (e) {
        activeMoreOptions(e);
      };
    });

    var _buttonsVariables2 = document.querySelectorAll('.container-more-options button');

    _buttonsVariables2.forEach(function (button) {
      button.onclick = function (e) {
        changeVariable(e);
      };
    });

    popupActive(classPopup);
  } else if (popupOpen == 'despesaEdit') {
    var dId = e.target.getAttribute('data-id');
    var dData = e.target.getAttribute('data-date');
    var dValor = e.target.getAttribute('data-valor');
    var dCarteiraId = e.target.getAttribute('data-carteiraid');
    var dCategoriaId = e.target.getAttribute('data-categoriaid');
    var dObs = e.target.getAttribute('data-obs');

    var _newForm6 = popups[popupOpen].replace('despesaEdit_id', dId).replace('despesaEdit_data', dData).replace('despesaEdit_valor', dValor).replace('despesaEdit_obs', dObs);

    $('#popup .popup-body').innerHTML = _newForm6;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteiras", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach(function (carteira) {
          var option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute('value', carteira.id);

          if (carteira.id == dCarteiraId) {
            option.setAttribute('selected', 'selected');
          }

          $('#despesaCarteira-edit').appendChild(option);
        });
      }
    };

    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "/listaCategoriasMetas", true);
    ajax2.send();

    ajax2.onreadystatechange = function () {
      if (ajax2.readyState == 4 && (ajax2.status == 200 || ajax2.status == 304)) {
        var data2 = JSON.parse(ajax2.responseText);
        data2.forEach(function (categoria) {
          var option2 = document.createElement("option");
          option2.innerHTML = categoria.nome;
          option2.setAttribute('value', categoria.id);

          if (categoria.id == dCategoriaId) {
            option2.setAttribute('selected', 'selected');
          }

          $('#despesaCategoria-edit').appendChild(option2);
        });
      }
    };

    popupActive(classPopup);
  } else if (popupOpen == 'metaCreate') {
    var tAno = e.target.getAttribute('data-ano');
    var tMes = e.target.getAttribute('data-mes');
    var tCategoriaId = e.target.getAttribute('data-categoriaid'); //categoria-create

    var _newForm7 = popups[popupOpen].replace('metaCreate_ano', tAno).replace('metaCreate_mes', tMes);

    $('#popup .popup-body').innerHTML = _newForm7;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listaCategoriasMetas", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach(function (categoria) {
          if (categoria.id == tCategoriaId) {
            var option = document.createElement("option");
            option.setAttribute('selected', 'selected');
            option.innerHTML = categoria.nome;
            option.setAttribute('value', categoria.id);
            $('#categoria-create').appendChild(option);
          }
        });
        popupActive(classPopup);
      }
    };
  } else if (popupOpen == 'metaEdit') {
    var _tId = e.target.getAttribute('data-id');

    var _tAno = e.target.getAttribute('data-ano');

    var _tMes = e.target.getAttribute('data-mes');

    var _tCategoriaId = e.target.getAttribute('data-categoriaid');

    var tvalorprevisto = e.target.getAttribute('data-valor'); //categoria-create

    var _newForm8 = popups[popupOpen].replace('metaEdit_id', _tId).replace('metaEdit_ano', _tAno).replace('metaEdit_mes', _tMes).replace('valorprevistoEdit', tvalorprevisto);

    $('#popup .popup-body').innerHTML = _newForm8;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listaCategoriasMetas", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach(function (categoria) {
          if (categoria.id == _tCategoriaId) {
            var option = document.createElement("option");
            option.setAttribute('selected', 'selected');
            option.innerHTML = categoria.nome;
            option.setAttribute('value', categoria.id);
            $('#categoria-edit').appendChild(option);
          }
        });
        popupActive(classPopup);
      }
    };
  } else if (popupOpen == 'despesaCreate') {
    var data = new Date();
    var dataDespesa = data.getFullYear() + '-' + ("0" + (data.getMonth() + 1)).slice(-2) + '-' + ("0" + data.getDate()).slice(-2);

    var _newForm9 = popups[popupOpen].replace('despesaCreate_data', dataDespesa);

    $('#popup .popup-body').innerHTML = _newForm9;
    var ajax = new XMLHttpRequest();
    ajax.open("GET", "/listacarteiras", true);
    ajax.send();

    ajax.onreadystatechange = function () {
      if (ajax.readyState == 4 && (ajax.status == 200 || ajax.status == 304)) {
        var data = JSON.parse(ajax.responseText);
        data.forEach(function (carteira) {
          var option = document.createElement("option");
          option.innerHTML = carteira.nome;
          option.setAttribute('value', carteira.id);
          $('#despesaCarteira-create').appendChild(option);
        });
      }
    };

    var ajax2 = new XMLHttpRequest();
    ajax2.open("GET", "/listaCategoriasMetas", true);
    ajax2.send();

    ajax2.onreadystatechange = function () {
      if (ajax2.readyState == 4 && (ajax2.status == 200 || ajax2.status == 304)) {
        var data2 = JSON.parse(ajax2.responseText);
        data2.forEach(function (categoria) {
          var option2 = document.createElement("option");
          option2.innerHTML = categoria.nome;
          option2.setAttribute('value', categoria.id);
          $('#despesaCategoria-create').appendChild(option2);
        });
      }
    };

    popupActive(classPopup);
  }
}

function deactivatedPopup(e) {
  e.preventDefault();
  popupDeactivated(classPopup);
}

window.addEventListener("load", function () {
  var popupsLinks = document.querySelectorAll('.popup');
  popupsLinks.forEach(function (link) {
    link.onclick = function (e) {
      activePopup(e);
    };
  });

  $('.sob-popup').onclick = function (e) {
    deactivatedPopup(e);
  };
}, false); // ATIVA A SELEÇÃO A CAIXA COM MAIS OPÇÕES NO FORMULÁRIO DO POPUP

function activeMoreOptions(e) {
  e.target.closest('.container-more-options').classList.add('active');
} // Muda a variável que está selecionada


function changeVariable(e) {
  var valorHexadecimal = e.target.getAttribute('data-color');
  var valorTexto = e.target.innerText;
  var container = e.target.closest('.container-more-options');

  if (valorHexadecimal != null) {
    container.children[0].value = valorHexadecimal;
    container.children[1].style.backgroundColor = valorHexadecimal;
  }

  if (valorTexto != '') {
    container.children[0].value = valorTexto;
    container.children[1].innerText = valorTexto;
  }

  container.classList.remove('active');
  return;
}

/***/ }),

/***/ "./src/sass/all.scss":
/*!***************************!*\
  !*** ./src/sass/all.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/sass/default.scss":
/*!*******************************!*\
  !*** ./src/sass/default.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************************!*\
  !*** multi ./src/js/all.js ./src/sass/default.scss ./src/sass/all.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Users\PC\Desktop\cashcontrol\src\js\all.js */"./src/js/all.js");
__webpack_require__(/*! C:\Users\PC\Desktop\cashcontrol\src\sass\default.scss */"./src/sass/default.scss");
module.exports = __webpack_require__(/*! C:\Users\PC\Desktop\cashcontrol\src\sass\all.scss */"./src/sass/all.scss");


/***/ })

/******/ });