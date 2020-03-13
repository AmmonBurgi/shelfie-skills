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
  componentDidMount=()=>{
    axios.get('/api/inventory')
    .then(res =>{
      console.log(res.data)
      this.setState({
        inventory: res.data
      })
    }).catch(err =>{
      console.log(err)
    })
  }
  createProduct=({name, price, image})=>{
    axios.post('/api/inventory', {name, price, image})
    .then(res =>{
      this.setState({
       inventory: res.data
      })
    })
  }
  deleteProduct=()=>{
    axios.delete(`/api/inventory/${id}`)
  }
  render(){
  return (
    <div className="App">
      <Header />
      <div className='align'>
      <Dashboard inventory={this.state.inventory} />
      <Form createProduct={this.createProduct} />
      </div>
    </div>
  );
}
}
export default App;
