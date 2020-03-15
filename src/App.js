import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import axios from 'axios'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
      inventory: []
    }
  }
componentDidMount = () =>{
  axios.get('/api/inventory')
  .then(res => this.setState({
    inventory: res.data
  })).catch(err => console.log(err))
}

  render(){
    console.log(this.state.inventory)
    return(
      <div>
        <Header />
        <Dashboard 
        inventory={this.state.inventory}
        didMount={this.componentDidMount}
        />
        <Form 
        didMount={this.componentDidMount}
        inventory={this.state.inventory}
        />
      </div>
    )
  }
}
export default App
