// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    handleClick = (event) => {
        this.props.onReceiveCoordinates([event.pageX, event.pageY])
    }

    render() {
        return (
          <button onClick={this.handleClick}>Click me!</button>
        )
      }

}