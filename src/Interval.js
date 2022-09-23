import { render } from '@testing-library/react';
import React, { Component } from 'react';

export default class Interval extends Component {
  constructor(){
    super();
    this.state ={interval: 0
    }
  }
   

    componentDidMount ()  {
        setInterval(() =>{ 
          this.setState(prevState => ({
            interval:prevState.interval + 1,
          }));
        }, 1000)
      }
    
    render() {
        return(
        <div>
        <div className="counter">
            <b>The time interval:</b> {this.state.interval}

        </div>
        </div>
    )}
}