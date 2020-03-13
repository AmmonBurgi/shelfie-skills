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
                <img src={this.props.inventory.image} alt='product'/>
                <div className='align'>
                    <div>{this.props.inventory.name}</div>
                    <div>{this.props.inventory.price}</div>
                    <div className='the-buttons'>
                        <button className='pro-buttons'>Edit</button>
                        <button className='pro-buttons' onClick={() => this.props.deleteProduct(this.props.inventory.id)}>Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Product