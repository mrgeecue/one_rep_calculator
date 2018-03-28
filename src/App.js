import React, { Component } from 'react';
import InputForm from './InputForm';
import Maxes from './Maxes';


export default class App extends Component {
 constructor(){
   super();
   this.state = {
     userData: [],
     estimatedMaxes:[]
   };

   this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(data){
    console.log(data);
    this.setState({data})
  }

  handleNewArray(maxes){
    console.log("Got the maxes--->", maxes);
    this.setState({estimatedMaxes:maxes})
  }
     
  render() {
    return (
      <div className="App">
        <h1>One Rep Calculator</h1>
        <InputForm onSubmit={this.onSubmit} maxes={this.handleNewArray.bind(this)}/>
        <Maxes estimatedMaxes={this.state.estimatedMaxes}/>

      </div>
    );
  }
}

