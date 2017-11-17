import React, {Component} from 'react';
import _ from "lodash";
import { connect } from 'react-redux';

export default function(ComposedComponent){
	class Authentication extends Component{

		//Antes de ser rendereado
		componentWillMount(){
			if ( !this.props.authenticated ) 
			{
				this.props.history.push('/login');	
			}
		}

		//Cuando le llegan nuevas props
		componentWillUpdate(nextProps){
			if ( !nextProps.authenticated ) 
			{
				this.props.history.push('/login');	
			}
		}

		render(){
			if (this.props.authenticated) return <ComposedComponent {...this.props}  />;
			return <div/>
		}
	}

	function mapStateToProps({auth}){
		return { authenticated: !_.isEmpty(auth) };
	}

	return connect(mapStateToProps)(Authentication);
}