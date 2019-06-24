import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class Title extends Component {

  render(){
    return (
      <Container textAlign='left'>
        <h1>Mars Photo API</h1>
      </Container>
    )
  }
}

export default Title