var express      = require('express');
var app          = express();
var bodyParser   = require('body-parser');
var mongoose     = require('mongoose');
var session      = require('express-session');
var MongoStore   = require('connect-mongo')(session);
var path         = require('path');
var flash        = require('connect-flash');
var morgan       = require('morgan');
var cookieParser = require('cookie-parser');
var module       = require('module');
var passport     = require('passport');
var compression  = require('compression');
var mcache = require('memory-cache');
var monitor = require("os-monitor");
var nodemailer = require('nodemailer');

//Creamos el objeto de transporte
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'egonzarias21@gmail.com',
    pass: '385bc45a53'
  }
});

var mailOptions = {
  from: 'egonzarias21@gmail.com',
  to: 'egonza21@eafit.edu.co',
  subject: 'Alerta en el servidor',
  text: 'Alerta, la capacidad de computo esta llegando a su limite'
};

var mailOptions2 = {
  from: 'egonzarias21@gmail.com',
  to: 'egonza21@eafit.edu.co',
  subject: 'Alerta en el servidor',
  text: 'Alerta, poca memoria en el servidor'
};

const { url } =require('./config/database');
mongoose.connect(url,{
  useMongoClient:true
});

//monitor
monitor.start();

// define handler that will always fire every cycle
monitor.on('monitor', function(event) {
	console.log(event.type, 'corriendo')
});	

// define handler for a too high 1-minute load average
monitor.on('loadavg1', function(event) {
  	console.log(event.type, ' Load average is exceptionally high!');
  	console.log('enviando mail')
  	transporter.sendMail(mailOptions, function(error, info){
	  if (error) {
	    console.log(error);
	  } else {
	    console.log('Email enviado: ' + info.response);
	  }
	});
});

// define handler for a too low free memory
monitor.on('freemem', function(event) {
	console.log(event.type, 'Free memory is very low!');
	console.log('enviando mail')
	transporter.sendMail(mailOptions2, function(error, info){
		if (error) {
	   		console.log(error);
		} else {
			console.log('Email enviado: ' + info.response);
		}
	});
});

// var DATABASE_URL = process.env.DATABASE_URL || 'localhost';
// mongoose.connect(`mongodb://${DATABASE_URL}/Proyecto1DB`);

// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error"));
// db.once("open", function(callback){
//   console.log("Connection Succeeded");
// });

require('./config/passport')(passport);
//configuraciones
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
//middlewares
app.use(compression());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:false}));
app.use(session({
  secret:'a new hope',
  resave:false,
  saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
//rutas
require('./routes/router.js')(app,passport);
//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

app.listen(app.get('port'), () =>{
  console.log('Servidor en el puerto',app.get('port'));
});