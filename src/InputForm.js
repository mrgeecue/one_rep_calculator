import React, { Component } from 'react';


export default class InputForm extends Component{
    constructor(){
        super();
        this.state = {
            newUserData: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
   getMaxes(e){
       let x = 1.0278;
       let y = 0.0278;
       let array = [1, 0.95, .90, .85, .80, .75, .70, .65, 0.60, 0.55, 0.50];
       let newArray = [];
       for(var i = 0; i < array.length; i++){
           let max = this.refs.weight.value * (36/(37- this.refs.reps.value));
           let roundedMax = (Math.round(max/20*20).toFixed(1));
           let newMax = roundedMax * array[i];
           newArray.push(newMax);
           console.log(newArray);
       }
       console.log(newArray);
       this.props.maxes(newArray);
   }

    handleSubmit(e){
        e.preventDefault();
        this.setState({ newUserData:{
            weight: this.refs.weight.value,
            reps: this.refs.reps.value
        }}, function(){
            console.log('data submitted');
            console.log("this is the newUserData-->", this.state.newUserData)
            this.props.onSubmit(this.state.newUserData);
            this.getMaxes(e);
        });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Weight</label>
                    <input type="text" ref="weight"></input>
                </div>
                <div>
                    <label>Reps</label>
                    <select name="reps" ref="reps" size="1">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        );
    }
}   
