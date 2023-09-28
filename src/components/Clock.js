import React, { Component } from 'react'

export default class Clock extends Component {
    constructor() {
        super();
        console.log('constructor => ', this);
        this.state = { date: new Date() };
    }

    // componentDidMount() {
    //     console.log('componentDidMount called.');
    //     this.timerID = setInterval(
    //         () => this.tick(),
    //         1000
    //     );
    // }

    // componentWillUnmount() {
    //     console.log('componentWillUnmount called.');
    //     clearInterval(this.timerID);
    // }

    // tick() {
    //     this.setState({
    //         date: new Date()
    //     });
    // }


    render() {
        return (
            <>
                <h1>Clock Class Component</h1>
                <p> {this.state.date.toLocaleDateString()} </p>
            </>
        )
    }
}
