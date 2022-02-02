import './App.css';
import { useState, useEffect, useRef } from 'react'

import React, { Component } from "react"
import { clear } from '@testing-library/user-event/dist/clear';
let interval;

export default class App extends Component {

  constructor(props) {
    

    super(props);
    this.state = {
      inputList: [],
      count: 0,
      runningStatus: false
    }
    this.incrementWaterLayer = this.incrementWaterLayer.bind(this);
    this.decrementWaterLayer = this.decrementWaterLayer.bind(this);
  }


  incrementWaterLayer() {

    clearInterval(interval);
    
    if(!this.state.runningStatus) {

      interval = setInterval(() => {
          if(this.state.count < 5 ) {
            this.setState({count: this.state.count + 1})
            this.setState({inputList: this.state.inputList.concat(<div className="water-layer"></div>)})
            console.log("logged")
          }
        
      }, 1000);
      this.setState({runningStatus: !this.state.runningStatus})
    } else {
      clearInterval(interval);
      this.setState({runningStatus: !this.state.runningStatus})
    }
  }

  decrementWaterLayer() {
    clearInterval(interval);
    
    if(!this.state.runningStatus) {

      interval = setInterval(() => {
          if(this.state.count < 5 ) {
            this.setState({count: this.state.count - 1})
            this.setState({inputList: this.state.inputList.slice(0,this.state.inputList.length - 1)})
            console.log("logged")
          }
        
      }, 1000);
      this.setState({runningStatus: !this.state.runningStatus})
    } else {
      clearInterval(interval);
      this.setState({runningStatus: !this.state.runningStatus})
    }

  }


  render() {
    return (
      <div className="App">
  
        <div className = "bath-tub-top"> </div>
  
        <div className = "bath-tub">
          {this.state.inputList}
        </div>
  
        <div className = "bath-tub-feet">
          <div className = "bath-tub-foot"></div>
          <div className = "bath-tub-foot"></div>
        </div>
  
        <h1>Level {this.state.count}</h1>
        
        <div className = "level-buttons">
          <button onClick = {this.decrementWaterLayer}>Decrease</button>
          <button onClick = {this.incrementWaterLayer}>Increase</button>
        </div>
        
      </div>
    );
  }
}