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
                <img src={this.props.inventory.img} alt='product'/>
                <div>{this.props.inventory.name}</div>
                <div>{this.props.inventory.price}</div>
            </div>
        )
    }
}
export default Product