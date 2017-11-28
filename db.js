var mysql = require('mysql')

var pool = {
	
}

exports.connect = function(done){
	pool = mysql.createPool({
		host:'localhost',
		user:'root',
		password:'root',
		port:'3306',
		database:'cristal'
	})
	done()
}

exports.get = function(){
	return pool
}