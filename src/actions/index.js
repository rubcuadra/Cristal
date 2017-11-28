import axios from 'axios';
import {devUser,dummyNews,dummyRepresentantes} from "./fakeData";
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_NEWS,
	FETCH_REPS
} from './types';

axios.defaults.withCredentials = true;
const ROOT_URL = 'http://localhost:3000';

export function fetchRepresentantes({CP}){
	return d=>{
		axios.get(`${ROOT_URL}/representantes?CP=${CP}`).then(({data:{data}})=>{
			const t = new Date();
			const reps = data.map(rep=>{
				return {
					_id: `${rep.id}`,
					email: rep.email,
					src:rep.src,
					name:rep.name,
					votos:{
						Aborto:rep.postAborto>50,
						"#3de3":rep.post3de3>50,
						"MI":rep.postMatrimonio>50,
						"Energia":rep.postSegPub>50,
					},
					asistencia:{
						[`${t.getDate()}/${t.getMonth()+1}`]:rep.asistenciaLunes,
						[`${t.getDate()+1}/${t.getMonth()+1}`]:rep.asistenciaMartes,
						[`${t.getDate()+2}/${t.getMonth()+1}`]:rep.asistenciaMiercoles,
						[`${t.getDate()+3}/${t.getMonth()+1}`]:rep.asistenciaJueves,		
					},
					empatia:{
						seguridad:0.98,
						salud:0.90,
						educacion:0.86,
						medio_ambiente:0.32
					},
					cargo: rep.cargo,
					partido: rep.partido,
				}
			});
			d({type:FETCH_REPS,payload:reps});
		}).catch(e=>{
			d({type:FETCH_REPS,payload:dummyRepresentantes});
		});
	}
}

export function fetchNews(){
	return d=>{
		axios.get(`${ROOT_URL}/news`).then(({data:{data}})=>{
			// const news = dummyNews;
			d({type:FETCH_NEWS,payload:data});
		}).catch(e=>{
			console.log(e);
			d({type:FETCH_NEWS,payload:dummyNews});
		});
	}
}

function getUserFromResponse({data:{data}}){
	const u = data[0];
	const temp = {
		_id: u.id,
		email: u.email,
		src: u.src,
		name:u.name,
		intereses:[],
		posturas:[
			{k:"Aborto",v:u.postAborto},
			{k:"Matrimonio Igualitario",v:u.postMatrimonio},
			{k:"Adopcion LGBT",v:u.postLGBT},
			{k:"TresDeTres",v:u.post3de3},
			{k:"Seguridad Publica",v:u.postSegPub},
		],
		CP:u.CP,
	};
	if (u.Educacion) temp.intereses.push({k:0,v:"Educacion"});
	if (u.LGBT) temp.intereses.push({k:5,v:"LGBT"});
	if (u.Legislaciones) temp.intereses.push({k:2,v:"Legislaciones"});
	if (u.Emprendimiento) temp.intereses.push({k:4,v:"Emprendimiento"});
	if (u.Tecnologia) temp.intereses.push({k:1,v:"Tecnologia"});
	if (u.Economia) temp.intereses.push({k:3,v:"Economía"});
	if (u.Seguridad) temp.intereses.push({k:6,v:"Seguridad"});
	return temp; 
}

//Debemos pasarle el push de la history...
//Submit email/password to the server
export function signinUser({ email, pwd, push }){
	return dispatch =>  {
		axios.post(`${ROOT_URL}/login`,{email,pwd}).then(response=>{
			console.log(response);
			const user = getUserFromResponse(response);
			localStorage.setItem('user', JSON.stringify(user));
			dispatch({type: AUTH_USER, payload: user });
			push('/');
		}).catch(e=>{
			console.error(e);
		});

	};
}

export function loginFB({accessToken,email,name,picture,userID,push}){
	return dispatch =>  {
		axios.post(`${ROOT_URL}/register`,{email,name,src:picture,pwd:userID}).then(r=>{
			const user = getUserFromResponse(r);
			localStorage.setItem('user', JSON.stringify(user));
			dispatch({type: AUTH_USER, payload: user });
			push('/');
		}).catch(e=>{
			console.log(e);
			//Obtener el usuario usando userID y un codigo secreto
			// const user = {...devUser,src:picture,name};//picture es una url
			// localStorage.setItem('user', JSON.stringify(user)); //Esto sigue igual
			// dispatch({type: AUTH_USER, payload: user });     //Se queda igual
			// push('/'); 
		});
		
	};
}

export function authError(error){
	return {
		type: AUTH_ERROR,
		payload: error
	};
}

export function signoutUser(){
	localStorage.removeItem("user");
	
	return {
		type: UNAUTH_USER,
		payload: {}
	}
}

export function updateProfile(data){
	return d=>{
		axios.post(`${ROOT_URL}/postperfil`,{...data}).then(r=>{
			console.log(r);
		}).catch(e=>{
			console.log(e);
		});
	}; 
}
