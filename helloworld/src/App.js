import React, {Component} from 'react'
import logo from './assets/Bridgelabz.jpg' 
import './App.css';

class App extends Component{
  url = 'https://www.bridgelabz.com';
  constructor() {
    super()
    this.state = {
      //UC1 and UC2
      title: 'Hello from Bridgelabz'
    }
  }
  //UC4
  onClick = () => {
    console.log('save button is clicked!');
    window.open(this.url, '_blank');
  }

  render(){
    return (
      <div>
        <header className="App-header">
          <h1>
            {this.state.title}
          </h1>
          {/* UC3 */}
          <img src={logo} onClick={this.onClick} alt='Brigelabz logo'></img>
        </header>
      </div>
    );
  }
  
}

export default App;
