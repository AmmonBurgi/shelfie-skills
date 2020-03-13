import React, { Component } from 'react'
import Product from '../Product/Product'

class Dashboard extends Component{
    constructor(){
        super()
        this.state={

        }
    }
    render(){
        let invMap = this.props.inventory.map((element, index) =>{
            return <Product 
                    inventory={element}
                    key={index}

            />
        })
        return(
            <div>
                <div>This is the Dashboard</div>
                {invMap}
            </div>
        )
    }
}
export default Dashboard