const express = require('express');
const app = express();
const createError = require('http-errors');
const { MongoClient } = require('mongodb')
require('dotenv').config()
const uri = process.env.URI
const client = new MongoClient(uri)
//const db = client.db(process.env.DB).collection(process.env.COLL)
const checkconn = require('./checkconn')


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var checkconnRouter = require('./routes/checkconn');
const run = require('./checkconn');


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/checkconn', checkconnRouter);

app.listen(3000, () => {
  console.log("Servidor rodando...")
})



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
