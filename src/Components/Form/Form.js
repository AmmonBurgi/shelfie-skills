import React, {Component} from 'react'

class Form extends Component{
    constructor(){
        super()
        this.state={
            name: '',
            price: 0,
            image: ''
        }
    }
    handleName=(val)=>{
        this.setState({
            name: val
        })
    }
    handlePrice=(val)=>{
        this.setState({
            price: val
        })
    }
    handleImg=(val) =>{
        this.setState({
            image: val
        })
    }
    handleClick=()=>{
        this.setState({
            name: '',
            price: 0,
            image: ''
        })
    }
    render(){
        console.log(this.state)
        let {name, price, image} = this.state
        return(
            <div>
                <div>This is the Form</div>
                <p>Image URL:</p>
                <input placeholder='Image' onChange={e => this.handleImg(e.target.value)}></input>
                <p>Product Name</p>
                <input placeholder='Name' onChange={e => this.handleName(e.target.value)}></input>
                <p>Price: </p>
                <input placeholder='price' onChange={e => this.handlePrice(e.target.value)}></input>
                <button onClick={this.handleClick}>Cancel</button>
                <button onClick={() => this.props.createProduct({name, price, image})}>Add</button>
            </div>
        )
    }
}
export default Form