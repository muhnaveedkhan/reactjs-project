import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class StudentB extends Component {

    render() {

        const { name, age, program } = this.props;

        return (
            <>
                <div>StudentB - Class Component </div>
                <p>Name : {name}</p>
                <p>Age : {age}</p>
                <p>Degree : {program}</p>
            </>
        )
    }
}

StudentB.propTypes = {
    name : PropTypes.string,
    age: PropTypes.number,
    program: PropTypes.string
  }
  
