import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Interval from './Interval';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Button from 'react-bootstrap/Button';


class App extends Component {

  state = {
    Person: {
      fullName: "Imen Charfi",
      bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ",
      imgSrc: <img src={logo} className="App-logo" alt="logo" />,
      profession: "Front-end developper",
      
    },
    show: true
  };
   
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  
  render() {
    return (
      <>
        {this.state.show && (
          <>
          <div className='container '>
           
          
            <div className="card " >
      <div className="card-Img">{this.state.Person.imgSrc}</div>
      <div className="card-Body">
        <h1 className="card-Title">{this.state.Person.fullName}</h1>
        <h2 className="card-Title">{this.state.Person.profession}</h2>
        <p className="card-Text">
        {this.state.Person.bio}
        </p>
        <Interval/>
       
      </div>
    </div>
   
            </div>
          </>
        )}
        <div className='container  mt-4'>
 <Button variant="primary" onClick={this.handleShowPerson}>click here</Button>
 </div>
      </>
    );
  }
  
}
export default App;
