// import axios from 'axios';
import {devUser,dummyNews,dummyRepresentantes} from "./fakeData";
import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR,
	FETCH_NEWS,
	FETCH_REPS
} from './types';

// const ROOT_URL = 'http://localhost:3090';

export function fetchRepresentantes(){
	return {
		type:FETCH_REPS,
		payload:dummyRepresentantes
	};
}

export function fetchNews(){
	
	return {
		type:FETCH_NEWS,
		payload:dummyNews
	};
	// const r = axios.get(ROOT_URL,{ headers: { authorization: localStorage.getItem('token') } });
	// return {
	// 	type:FETCH_MESSAGES, 
	// 	payload: r
    //};
}

//Debemos pasarle el push de la history...
//Submit email/password to the server
export function signinUser({ email, password, push }){
	return dispatch =>  {
		//Obtener el perfil desde el server con la combinacion email/pwd
		const user = devUser;
		
		localStorage.setItem('user', JSON.stringify(user));
		dispatch({type: AUTH_USER, payload: user });
		push('/'); 
	};
}

export function loginFB({accessToken,email,name,picture,userID,push}){
	return dispatch =>  {
		//Obtener el usuario usando userID y un codigo secreto
		const user = {...devUser,src:picture,name};//picture es una url
	
		localStorage.setItem('user', JSON.stringify(user)); //Esto sigue igual
		dispatch({type: AUTH_USER, payload: user });     //Se queda igual
		push('/'); 
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
