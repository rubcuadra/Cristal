import React, { Component } from 'react';
import _ from "lodash";
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FacebookLogin from 'react-facebook-login';
import Modal from "../../components/modal";
import "./login.css";

class EmailForm extends Component{
	
	onSubmit(e){
		e.preventDefault();
		const {email,password} = this.refs;
		//AQUI SE PODRIA HACER ALGO CON LA INFO
		if (email.value&&password.value) 
			this.props.onSubmit( {email:email.value,pwd:password.value} );
	}

	render(){
		const {onClose} = this.props;
		return (
		  <Modal>
		  	<div className="emailFormContainer max">
		  		<a href="/" onClick={(e)=>{e.preventDefault(); onClose();}}><i className="material-icons">close</i></a>
			  	
			  	<form onSubmit={this.onSubmit.bind(this)} className="align-vertical max">
				 	<h4>Login with email!</h4>
			 		<label>Email</label><input ref="email" type="email"/>
			 		<label>Password</label><input ref="password" type="password"/>
					<button type="submit">Login</button>
				</form>
			</div>
		  </Modal>
		);
	}
}

class Login extends Component{
	
	constructor(props){
		super(props);
		this.state = {showEmailForm:false};
	}

	onEmailLoginClick({email,pwd}){
		this.props.signinUser( {email,pwd,push:this.props.history.push} ); //Algun parametro
	}

	responseFacebook(response){
		// console.log(response);
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
	  const {showEmailForm} = this.state;
	  const ep = window.location.hostname==="rubcuadra.github.io"?"/Cristal":"";
	  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
	  
	  return (
	  <div className="loginContainer align-vertical">
  	  	{showEmailForm?<EmailForm onSubmit={this.onEmailLoginClick.bind(this)} onClose={()=>{this.setState({showEmailForm:false})}}/>:null}
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
            <button className="fbutton" onClick={()=>{this.setState({showEmailForm:!this.state.showEmailForm})}}>Login with Email</button>
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