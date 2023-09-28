import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    decrement(){
        this.setState({
            count : this.state.count - 1
        }); 
    }
    increment(){
        this.setState({
            count : this.state.count + 1
        }); 
    }

    render() {
        return (
            <>
                <div>Counter</div>
                <button onClick={()=>{ this.decrement() } }> -- </button> <p> {this.state.count} </p> <button onClick={()=>{ this.increment() }}>++</button>
            </>
        )
    }
}
