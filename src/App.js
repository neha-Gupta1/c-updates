import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import Greet from './components/Greet'
// import Welcome from './components/Welcome'
// import Message from './components/Message'
import Cases from './components/Cases'


class App extends Component {

  // create state
  constructor (){
    super()
    this.state = {
        stateCases : []
    }
}

  // call the api
  componentDidMount() {
    fetch("https://coronavirus-tracker-india-covid-19.p.rapidapi.com/api/getStatewise", {
	    "method": "GET",
	    "headers": {
		  "x-rapidapi-host": "coronavirus-tracker-india-covid-19.p.rapidapi.com",
		  "x-rapidapi-key": "c00a03fa2dmsh6bd2d46a085b6bap1cbcaejsn2db4322306d3"
	}
  })
    .then(response => response.json())
    .then((data) => {
      this.setState({stateCases: data})
    })
    .catch(err => {
	    console.log(err);
    });
  }


  render() {
    return (
   <Cases stateCases={this.state.stateCases}/>
    );
  }
}

export default App;
