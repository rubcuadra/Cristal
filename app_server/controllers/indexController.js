var db = require("../../db.js");
var News = require("../models/news");
var Representante = require("../models/representante");
var User = require("../models/user");

//hacer login
exports.login = function (req,res){
	console.log("select * from users where email = "+req.body.email+" and pwd = "+req.body.pwd+";");
	
	db.get().query("select * from users where email = '"+req.body.email+"' and pwd = '"+req.body.pwd+"';", function(err, rows){
		
		/*
		var response = {};
		var data = {};
		
		if (err){
			response.status = "ERROR";
			response.message = err;
			console.log("error here");
			console.log(err);
		}
		
		if (rows && rows.length > 0){
			response.status = "SUCCESS";
			response.message = "User logged in";
			data = {email:rows[0].email};
			console.log("got the user");
			req.session.email = rows[0].email;
			response.data = data;
		} else {
			response = {status:"ERROR", message:"User not found"};
			console.log("there is no user");
		}
		res.send(response);
		*/
		
		
		var response = {};
		var userList = [];
		
		if (err){
			response.status = "ERROR";
			response.message = err;
		}
		if (rows.length > 0){
			for (var a = 0; a<rows.length; a++){
				var user = new User(rows[a].id, rows[a].email, rows[a].pwd, rows[a].src, rows[a].token, rows[a].name, rows[a].lastname, rows[a].CP, rows[a].postAborto, rows[a].postLGBT, rows[a].post3de3, rows[a].postMatrimonio, rows[a].postSegPub, rows[a].Educacion, rows[a].LGBT, rows[a].Legislaciones, rows[a].Economia, rows[a].Emprendimiento, rows[a].Tecnologia, rows[a].Seguridad);
				
				userList.push(user);
				
			}
			response.status = "SUCCESS";
			response.message = "";
			response.data = userList;
		}
		else {
			response.status = "ERROR";
			response.message = "No hay usuario";
		}
		res.send(response);
		
		
		
	})
}

//registar usuario
exports.register = function (req,res){
	
	console.log(req.body);
	
	// hacer el insert
	db.get().query("insert ignore into users (email, name, src, pwd) VALUES ('"+req.body.email+"', '"+req.body.name+"', '"+req.body.src+"', '"+req.body.pwd+"');", function(err,result){
		
		var response = {};
		var data = {};
		
		if (err){
			response.status = 'ERROR';
			response.message = err;
		} else {
			data.insertId = result.insertId;
			response.status = 'SUCCESS';
			response.message = '';
			response.data = data;
			console.log(req.body.name);
			console.log(req.body.email);
		}
	});
		
		//regresar lo que rubén quiere alv
		
		db.get().query("select * from users where email = '"+req.body.email+"';", function(err, rows){
		
		var response = {};
		var userList = [];
		
		if (err){
			response.status = "ERROR";
			response.message = err;
		}
		if (rows.length > 0){
			for (var a = 0; a<rows.length; a++){
				var user = new User(rows[a].id, rows[a].email, rows[a].pwd, rows[a].src, rows[a].token, rows[a].name, rows[a].lastname, rows[a].CP, rows[a].postAborto, rows[a].postLGBT, rows[a].post3de3, rows[a].postMatrimonio, rows[a].postSegPub, rows[a].Educacion, rows[a].LGBT, rows[a].Legislaciones, rows[a].Economia, rows[a].Emprendimiento, rows[a].Tecnologia, rows[a].Seguridad);
				
				userList.push(user);
				
			}
			response.status = "SUCCESS";
			response.message = "";
			response.data = userList;
		}
		else {
			response.status = "ERROR";
			response.message = "No hay usuario";
		}
		res.send(response);
	})
		
		
		//res.send(response);
	
	
	/*
	var response = {status:"SUCCESS", message:"User registered",
					data: {user:{email:"email@server.com"}}
				   }
	res.send(response);
	*/
}

//obtener sesión del usuario loggueado
exports.session = function(req, res){
	let response = {}
	if (req.session && req.session.email){
		data = {email: req.session.email}
		response.status = "SUCCESS";
		response.message = "User already logged";
		response.data = data;		
	} else {
		response.status = "ERROR";
		response.status = "User not logged in";
	}
	res.send(response);
}

//obtener representantes de la persona
exports.getRepresentantes = function(req,res){
	console.log("select * from representantes;");
	
	db.get().query("select * from representantes;", function(err, rows){
		
		var response = {};
		var repsList = [];
		
		console.log(req.query);
		
		if (err){
			response.status = "ERROR";
			response.message = err;
		}
		if (rows.length > 0){
			for (var a = 0; a<rows.length; a++){
				var representante = new Representante(rows[a].id,rows[a].email,rows[a].src,rows[a].name,rows[a].lastname,rows[a].postAborto,rows[a].postLGBT,rows[a].post3de3,rows[a].postMatrimonio,rows[a].postSegPub,rows[a].asistenciaLunes,rows[a].asistenciaMartes,rows[a].asistenciaMiercoles,rows[a].asistenciaJueves,rows[a].asistenciaViernes,rows[a].cargo,rows[a].partido);
				
				repsList.push(representante);
				
			}
			response.status = "SUCCESS";
			response.message = "";
			response.data = repsList;
		}
		else {
			response.status = "ERROR";
			response.message = "No hay representantes";
		}
		res.send(response);
	})
}

//obtener noticias para la persona
exports.getNews = function(req,res){
	console.log("select * from news;");
	
	db.get().query("select * from news;", function(err, rows){
		
		var response = {};
		var newsList = [];
		
		if (err){
			response.status = "ERROR";
			response.message = err;
		}
		if (rows.length > 0){
			for (var a = 0; a<rows.length; a++){
				var news = new News(rows[a].id, rows[a].name, rows[a].content, rows[a].author, rows[a].src, rows[a].tag1, rows[a].tag2, rows[a].tag3);
				
				newsList.push(news);
				
			}
			response.status = "SUCCESS";
			response.message = "";
			response.data = newsList;
		}
		else {
			response.status = "ERROR";
			response.message = "No hay noticias";
		}
		res.send(response);
	})
}

//obtener el perfil de la persona
exports.getPerfil = function(req,res){
	console.log("select * from users where email = req.session.email;");
	
	db.get().query("select * from users where email = '"+req.session.email+"';", function(err, rows){
		
		var response = {};
		var userList = [];
		
		if (err){
			response.status = "ERROR";
			response.message = err;
		}
		if (rows.length > 0){
			for (var a = 0; a<rows.length; a++){
				var user = new User(rows[a].id, rows[a].email, rows[a].pwd, rows[a].src, rows[a].token, rows[a].name, rows[a].lastname, rows[a].CP, rows[a].postAborto, rows[a].postLGBT, rows[a].post3de3, rows[a].postMatrimonio, rows[a].postSegPub, rows[a].Educacion, rows[a].LGBT, rows[a].Legislaciones, rows[a].Economia, rows[a].Emprendimiento, rows[a].Tecnologia, rows[a].Seguridad);
				
				userList.push(user);
				
			}
			response.status = "SUCCESS";
			response.message = "";
			response.data = userList;
		}
		else {
			response.status = "ERROR";
			response.message = "No hay usuario";
		}
		res.send(response);
	})
}

//actualizar el perfil de la persona
exports.postPerfil = function(req,res){
	console.log("update users set name = '"+req.body.name+"', CP = '"+req.body.CP+"', postAborto = "+req.body.postAborto+", postLGBT = "+req.body.postLGBT+", post3de3 = "+req.body.post3de3+", postMatrimonio = "+req.body.postMatrimonio+", postSegPub = "+req.body.postSegPub+", Educacion = "+req.body.Educacion+", LGBT = "+req.body.LGBT+", Legislaciones = "+req.body.Legislaciones+", economia = "+req.body.Economia+", emprendimiento = "+req.body.Emprendimiento+", tecnologia = "+req.body.Tecnologia+", seguridad = "+req.body.Seguridad+" where email = '"+req.body.email+"';");
	
	db.get().query("update users set name = '"+req.body.name+"', CP = '"+req.body.CP+"', postAborto = "+req.body.postAborto+", postLGBT = "+req.body.postLGBT+", post3de3 = "+req.body.post3de3+", postMatrimonio = "+req.body.postMatrimonio+", postSegPub = "+req.body.postSegPub+", Educacion = "+req.body.Educacion+", LGBT = "+req.body.LGBT+", Legislaciones = "+req.body.Legislaciones+", economia = "+req.body.Economia+", emprendimiento = "+req.body.Emprendimiento+", tecnologia = "+req.body.Tecnologia+", seguridad = "+req.body.Seguridad+" where email = '"+req.body.email+"';", function(err,result){
		
		var response = {};
		var data = {};
		
		if (err){
			response.status = 'ERROR';
			response.message = err;
		} else {
			data.insertId = result.insertId;
			response.status = 'SUCCESS';
			response.message = '';
			response.data = data;
			console.log(req.session.email);
			console.log(req.body.name);
			console.log(req.params.email);
		}
		res.send(response);
	})
}