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
      inventory: [],
      selectedPro: []
    }
  }
componentDidMount = () =>{
  axios.get('/api/inventory')
  .then(res => this.setState({
    inventory: res.data
  })).catch(err => console.log(err))
}
handleEditButton=(product)=>{
  this.setState({
    selectedPro: product
  })
}
  render(){
    console.log('inventory:', this.state.inventory)
    console.log('selected product:', this.state.selectedPro)
    return(
      <div className='App'>
        <Header />
        <div className='align-components'>
          <Dashboard 
          inventory={this.state.inventory}
          didMount={this.componentDidMount}
          handleEditButton={this.handleEditButton}
          />
          <Form 
          didMount={this.componentDidMount}
          inventory={this.state.inventory}
          selectedPro={this.state.selectedPro}
          />
        </div>
      </div>
    )
  }
}
export default App
