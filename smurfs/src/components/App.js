import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(){
    super();
    this.state = {
      data:[]
    }
  }

  componentDidMount(){
    fetch('http://localhost:3333/smurfs')
    .then(res => res.json())
    .then(smurf => this.setState({ data: smurf}))
    .catch(err => console.log('hey', err))
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
      </div>
    );
  }
}

export default App;
