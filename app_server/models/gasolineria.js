function Gasolineria(id, nombre, direccion, latitud, longitud, precio1, precio2, calidad, servicio, visitas){
	this.id = id;
	this.nombre = nombre;
	this.direccion = direccion;
	this.latitud = latitud;
	this.longitud = longitud;
	this.precio1 = precio1;
	this.precio2 = precio2;
	this.calidad = calidad;
	this.servicio = servicio;
	this.visitas = visitas;
}

module.exports = Gasolineria;