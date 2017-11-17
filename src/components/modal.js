import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from '../index'

export default class Modal extends Component{
	componentDidMount(){
		this.modalTarget = document.createElement('div');
		this.modalTarget.className = 'my-react-modal';
		document.body.appendChild( this.modalTarget );
		this._render();
	}

	componentWillUpdate(){
		this._render();
	}

	componentWillUnmount(){
		ReactDOM.unmountComponentAtNode(this.modalTarget);
		document.body.removeChild( this.modalTarget );
	}

	_render(){
		ReactDOM.render(	
			<Provider store={store}>
				<div>
					{this.props.children}
				</div>
			</Provider>, this.modalTarget);
	}

	render(){
		// Regresar vacio
		return <noscript/>;
	}
}

// <Modal>
// 	<h1>PRUEBA</h1>
// </Modal>