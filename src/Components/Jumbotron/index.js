import React, { Component } from 'react'

export function Jumbotron(props) {

    return (
        <div className="jumbotron jumbotron-fluid">
            <div className="container text-center">
                <h1 className = "display-4">Employee Directory</h1>
                <p>Please user our searchbar below to find and sort any particular users you may be looking for.</p>
            </div>
        </div>
    )
    
}

export default Jumbotron
