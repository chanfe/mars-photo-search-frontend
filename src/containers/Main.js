import React, { Component } from 'react';
import { Button, Header, Image, Icon, Form, Checkbox, Grid, Segment, Container } from 'semantic-ui-react'

import Pictures from './Pictures'
import Search from './Search'
import Title from '../components/Title'

const URL = 'http://localhost:3000/';


class Main extends Component {
    constructor(props){
        super(props)
        this.state = {
        }
      }

    onSubmit = (e) => {
        fetch(`${URL}photos/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                // "Content-Type": "application/x-www-form-urlencoded",
                },
            body: JSON.stringify({
                'sol':1000,
                'camera':'all',
            }),
        }).then(res => res.json()).then(console.log)
    }

  render(){
    return (
      <Container textAlign='left'>
        <Title />
        <Search onSubmit={this.onSubmit}/>
        <Pictures />
      </Container>
    )
  }
}

export default Main