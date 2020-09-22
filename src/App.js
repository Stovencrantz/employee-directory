import React from 'react';
import './App.css';
import TopSearch from "./Components/TopSearch/"
import Container from "./Components/Container"
import Jumbotron from "./Components/Jumbotron"

function App() {
  return (
    <div>
      <Jumbotron />
      <Container>
        <TopSearch />
      </Container>
    </div>
  )
}

export default App;
