var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config()

const mongoose = require('mongoose')

mongoose.connect(process.env.URI)
    .then(()=> console.log('Conectado ao banco de dados'))
    .catch(error => console.error('Erro de conexão com o banco:', error))

var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');
var usersRouter = require('./routes/users');
var registerRouter = require('./routes/register')
var forgetPasswordRouter = require('./routes/forgetPassword')
var logarRouter = require('./routes/loginController')
var registrarRouter = require('./routes/registerController');
var escalaRouter = require('./routes/escala')
var configuracoesRouter = require('./routes/configuracoes')
var coroinhasRouter = require('./routes/coroinhas')
var addRouter = require('./routes/add')
var addControllerRouter = require('./routes/addController')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  if (mongoose.connection.readyState !== 1) {
    return res.render('inicializando', {paginaAtiva: 'none'});
  }
  next();
});

app.use('/', loginRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/register', registerRouter)
app.use('/forgetPassword', forgetPasswordRouter)
app.use('/logar', logarRouter)
app.use('/registrar', registrarRouter)
app.use('/escala', escalaRouter)
app.use('/configuracoes', configuracoesRouter)
app.use('/coroinhas', coroinhasRouter)
app.use('/add', addRouter)
app.use('/addController', addControllerRouter)

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
