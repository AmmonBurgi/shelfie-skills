import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    deleteProduct = (id) =>{
        axios.delete(`/api/inventory/${id}`)
        .then(res => {
            this.setState({
                inventory: res.data
            })
            this.props.didMount()
        })
    }
        render(){
        let proMap = this.props.inventory.map((element, index) =>{
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