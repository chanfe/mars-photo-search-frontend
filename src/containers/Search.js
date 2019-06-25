import React, { Component } from 'react';
import { Container, Form, Button, Select } from 'semantic-ui-react'

const cameraOptions = [
    { key: 'all', text: 'all', value: 'all' },
    { key: 'FHAZ', text: 'FHAZ', value: 'FHAZ' },
    { key: 'NAVCAM', text: 'NAVCAM', value: 'NAVCAM' },
    { key: 'MAST', text: 'MAST', value: 'MAST' },
    { key: 'CHEMCAM', text: 'CHEMCAM', value: 'CHEMCAM' },
    { key: 'MAHLI', text: 'MAHLI', value: 'MAHLI' },
    { key: 'MARDI', text: 'MARDI', value: 'MARDI' },
    { key: 'RHAZ', text: 'RHAZ', value: 'RHAZ' },
  ]
  

class Search extends Component {
    constructor(props){
        super(props)
        this.state ={
          sol:"",
          camera:"all"
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
            <label>sol</label>
            <Form.Field value={this.state.sol} onChange={this.handlesol}>
              <input placeholder='sol' />
            </Form.Field>
            <label>camera</label>
            <select id="camera" value={this.state.camera} onChange={this.handlecamera}>
                  <option value="all">all</option>
                  <option value="FHAZ">FHAZ</option>
                  <option value="NAVCAM">NAVCAM</option>
                  <option value="MAST">MAST</option>
                  <option value="CHEMCAM">CHEMCAM</option>
                  <option value="MAHLI">MAHLI</option>
                  <option value="MARDI">MARDI</option>
                  <option value="RHAZ">RHAZ</option>
               </select>
            <br />
            <Button type='submit' >Find Photos</Button>
          </Form>
    
      </Container>
    )
  }
}

export default Search