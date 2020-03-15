import React, { Component } from 'react'
import axios from 'axios'
import './form.css'
class Form extends Component{
    constructor(){
        super()
        this.state={
            image: '',
            name: '',
            price: 0,
            id: null
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
            price: 0,
            id: null
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
    componentDidUpdate(prevProps, prevState){
        if(prevProps.selectedPro !== this.props.selectedPro){
            this.setState({
                image: this.props.selectedPro.image,
                name: this.props.selectedPro.name,
                price: this.props.selectedPro.price,
                id: this.props.selectedPro.id
            })
        }
    }
    editProduct(id, body){
        console.log('body', body)
        axios.put(`api/inventory/${id}`, {body})
        .then(res => {
            this.setState({
                inventory: res.data
            })
            this.props.didMount()
            this.handleCancel()
        }).catch(err => console.log(err))
    }
    render(){
        // console.log('current props:', this.props.data)
    let body = {image: this.state.image, name: this.state.name, price: this.state.price}
        return(
            <div className='form'> 
                {this.state.id === null ? (<img className='selected-image' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR8Kj8frzJy7P5aRXamcc4zI-c-6C6htrededhz22uZhgAPMnlK' alt='empty'/>):(
                    <img className='selected-image' src={this.state.image} alt='product'/>
                )}
                <div className='input-align'>
                    <p className='p-tags'>Image URL:</p>
                    <input className='image-input' placeholder='Image' onChange={e => this.handleImage(e.target.value)} value={this.state.image}></input>
                    <p className='p-tags'>Product Name:</p>
                    <input className='name-input' placeholder='Name' onChange={e => this.handleName(e.target.value)} value={this.state.name}></input>
                    <p className='p-tags'>Price:</p>
                    <input className='price-input' placeholder='Price' onChange={e => this.handlePrice(e.target.value)} value={this.state.price}></input>
                </div>   
                <div className='align-buttons'>
                    <button className='clear' onClick={this.handleCancel}>Clear</button>
                    {this.state.id === null ? (
                    <button className='add' onClick={() => this.addProduct(this.state.image, this.state.name, this.state.price)}>Add To Inventory</button>
                    ):(
                    <button className='confirm-changes' onClick={() => this.editProduct(this.state.id, body)}>Make Changes</button>
                    )}
                </div>
            </div> 
        )
    }
}
export default Form