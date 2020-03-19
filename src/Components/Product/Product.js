import React, { Component } from 'react'
import './product.css'
import {Link} from 'react-router-dom'
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
                        <Link to={`/edit/${this.props.inventory.id}`}>
                            <button className='edit-button' onClick>Edit</button>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product