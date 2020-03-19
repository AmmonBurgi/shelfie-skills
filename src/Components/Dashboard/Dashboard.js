import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state={
            inventory: [],
        }
    }
    deleteProduct = (id) =>{
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            this.setState({
                inventory: res.data
            })
            this.componentDidMount()
        })       
    }
    componentDidMount = () =>{
        axios.get('/api/inventory')
        .then(res => this.setState({
          inventory: res.data
        })).catch(err => console.log(err))
      }
        render(){
        let proMap = this.state.inventory.map((element, index) =>{
            return <Product
            inventory={element}
            key={index}
            deleteProduct={this.deleteProduct}
            />
        })
        return(
            <div>
                {proMap}
            </div>
        )
    }
}
export default Dashboard