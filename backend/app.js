var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var database = require('./config/database')
var auth = require("./auth/main_auth")

var pacientesRouter = require('./routes/pacientes.router');
var usuariosRouter = require('./routes/usuarios.router')
var resultadoRouter = require('./routes/resultados.router')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Mongo connection
database.mongoConnect();

app.use('/usuarios', usuariosRouter);
//app.use(auth)

//Router
app.use('/pacientes', pacientesRouter);

//Forma de servir a los archivos pdfs ubicados en la ruta
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/public', express.static(`${__dirname}/storage/pdfs`))
app.use('/v1', resultadoRouter)

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
/*   res.render('error'); */
  res.send('error');
});

//Mensajes para el control de puertos
var listener = app.listen(8081, function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
});

/* var listener = app.listen(3000, function(){
  console.log('Listening on port ' + listener.address().port); //Listening on port 8888
}); */

module.exports = app;