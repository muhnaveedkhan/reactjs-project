import React, { Component } from 'react'
import Counter from './Counter';

export default class StudentClsConstructor extends Component {

    constructor() {
        super();
        console.log('constructor called.', this);
        this.state = {
            name: "ali"
        }
    }

    nameChangeHandler(newName) {
        console.log(newName);
        this.setState({
            name: newName
        });
    }

    render() {
        return (
            <>
                <h1>StudentClsConstructor</h1>
                <h3>State</h3>
                <p> {this.state.name} </p>

                <button onClick={() => { this.nameChangeHandler('Wasim Akram') }}>Change Name</button>


                <hr /><hr />
                <h1>Counter Component</h1>
                <Counter />
            </>
        )
    }
}
