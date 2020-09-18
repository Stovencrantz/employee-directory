import React from 'react';
import logo from './logo.svg';
import './App.css';
import SomeText from "./Components/SomeText"
import GetUsers from "./Components/GetUsers"
import Container from "./Components/Container.js/index"

function App() {
  return (
    <div>
        <Container />
        <SomeText />
        <GetUsers />
    </div>
  )
}

export default App;
