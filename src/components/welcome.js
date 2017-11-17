import React, { Component } from 'react';
import NavBar from "../containers/NavBar/navbar";

export default class Welcome extends Component {
  render() {
    return (
      <div>
	      <NavBar/>
      	  <h1>Bienvenido!</h1>
      </div>
    );
  }
}