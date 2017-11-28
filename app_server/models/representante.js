function Representante(id, email, src, name, lastname, postAborto, postLGBT, post3de3, postMatrimonio, postSegPub, asistenciaLunes, asistenciaMartes, asistenciaMiercoles, asistenciaJueves, asistenciaViernes, cargo, partido){
	this.id = id;
	this.email = email;
	this.src = src;
	this.name = name;
	this.lastname = lastname;
	this.postAborto = postAborto;
	this.postLGBT = postLGBT;
	this.post3de3 = post3de3;
	this.postMatrimonio = postMatrimonio;
	this.postSegPub = postSegPub;
	this.asistenciaLunes = asistenciaLunes;
	this.asistenciaMartes = asistenciaMartes;
	this.asistenciaMiercoles = asistenciaMiercoles;
	this.asistenciaJueves = asistenciaJueves;
	this.asistenciaViernes = asistenciaViernes;
	this.cargo = cargo;
	this.partido = partido;
}

module.exports = Representante;