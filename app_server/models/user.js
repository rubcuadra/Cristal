function User(id, email, pwd, src, token, name, lastname, CP, postAborto, postLGBT, post3de3, postMatrimonio, postSegPub, Educacion, LGBT, Legislaciones, Economia, Emprendimiento, Tecnologia, Seguridad){
	this.id = id;
	this.email = email;
	this.pwd = pwd;
	this.token = token;
	this.src = src;
	this.name = name;
	this.lastname = lastname;
	this.CP = CP;
	this.postAborto = postAborto;
	this.postLGBT = postLGBT;
	this.post3de3 = post3de3;
	this.postMatrimonio = postMatrimonio;
	this.postSegPub = postSegPub;
	this.Educacion = Educacion;
	this.LGBT = LGBT;
	this.Legislaciones = Legislaciones;
	this.Economia = Economia;
	this.Emprendimiento = Emprendimiento;
	this.Tecnologia = Tecnologia;
	this.Seguridad = Seguridad;
}

module.exports = User;