// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
    constructor(props) {
        super(props);
        
    }

    handleClick = (event) => {
        event.persist()
        setTimeout(this.props.onDelayedClick, this.props.delay, event)
    }

    render() {
        return (
          <button onClick={this.handleClick}>Wait for me...</button>
        )
      }

}