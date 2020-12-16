import React, {Component} from 'react'
import logo from './assets/Bridgelabz.jpg' 
import './App.css';

class App extends Component{
  url = 'https://www.bridgelabz.com';
  constructor() {
    super()
    this.state = {
      userName: ''
    }
  }
  onClick = () => {
    console.log('save button is clicked!');
    window.open(this.url, '_blank');
  }
  onNameChange = (event) => {
    console.log('value is : ' + event.target.value)
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{2,}$');
    if(nameRegex.test(event.target.value)){
      this.setState({
        userName: event.target.value,
        nameerror: ''
      })
    }
    else{
      this.setState({
        nameerror: 'Please enter the correct name!'
      })
    }
  }
  render(){
    return (
      <>
        <div>
        <header className="App-header">
          <h1>
            Hello {this.state.userName} from Bridgelabz!
          </h1>
          <img src={logo} onClick={this.onClick} alt='Brigelabz logo'></img>
        </header>
        </div>
        <div className="text-box">
          <input onClick={this.onNameChange} className='inputElement'></input>
          <span className='error-output'>{this.state.nameerror}</span>
        </div>
      </>
    );
  }
  
}

export default App;
