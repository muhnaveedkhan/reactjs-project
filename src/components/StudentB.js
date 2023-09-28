import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class StudentB extends Component {
    
    render() {

        const { name, age, program, data } = this.props;
        const {carName, carModel, carColor, carPrice} = data;

        console.log(data);

        return (
            <>

                <h1>StudentB - Class Component </h1>
                <p>Name : {name}</p>
                <p>Age : {age}</p>
                <p>Degree : {program}</p> <hr />
                <h3>this.props.children</h3>
                {this.props.children}

                <hr />
                <h3>Data Received From Other Component</h3>
                <p> 
                    <h2>Car Information</h2>
                    <p>Name : {carName}</p>
                    <p>Model : {carModel}</p>
                    <p>Color : {carColor}</p>
                    <p>Price: {carPrice} </p>
                </p>
            

            </>
        )
    }
}

StudentB.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    program: PropTypes.string
}

