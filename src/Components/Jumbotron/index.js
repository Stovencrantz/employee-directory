import React, { Component } from 'react'
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import "./style.css"


export function Jumbotron(props) {

    return (
        <div className="jumbotron jumbotron-fluid bg-info">
            <div className="container text-center">
                <h1 className = "display-4">Employee Directory</h1>
                <p>Please user our searchbar below to find and sort any particular empoyees you may be looking for.</p>
            </div>
        </div>
    )
    
}

export default Jumbotron
