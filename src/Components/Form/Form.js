import React, { Component } from 'react'
import axios from 'axios'
class Form extends Component{
    constructor(){
        super()
        this.state={
            image: '',
            name: '',
            price: 0
        }
    }
    handleImage = (val) =>{
        this.setState({
            image: val
        })
    }
    handleName = (val) =>{
        this.setState({
            name: val
        })
    }
    handlePrice = (val) =>{
        this.setState({
            price: val
        })
    }
    handleCancel = () =>{
        this.setState({
            image: '',
            name: '',
            price: 0
        })
    }
    addProduct = (image, name, price) =>{
        axios.post('/api/inventory', {image, name, price})
        .then(res => {
            this.setState({
                inventory: res.data
            })
            this.props.didMount()
            this.handleCancel()
        }).catch(err => console.log(err))
    }
    render(){
        return(
            <div className='Form'> 
                <input onChange={e => this.handleImage(e.target.value)} value={this.state.image}></input>
                <input onChange={e => this.handleName(e.target.value)} value={this.state.name}></input>
                <input onChange={e => this.handlePrice(e.target.value)} value={this.state.price}></input>
                <button onClick={this.handleCancel}>Clear</button>
                <button onClick={() => this.addProduct(this.state.image, this.state.name, this.state.price)}>Add</button>
            </div> 
        )
    }
}
export default Form