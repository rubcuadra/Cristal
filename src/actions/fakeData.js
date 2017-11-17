export const devUser = {
	token:"ESTOESUNTOKEN?",
	_id: "123F213XA123123121",
	email: "prueba@example.com",
	pwd:"5ff96fbf594c5b3c0a27792e599407c49277184a",
	src:"https://image.flaticon.com/teams/slug/freepik.jpg",
	name:"Bernardo",
	intereses:[
		{k:0,v:"Educacion"},
		{k:1,v:"LGBT"},
		{k:2,v:"Legislaciones"}
	],
	posturas:[
		{k:"Aborto",v:27},
		{k:"Matrimonio Igualitario",v:76},
		{k:"Adopcion LGBT",v:65},
		{k:"TresDeTres",v:90},
		{k:"Seguridad Publica",v:35},
	],
	CP:"06600",
};

export const fakeInterests = [
	{k:0,v:"Educacion"},
	{k:5,v:"LGBT"},
	{k:2,v:"Legislaciones"},
	{k:3,v:"Economía"},
	{k:4,v:"Emprendimiento"},
	{k:1,v:"Tecnologia"},
	{k:6,v:"Seguridad"},
];

export const dummyNews = [
	{
		name:"Posponen votar convocatoria para Fepade",
		content:`La ex panista lamentó que el Senado no haya sido capaz de dejar en claro que el encargado de despacho de la PGR ni siquiera tiene facultades para destituir al fiscal electoral. Los legisladores de Morena condenaron que el procedimiento no sea abierto ni garantice la participación y el escrutinio ciudadano, ya que la ruta dejará la decisión final en manos de los coordinadores. "Esta convocatoria no garantiza que la ciudadanía participe. ¿Por qué no dejar que participen? ¿Para que se puedan hacer los acuerdos políticos?", cuestionó el vicecoordinador de Morena en el Senado, Miguel Barbosa.`,
		autor:"Pedro Perez",
		src:"https://img.gruporeforma.com/imagenes/elementorelacionado/7/421/6420738.jpg",
		tags:[
			"fepade",
			"propuesta"
		]
	},
	{
		name:"Prevén reasignar 70 mil mdp en Presupuesto",
		content:`El priista aseguró que habrá recursos suficientes para enfrentar la emergencia tras los sismos, pues una parte del Fonden ya se erogó este año. "Hay recursos con cargo a seguros, hay otra fiscal, entre todo, el dinero es suficiente para que nadie que sea elegible se quede fuera", aseguró el legislador. En las reasignaciones se destinarán 8 mil millones de pesos más al campo, 6 mil 500 millones más a carreras alimentadoras, 6 millones de pesos adicionales para educación y mil 200 millones a cultura. Además, para estados y municipios habrá 7 mil millones de pesos extra de participaciones, un 4.3 por ciento más en términos reales. Se repondrá con 300 millones de pesos el Fondo de Prevención del Delito, el cual en los dos últimos años había quedado en ceros. El fondo conocido como de los moches, llamado Fortalece en 2017, que en los últimos años tuvo asignaciones de casi 10 mil millones de pesos, desapareció. Sin embargo, se compensará a los municipios con otros fondos, como el Fronterizo, con 750 millones.`,
		autor:"Juan Ramos",
		src:"https://img.gruporeforma.com/imagenes/elementorelacionado/7/421/6420401.jpg",
		tags:[
			"pri",
			"presupuesto"
		]
	},

];

export const dummyRepresentantes = [
	{
		_id: "123F213XA123123121",
		email: "luis.fernandi@hcnl.gob.mx",
		src:"http://www.pan.senado.gob.mx/wp-content/uploads/2013/07/Salazar-Fernandez-Luis-Fernando-2-240x300.jpg",
		name:"Luis Fernando Salazar Fernández",
		votos:{
			Aborto:1,
			"#3de3":0,
			"MI":1,
			"Energia":1,
		},
		asistencia:{
			"13/11":1,
			"14/11":1,
			"15/11":1,
			"16/11":1,		
		},
		empatia:{
			seguridad:0.98,
			salud:0.90,
			educacion:0.86,
			medio_ambiente:0.32
		},
		cargo: "Senador",
		partido: "PAN",
	},
	{
		_id: "123F213XA123123121",
		email: "pena.nieto@hcnl.gob.mx",
		src:"http://www.vanguardia.com.mx/sites/default/files/field/image/penatristepro-th.jpg",
		name:"Enrique Peña Nieto",
		votos:{
			Aborto:1,
			"#3de3":1,
			"MI":0,
			"Energia":1,
		},
		asistencia:{
			"13/11":1,
			"14/11":1,
			"15/11":1,
			"16/11":1, 		
		},
		empatia:{
			seguridad:0.99,
			salud:0.85,
			educacion:0.74,
			medio_ambiente:0.82
		},
		cargo: "Presidente",
		partido: "PRI",
	},
	{
		_id: "123F213XA123123121",
		email: "julio.alvarez@hcnl.gob.mx",
		src:"http://fotos.e-tlaxcala.mx/180816_diputado_del_pan_con_un_pie_en_morena.jpg",
		name:"Julio César Alvarez Gonzáles",
		votos:{
			Aborto:0,
			"#3de3":1,
			"MI":0,
			"Energia":0,
		},
		asistencia:{
			"13/11":0,
			"14/11":1,
			"15/11":1,
			"16/11":0,
		},
		empatia:{
			seguridad:0.79,
			salud:0.82,
			educacion:0.93,
			medio_ambiente:0.42
		},
		cargo: "Diputado",
		partido: "PAN",
	},
];