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
    this.increaseWaterLayer = this.increaseWaterLayer.bind(this);
    this.decreaseWaterLayer = this.decreaseWaterLayer.bind(this);
  }


  increaseWaterLayer() {

    clearInterval(interval);
    
    if(!this.state.runningStatus) {

      interval = setInterval(() => {
          if(this.state.count < 5 ) {
            this.setState({count: this.state.count + 1})
            this.setState({inputList: this.state.inputList.concat(<div className="water-layer"></div>)})
            console.log("logged")
          } else {
            clearInterval(interval)
            this.setState({runningStatus: !this.state.runningStatus})
          }
        
      }, 1000);
      this.setState({runningStatus: !this.state.runningStatus})
      
    } else {
      clearInterval(interval);
      this.setState({runningStatus: !this.state.runningStatus})
    }
  }

  decreaseWaterLayer() {
    clearInterval(interval);
    
    if(!this.state.runningStatus) {

      interval = setInterval(() => {
          if(this.state.count > 0 ) {
            this.setState({count: this.state.count - 1})
            this.setState({inputList: this.state.inputList.slice(0,this.state.inputList.length - 1)})
            console.log("logged")
          } else {
            clearInterval(interval)
            this.setState({runningStatus: !this.state.runningStatus})
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
  
        <br/>
        <br/>
        <h1>Level {this.state.count}</h1>
        <br/>
        

        <div className = {this.state.runningStatus ? 'running-status-on' : 'running-status-off'}></div>
        <br/>
        <br/>

        <div className = "level-buttons">
          <button onClick = {this.decreaseWaterLayer}>Decrease</button>
          <button onClick = {this.increaseWaterLayer}>Increase</button>
        </div>

        
        
        
      </div>
    );
  }
}