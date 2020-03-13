import React, { Component } from 'react'
import Product from '../Product/Product'
import axios from 'axios'

class Dashboard extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    componentDidMount(){
        this.props.mount()
    }
    render(){
        let invMap = this.props.inventory.map((element, index) =>{
            return <Product 
                    inventory={element}
                    key={index}
                    deleteProduct={this.props.deleteProduct}
                    mount={this.props.mount}
            />
        })
        return(
            <div className='dash'>
                {invMap}
            </div>
        )
    }
}
export default Dashboard