import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import newsReducer from "./news_reducer";
import repsReducer from "./reps_reducer";

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  news: newsReducer,
  reps: repsReducer
});

export default rootReducer;