import React, { Component } from 'react';
import { Container, Form, Button } from 'semantic-ui-react'

class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
          sol:"",
          camera:""
        }
      }
    
      handlesol = (event) =>{
        this.setState({
          sol: event.target.value
        })
      }
    
      handlecamera = (event) =>{
        this.setState({
          camera: event.target.value
        })
      }

      handleSubmit = (event) => {
        event.preventDefault();
        const search = {
          sol:this.state.sol,
          camera:this.state.camera
        }
        let error = this.props.onSubmit(search)
        console.log(error)    
      }

  render(){
    return (
      <Container textAlign='left'>
        <h2>Curiosity</h2>
        <Form onSubmit={this.handleSubmit}>
            <Form.Field value={this.state.sol} onChange={this.handlesol}>
              <label>sol</label>
              <input placeholder='sol' />
            </Form.Field>
            <Form.Field  value={this.state.camera} onChange={this.handlecamera}>
              <label>camera</label>
              <input placeholder='camera'/>
            </Form.Field>
            <Button type='submit' >Find Photo</Button>
          </Form>
    
      </Container>
    )
  }
}

export default Search