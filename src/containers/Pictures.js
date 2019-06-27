import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'
import PictureCard from '../components/PictureCard'

class Pictures extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }

  render(){

    return (
      <Container textAlign='left'>
        {this.props.state.data.map(e => 
            <PictureCard ele={e} key={e['id']}/>
            )}
      </Container>
    )
  }
}

export default Pictures