import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import './styles/index.css'; //Mis estilos
import './styles/theme.css'; //Theme styles

//middlewares
import thunk from 'redux-thunk'
import ReduxPromise from 'redux-promise';

//Components
import Login from './containers/Login/login';
import News from './containers/News/news';
import Reps from './containers/Reps/reps';
import Welcome from './components/welcome';
import Auth from "./components/hoc/require_auth";
import ProfileView from './containers/Perfil/perfil';
import {AUTH_USER} from "./actions/types";

const middleware = [thunk,ReduxPromise];
const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore);
//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
export const store = createStoreWithMiddleware(reducers);

//Auth on refresh
const user = JSON.parse( localStorage.getItem("user") );
if (user) store.dispatch( {type: AUTH_USER, payload: user} );

ReactDOM.render(
  <Provider store={ store }>
  	<BrowserRouter>
  	  <div id="main">
  	  	<Switch>
          <Route path='/login' component={Login}/>
          <Route path='/noticias' component={ Auth(News) }/>
          <Route path='/mensajes' component={ Auth(Welcome) }/>
          <Route path='/reps' component={ Auth(Reps) }/>
          <Route path='/perfil' component={ Auth(ProfileView) }/>
          <Route path='/' component={ Auth(Welcome) }/>
  	  	</Switch>
  	  </div>
  	</BrowserRouter>
  </Provider>
  , document.getElementById('root'));

registerServiceWorker();