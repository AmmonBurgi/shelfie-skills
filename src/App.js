import React, { Component } from 'react';
import Header from './Components/Header/Header'
import Dashboard from './Components/Dashboard/Dashboard'
import Form from './Components/Form/Form'
import {HashRouter, Route, Switch} from 'react-router-dom'
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state={
    }
  }
  render(){
    // console.log('inventory:', this.state.inventory)
    // console.log('selected product:', this.state.selectedPro)
    return(
      <HashRouter>
        <div className='App'>
          <Header />
            <Switch>
            <Route exact path='/' component={Dashboard}/>
            <Route path='/add' component={Form} />
            <Route path='/edit/:id' component={Form} />
            </Switch>
        </div>
      </HashRouter>
    )
  }
}
export default App
