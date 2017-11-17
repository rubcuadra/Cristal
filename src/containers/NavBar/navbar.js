import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import * as actions from '../../actions';
import "./navbar.css";

class NavBar extends Component{
	constructor(props){
		super(props);
		this.state = {
			isMenuActive:false,
			path:window.location.pathname,
		}
	}

	render(){
		 const {isMenuActive,path} = this.state;
		 const menuClass =`mobile-menu-toggle ${isMenuActive?"active":""}`;
		 const navClass =`main-navigation text-center ${isMenuActive?"open":""}`;

		 return (
		  	<header className="navbar navbar-sticky">
		  	
		  	<Link className="site-logo visible-desktop" to="/">
				<span>[</span><span className="text-gray"> CRISTAL </span><span>]</span>
		  	</Link>

		  	<Link className="site-logo visible-mobile" to="/">
				<span>[</span> <span className="text-gray"> C </span> <span>]</span>
		  	</Link>


		      <nav className={navClass}>
		        <ul className="menu">          
		          <li className={`${path==="/noticias"?"current-menu-item":""}`}>
		            <Link to="/noticias">NOTICIAS</Link>
		          </li>

		          <li className={`${path==="/reps"?"current-menu-item":""}`}>
		            <Link to="/reps">REPRESENTATES</Link>
		          </li>		          
		        </ul>
		      </nav>

		      <div className="toolbar">
		        <div className="inner">
		          <a href="/" onClick={(e)=>{e.preventDefault(); this.setState({isMenuActive:!isMenuActive})}} className={menuClass}>
		            <i className="material-icons">menu</i>
		          </a>
		          <Link to="/perfil"><i className="material-icons">person</i></Link>
		          <a href="/" onClick={(e)=>{e.preventDefault(); this.props.logout();}}><i className="material-icons">exit_to_app</i></a>
		        </div>
		      </div>
		    </header>
		  );
	}
}

//Promote BookList to a Container from Component
//It needs to know about this new dispatch method, selectBook. Available as prop
export default connect(null,{logout:actions.signoutUser})(NavBar);