import React,  { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = {
    userInput: ''
  }

  changeInputHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  };

  deleteCharHandler = (charIndex) => {
    if (this.state.userInput.length > 4) {
      const inputChars = [...this.state.userInput.split("")];
      inputChars.splice(charIndex, 1);
      const updatedInput = inputChars.join("");
      this.setState({
        userInput: updatedInput
      });
    };
  };

  render() {
    const characterList = this.state.userInput.split("").map((char, charIndex) => {
      return <Char 
        character={char} 
        key={charIndex}
        clicked={() => this.deleteCharHandler(charIndex)}/>
    });

    return (
      <div className="App">
        <input type='text' onChange={this.changeInputHandler} value={this.state.userInput}></input>
        <p>Your text: <b>{this.state.userInput}</b></p>
        <Validation inputLength={this.state.userInput.length}/>
        {characterList}
      </div>
    );
  }
}

export default App;
