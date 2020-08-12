import React from 'react';
import ReactDOM from 'react-dom';
//导入样式文件
import './index.css';
//导入其他组件
import App from './table.js';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
               onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
        <App />
        {/* <Hello />
        <Hi/> */}
      </div>
    );
  }
}

// function Hello(){
//   return (
//     <div>hello,react!</div>
//   );
// }

// function Click(props){
//   return(
//     <button onClick={props.fun}>click</button>
//   );
// }



// class Hi extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {text:"h"};
//     this.ruturnHandle = this.ruturnHandle.bind(this);
//     this.alertHandle = this.alertHandle.bind(this);
//   }

//   ruturnHandle(e){
//     this.setState({text:e.target.value});
//   }

//   alertHandle(e){
//     alert(this.state.text);
//   }

//   render(){
//     return (
//       <div>
        
//         <input onChange={this.ruturnHandle}/>
//         <Click
//           onClick={this.alertHandle}
//           />
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);
