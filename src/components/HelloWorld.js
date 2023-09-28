import React from 'react'

const carObject = { name: "Corolla xli", model: "2020", color: "black", price:36000000 };

function HelloWorld() {
    return (
        <>
        <div>Hello World</div>
        <p>Car Name : {carObject.name}</p>
        <p>Car Price : {carObject.price}</p>
        </>
    )
}

export default HelloWorld