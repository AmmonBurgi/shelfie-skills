import React, { Component } from 'react'

class Product extends Component{
    constructor(){
        super()
        this.state={

        }
    }
  
    render(){
        return(
            <div className='product'>
                <img className='product-image' src={this.props.inventory.image} alt='product'/> 
                <span>{this.props.inventory.name}</span>
                <span>{this.props.inventory.price}</span>
                <button onClick={() => this.props.deleteProduct(this.props.inventory.id)}>Delete</button>
                <button>Edit</button>
            </div>
        )
    }
}
export default Product