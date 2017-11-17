import React,{Component} from 'react';
import { Slider } from 'antd';
import "./slider.css";

const marks = {
  0:'',
  50:'',
  100:''
};

export default class CustomSlider extends Component {
  constructor(props) {
    super(props);
    const {input:{value}} = props;
    const initialState =  value>=50?[50,value]:[value,50];
    
    this.state = {
      initialState,
      sliderValues:initialState
    };
    
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(v) {
    const changedI = v[0]===50?1:0;                    //Indice que se modifico
    const sliderValues = v[0]===50?[50,v[1]]:[v[0],50];//Actualizar valores
    this.setState({ sliderValues });                   //Updatear Local
    this.props.input.onChange(sliderValues[changedI]); //Avisar a redux-form
  }

  render() {

    return (
      <div className="mSliderContainer">
        <Slider range marks={marks} defaultValue={this.state.initialState} value={this.state.sliderValues} onChange={this.handleChange}/>        
        <h3>{this.props.tagName}</h3>
      </div>
    );
  }
}
