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
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z ]{2,}$');
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
        <h1>BridgeLabz is cool</h1>
        <div>
        <header className="App-header">
          <h2>
            Hello {this.state.userName} from Bridgelabz!
          </h2>
          <img src={logo} onClick={this.onClick} alt='Brigelabz logo'></img>
        </header>
        </div>
        <div className="text-box">
          <input onClick={this.onNameChange} className='inputElement'></input>
          <span className='error-output'>{this.state.nameerror}</span>
        </div>
        <p>At BridgeLabz, we're are a techie community of</p>
        <ul>
          <li>technologists</li>
          <li>builders</li>
          <li>thinkers</li>
        </ul>
        <p>Explanation of BridgeLabz</p>
        <p>To know about us, visit <a href="https://www.bridgelabz.com">BridgeLabz</a> to learn more about our mission <strong>Employability to all</strong></p>
      </>
    );
  }
  
}

export default App;
