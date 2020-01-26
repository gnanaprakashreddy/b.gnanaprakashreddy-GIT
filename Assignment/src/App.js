import React, { Component } from 'react';
import Input from './UserInput/UserInput';
import Output from './UserOutput/UserOutput';
import './App.css';

class App extends Component{
  state={
   userName: 'Prakash'
  };
  changeUserName = (event) => {
    this.setState({
      userName : event.target.value
    })
  }
  render(){
    return (
      <div className="App">
        <h1>Assignment1</h1>
        <Input
          changeName={this.changeUserName}
          userName = {this.state.userName}/>
        <Output
          userName={this.state.userName}/>
        <Output
          userName={this.state.userName}/>
        <Output
          userName='Jaison'/>
      </div>
    ); 
  }
}

export default App;
