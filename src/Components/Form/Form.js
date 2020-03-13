import React, {Component} from 'react'
import axios from 'axios'
import './form.css'

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
    editProduct=(id, body)=>{
        axios.put(`/api/inventory/${id}`, {body})
        .then(res => {
          this.setState({
            inventory: res.data
          })
        })
      }
    render(){
        console.log(this.state)
        let {name, price, image} = this.state
        return(
            <div className='form'>
               <img src='https://cdn.shortpixel.ai/client/q_lossless,ret_img,w_370,h_190/https://www.eventifyuk.com/wp-content/themes/consultix/images/no-image-found-360x250.png' alt='noimage' className='the-image' />
                <p>Image URL:</p>
                <input placeholder='Image' value={this.state.image} onChange={e => this.handleImg(e.target.value)}></input>
                <p>Product Name</p>
                <input placeholder='Name' value={this.state.name} onChange={e => this.handleName(e.target.value)}></input>
                <p>Price: </p>
                <input placeholder='price' value={this.state.price} onChange={e => this.handlePrice(e.target.value)}></input>
                <div className='buttons'>
                <button className='form-button' onClick={this.handleClick}>Cancel</button>
                <button className='form-button' onClick={() => this.props.createProduct({name, price, image})}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}
export default Form