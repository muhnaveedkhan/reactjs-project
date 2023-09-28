import React from 'react';
import PropTypes from 'prop-types';

function Student({name, age, program}) {
    // console.log('props => ', props);
    return (
        <>
            <h1>Student information</h1>
            <p>Name : {name}</p>
            <p>Degree : {program}</p>
            <p>Age : {age} </p>

        </>
    )
}

export default Student


Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    program: PropTypes.string
  }
  