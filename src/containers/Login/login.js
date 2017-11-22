import React, { Component } from 'react';
import _ from "lodash";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FacebookLogin from 'react-facebook-login';
import "./login.css";

class Login extends Component{
	
	onLoginClick(){
		const email=""; //Probab requiera un form...
		const password="";
		// Daremos por hecho que se logeo bien
		this.props.signinUser( {email,password,push:this.props.history.push} ); //Algun parametro
	}

	responseFacebook(response){
		console.log(response);
		const {accessToken,email,name,userID} = response;
		if (userID) { //Nos pudimos logear
			const picture = `https://graph.facebook.com/${userID}/picture?type=square&width=300`;
			this.props.loginFB({accessToken,email,name,picture,userID,push:this.props.history.push})
		}
		else{
			console.log(response);
		}
	}
	componentDidMount(){
		//Si ya esta logeado que no entre aqui
		if (!_.isEmpty(this.props.auth)) {this.props.history.push("/");}
	}

	render(){
	  const ep = window.location.hostname==="rubcuadra.github.io"?"/Cristal":"";
	  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	  return (
	  <div className="loginContainer align-vertical">
  	  	
  	  	<div className="titleContainer align-vertical">
	  		<p>Bienvenido a</p>
	  		<p><span>CRISTAL</span></p>

	  		<div>
		  		<img className="fit" alt="Logo" src={`${ep}/img/logo.png`}/>
	  		</div>
	  	</div>

	  	<div className="aboutContainer">
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus rutrum ante et turpis eleifend, id mollis lacus pharetra. Nam non augue blandit, sollicitudin nulla quis, placerat urna. Ut et dolor tortor. Cras nec turpis at tortor egestas vehicula molestie non orci. Curabitur ullamcorper urna et porttitor faucibus.</p>		  		
	  	</div>

	  	<div className="loginBttns align-vertical">
			<FacebookLogin
	          appId="1940430472878281"
	          autoLoad={isMobile}
	          fields="name,email,picture"
	          scope="email,public_profile,user_religion_politics"
	          callback={this.responseFacebook.bind(this)}/>
			
            <button className="fbutton" onClick={this.onLoginClick.bind(this)}>Login with Email</button>
	  	</div>
	  </div>);
	}
}
//React-Redux
//Obtener estados -> props
function mapStateToProps({auth}){	
	//Aqui le metemos a props lo que ocupemos del state
	return {auth};
}

//Promote BookList to a Container from Component
//It needs to know about this new dispatch method, selectBook. Available as prop
export default connect(mapStateToProps,actions)(Login);