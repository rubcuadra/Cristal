import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';
import {Link} from 'react-router-dom';
import NavBar from "../NavBar/navbar";
import {fakeInterests} from "../../actions/fakeData";
import * as actions from '../../actions';
import PSlider from "../../components/slider";
import "./perfil.css";

const CheckBox = ({input,meta:{touched,error}})=>{
	return <input {...input} defaultChecked={input.value} type="checkbox"/>
};

const TextInput = ({input,meta:{touched,error},cName})=>{
	return <input {...input} type="text" placeholder={cName}/>; 
}

class PostsNew extends Component{

	constructor(props){
		super(props);
		this.onSubmit = this.onSubmit.bind(this);
		this.state = {topics:[]};
	}

	componentWillMount(){
		const {auth:{data}} = this.props; //La agrega reduxForm
		const temp = {};
		//Inicializar cosas para que inputs tengan entradas
		data.intereses.forEach(i=>{temp[`cat_${i.k}`]=true});
		data.posturas.forEach(i=>{temp[`slide_${i.k}`]=i.v});
	
		this.props.initialize(
			{
				uName:data.name,
				...temp,
			}
		);					
	}

	componentDidMount(){
		this.setState( {topics:fakeInterests} )
	}

	onSubmit(values){
		console.log(values);
		console.log("SUBMIT");
		// this.props.createPost(values, ()=>this.props.history.push('/') );
	}

	renderSliders(posturas){
		return posturas.map((item,ix)=>{
			return <Field key={ix} name={`slide_${item.k}`} tagName={item.k} value={item.v} component={ PSlider }/> 
		});
	}

	render(){
		const {handleSubmit,auth} = this.props; //La agrega reduxForm
		const {data} = auth;
		const {topics} = this.state;
		const background = `url(${data.src}) center center no-repeat`;

		return (
			<div className="profileContainer max">
			  <NavBar/>
			  <form className="align max" onSubmit={handleSubmit(this.onSubmit)}>
				<div className="personal align-vertical">
					<div className="userInfo max align-vertical">
					  <div style={{background}} className="pp-name"/>
					  <div style={{width:"100%"}} className="infoInput align">
						  <label>Nombre</label>
						  <Field name="uName" cName={data.name} component={ TextInput } />
					  </div>
					</div>
					<hr/>
					<div className="topicsContainer max align-vertical">
						<h1>Intereses</h1>
						<ul>
							{
							  topics.map((item,i)=>{
								return (<li key={i}>
									<span>{item.v}</span>
									<Field name={`cat_${item.k}`} component={CheckBox}/>
								</li>)
						      })
							}
						</ul>
					</div>
				</div>
				<div className="sliders align-vertical">
					<div className="info">
						<h3>Posturas</h3>
						<div className="icon-wrapper">
							<i className="material-icons">thumb_down</i>
							<i className="material-icons">sentiment_neutral</i>
							<i className="material-icons">thumb_up</i>
						</div>
					</div>
					<div className="slidersContainer">
						{
							this.renderSliders(data.posturas)
						}						
					</div>
					<div>
						<Link to="/" className="btn btn-ghost">Cancelar</Link>
						<button type="submit" style={{backgroundColor:'rgb(138,179,212)'}} className="btn btn-primary waves-effect waves-light">Guardar</button>
					</div>
				</div>
			  </form>
			</div>
		);
	}
}

//Necesaria, se le debe pasar al reduxForm y siempre tendra un object values
function validate(values){
	const errors = {};
	// console.log(values);
	//Validate
	if (!values.uName) { errors.uName = "Escribir un nombre!"; }
	//If errors == {}, OK, se hace el submit
	//else Hay un error en la validacion
	return errors;
}

function mapStateToProps({auth}){
	return {auth};
}

//Handle multiple forms correctly by using 'form'
//Must bew unique across the app 
export default reduxForm({
	validate,
	form: 'PostsNew'
})( connect(mapStateToProps,actions)(PostsNew) );