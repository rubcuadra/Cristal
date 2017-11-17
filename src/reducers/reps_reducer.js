import { FETCH_REPS } from '../actions/types';

export default function(state=[],action){
	switch(action.type){
		case FETCH_REPS: 
			return action.payload;
		default:
			return state;
	}
}