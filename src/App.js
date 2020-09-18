import React from 'react';
import logo from './logo.svg';
import './App.css';
import GetUsers from "./Components/GetUsers"
import Container from "./Components/Container.js/index"
import Jumbotron from "./Components/Jumbotron/index"
import Form from "./Components/Form/index"
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div>
      <Jumbotron />
      <Container>
        <Form />
        <GetUsers />
      </Container>
    </div>
  )
}

export default App;
