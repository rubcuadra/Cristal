import React, { Component } from 'react';
import NavBar from "../NavBar/navbar.js";
import { connect } from 'react-redux';
import {fetchNews} from '../../actions';
import "./news.css";

const NewsTable = ({news})=>{
	const el = news.map( (e,ix)=>{ 
		return (
			<div key={ix} className="nCell">
				<div className="newsCell">
					<div>
						<h2> {e.name} </h2>
						<p> {e.content} </p>
					</div>
					
					<div>
						<img alt="" src={e.src}/>
					</div>	
				</div>
				<hr/>
			</div>
		)
	});
	return <div className="newsTable align-vertical"><hr/>{el}</div>;
}


class News extends Component {
  
  componentDidMount(){
  	this.props.fetchNews(); //Pedir las noticias
  }

  render() {
    return (
      <div className="newsContainer">
      	  <NavBar/>
      	  <NewsTable news={this.props.news}/>
      </div>
    );
  }
}

function mapStateToProps({news}){	
	return {news};
}

export default connect(mapStateToProps,{fetchNews})(News);