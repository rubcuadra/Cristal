var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require('fs');

//editadas por nosotros
var indexRoutes = require('./app_server/routes/index');
var gasolineriasRoutes = require('./app_server/routes/gasolinerias');
var db = require('./db');
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var sessionData = require('./session');
var nodemailer = require('nodemailer');
var sessionStore = new MySQLStore(sessionData.options);
var emailConfig = require('./email');

var cors = require('express-cors')

var app = express();

var cors = require('cors');    
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));

app.use(function(req, res, next) {
  //res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(function(req, res, next) {
  console.log("Welcome to Cristal!");
  next();
});

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

//conectarnos a MySQL
db.connect(function(err){
	if (err){
		console.log("unable to connect to MySQL");
		process.exit(1);
	} else {
		console.log("Sucessfully connected to MySQL");
	}
});

//app.use(cookieParser()); //EDITED

app.use(
	session({
		secret:'secret',
		store:sessionStore,
		resave:false,
		saveUninitialized:false,
		unset:'destroy'
	})
);

//app.use(app.router); //EDITED

let transporter = nodemailer.createTransport(emailConfig.poolConfig);
transporter.verify(function(error, success){
	if (error){
		console.log(error);
	} else {
		console.log("Server ready to send emails");
	}
})

app.use(function(req, res, next){
	//req.session.destroy();
	next();
});

//send email

app.use(function(req, res, next){
	let mailOptions = {
		from: "Deez <hehe@gmail.com>",
		to: req.session.email,
		subject: "Bienvenido a Cristal!",
		text: "Gracias, vuelva pronto",
		html: "<html><body><h1>Gracias!</h1><p>Esperamos disfrutes la app!</p></body></html>"
	};
	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			console.log("ERROR");
			console.log(error);
		} else {
			console.log('Message sent: %s', info.messageId);
		}
	});
	next();
})


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

//RUTAS
app.use('/', indexRoutes);
app.use('/gasolinerias', gasolineriasRoutes);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  fs.readFile("./public/index.html", function(err, data){
	  res.writeHead(201, {'Content-Type': 'text/html'});
	  res.write(data);
	  res.end();
	});
});

// error handlers
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	console.log(err.message);
  	fs.readFile("./public/500.html", function(err, data){
	  res.writeHead(500, {'Content-Type': 'text/html'});
	  res.write(data);
	  res.end();
	});
});


module.exports = app;
