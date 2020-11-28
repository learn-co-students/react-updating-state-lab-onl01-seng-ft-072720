// Code DigitalClicker Component Here
import React from 'react';

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    incrementCounter = () => {
        this.setState(previousState => {
            return {
              timesClicked: previousState.timesClicked + 1
            }
          })
    }


    render() {
        return(
            <button onClick={this.incrementCounter}>{this.state.timesClicked}</button>
        )
    }
}