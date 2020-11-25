import React from 'react'

export default class DigitalClicker extends React.Component {
    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    onClickIncrement = () => {
        this.setState(previousState => {
            return {
                timesClicked: previousState.timesClicked + 1
            }
        }, console.log(this.state.timesClicked))
    }

    render() {
        return (
            <button
            onClick={this.onClickIncrement}
            >{this.state.timesClicked}</button>
        )
    }
}