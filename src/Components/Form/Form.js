import React, { Component } from 'react'
import axios from 'axios'
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
        console.log('current props:', this.props.data)
    let body = {image: this.state.image, name: this.state.name, price: this.state.price}
        return(
            <div className='Form'> 
                <input onChange={e => this.handleImage(e.target.value)} value={this.state.image}></input>
                <input onChange={e => this.handleName(e.target.value)} value={this.state.name}></input>
                <input onChange={e => this.handlePrice(e.target.value)} value={this.state.price}></input>
                <button onClick={this.handleCancel}>Clear</button>
                {this.state.id === null ? (
                <button onClick={() => this.addProduct(this.state.image, this.state.name, this.state.price)}>Add</button>
                ):(
                <button onClick={() => this.editProduct(this.state.id, body)}>Make Changes</button>
                )}
            </div> 
        )
    }
}
export default Form