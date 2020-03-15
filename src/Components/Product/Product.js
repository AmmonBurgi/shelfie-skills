import React, { Component } from 'react'
import './product.css'
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
                <div align-div>
                    <span className='product-name'>{this.props.inventory.name}</span>
                    <span className='product-price'>${this.props.inventory.price}</span>
                    <div align-product-buttons>
                        <button className='delete-button' onClick={() => this.props.deleteProduct(this.props.inventory.id)}>Delete</button>
                        <button className='edit-button' onClick={() => this.props.handleEditButton(this.props.inventory)}>Edit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product