var db = require("../../db.js");
var Gasolineria = require("../models/gasolineria");


exports.getAll = function(req,res){
	console.log("select * from stations;");
	
	db.get().query("select * from stations;", function(err, rows){
		
		var response = {};
		var gasList = [];
		
		if (err){
			response.status = "ERROR";
			response.message = err;
		}
		if (rows.length > 0){
			for (var a = 0; a<rows.length; a++){
				var gasolineria = new Gasolineria(rows[a].id,rows[a].nombre,rows[a].direccion,rows[a].latitud,rows[a].longitud,rows[a].precio1,rows[a].precio2,rows[a].calidad,rows[a].servicio,rows[a].visitas);
				
				gasList.push(gasolineria);
				
			}
			response.status = "SUCCESS";
			response.message = "";
			response.data = gasList;
		}
		else {
			response.status = "ERROR";
			response.message = "No hay registros";
		}
		res.send(response);
	})
}

//función que inserta un registro de gasolinería
exports.insert = function(req,res){
	console.log();
	db.get().query('insert into stations(nombre, direccion, latitud,longitud,precio1,precio2,calidad,servicio,visitas) values ("'+req.body.nombre+'","'+req.body.direccion+'",'+req.body.latitud+','+req.body.longitud+','+req.body.precio1+','+req.body.precio2+','+req.body.calidad+','+req.body.servicio+',1);', function(err,result){
		
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
		}
		res.send(response);
	})
}