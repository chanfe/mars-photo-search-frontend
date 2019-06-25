import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class PictureCard extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }

  render(){
    return (
      <Container>
          <p>{this.props.ele.camera['name']}</p>
          <img src={this.props.ele['img_src']} alt="img" />
      </Container>
    )
  }
}

export default PictureCard