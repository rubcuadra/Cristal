import {
	AUTH_USER,
	UNAUTH_USER,
	AUTH_ERROR
} from '../actions/types';

export default function(state={},action){
	switch(action.type){
		case AUTH_USER: //Fue exitosa la Auth
			return {...state, data:action.payload};
		case UNAUTH_USER:
			return action.payload;//debe ser un {}
		case AUTH_ERROR:
			return {...state, error: action.payload };
		default:
			return state;
	}
}