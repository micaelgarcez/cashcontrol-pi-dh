var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');
var session = require('express-session');

var IndexRouter = require('./routes/IndexRouter');
var LoginRouter = require('./routes/LoginRouter');
var UserRouter = require('./routes/UserRouter');
var CarteiraRouter = require('./routes/CarteirasRouter');
var CategoriaRouter = require('./routes/CategoriasRouter');
var DespesaRouter = require('./routes/DespesasRouter');
var MetaRouter = require('./routes/MetasRouter');
var TipoReceitaRouter = require('./routes/TipoReceitasRouter');
var ReceitaRouter = require('./routes/ReceitasRouter');
var MovimentoRouter = require('./routes/MovimentosRouter');

require('./database/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride("_method"));
app.use(session({secret: "NOSSA-MENSAGEM-SECRETA"}));

app.use('/', IndexRouter); 
app.use('/', LoginRouter);
app.use('/', UserRouter);
app.use('/', CarteiraRouter);
app.use('/', CategoriaRouter);
app.use('/', DespesaRouter);
app.use('/', MetaRouter);
app.use('/', TipoReceitaRouter);
app.use('/', ReceitaRouter);
app.use('/', MovimentoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
