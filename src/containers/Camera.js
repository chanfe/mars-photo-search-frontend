import React, { Component } from 'react';
import { Container } from 'semantic-ui-react'

class Camera extends Component {

  render(){
    return (
      <Container textAlign='left'>
        <h3>Curiosity's Cameras</h3>
        <div>
            <p class='small-3 columns'>Abbreviation</p>
            <p class='small-9 columns'>Full Name</p>
        </div>
        <br />>
        <div>
            <p class='small-3 columns'>FHAZ</p>
            <p class='small-9 columns'>Front Hazard Avoidance Camera</p>
        </div><br />>
        <div>
            <p class='small-3 columns'>NAVCAM</p>
            <p class='small-9 columns'>Navigation Camera</p>
        </div><br />>
        <div>
            <p class='small-3 columns'>MAST</p>
            <p class='small-9 columns'>Mast Camera</p>
        </div><br />>
        <div>
            <p class='small-3 columns'>CHEMCAM</p>
            <p class='small-9 columns'>Chemistry and Camera Complex</p>
        </div><br />>
        <div>
            <p class='small-3 columns'>MAHLI</p>
            <p class='small-9 columns'>Mars Hand Lens Imager</p>
        </div><br />>
        <div>
            <p class='small-3 columns'>MARDI</p>
            <p class='small-9 columns'>Mars Descent Imager</p>
        </div><br />>
        <div>
            <p class='small-3 columns'>RHAZ</p>
            <p class='small-9 columns'>Rear Hazard Avoidance Camera</p>
        </div><br />>

      </Container>
    )
  }
}

export default Camera