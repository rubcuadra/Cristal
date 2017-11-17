import React, { Component } from 'react';
import NavBar from "../NavBar/navbar.js";
import { connect } from 'react-redux';
import { fetchRepresentantes } from '../../actions';
import "./reps.css";

const Light = ({description,status})=>{
  const cn = `light ${status?"green":"red"}`;
  return (<div className="light-cell align-vertical">
    <div className={cn}/>
    <p>{description}</p>
  </div>);
} //TODO Cortar a Iniciales si no cabe

const RepsTable = ({reps})=>{
  // Funcion para los focos
  const renderLights = (obj)=>{
    const toRender = []; let c  = 0;
    for(const key in obj){toRender.push(<Light key={c} description={key} status={obj[key]}/>);c++;}
    return toRender;
  };

  const r = reps.map( (e,ix)=>{ 
    const background = `url(${e.src}) center center no-repeat`;
    return (
      <div key={ix} className="rCell align-vertical">
        <div className="rep_pic" style={{background}}/>
        <div className="rep_name">
          <h3>{`${e.name}`}</h3>
          <p>{e.cargo}</p>
        </div>
        <hr/>
        <div className="lights align-vertical">
          
          <div>
            <div className="subSectionName">VOTOS</div>
            <div className="sectionDes align">
              { renderLights( e.votos ) }
            </div>  
          </div>

          <div>
            <div className="subSectionName">ASISTENCIA</div>
            <div className="sectionDes align">
              { renderLights( e.asistencia ) }
            </div>  
          </div>
          
          <div>
            <div className="subSectionName">EMPATIA</div>
            <div className="sectionDes">{e.email.toUpperCase()}</div>  
          </div>

        </div>

        <hr/>

        <div className="rContact align">
          <div className="subSectionName">CONTACTO</div>
          <div className="sectionDes"><a href={`mailto:${e.email.toUpperCase()}`}>{e.email.toUpperCase()}</a></div>  
        </div>
      </div>)
    });
  return <div className="repsTable">{r}</div>;
}


class Representantes extends Component {
  
  componentDidMount(){
  	this.props.fetchRepresentantes(); //Pedir los representantes
  }

  render() {
    return (
      <div className="repsContainer">
      	  <NavBar/>
      	  <RepsTable reps={this.props.reps}/>
      </div>
    );
  }
}

function mapStateToProps({reps}){	
	return {reps};
}

export default connect(mapStateToProps,{fetchRepresentantes})(Representantes);