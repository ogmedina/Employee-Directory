import React from "react";
import Hero from "./components/Hero";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './App.css';
import SearchResultContainer from "../src/components/SearchResultContainer/SearchResultContainer";

function App() {
  return (
    <div>
      <Hero>
        <h1>Employee Directory</h1>        
      </Hero>
      <Container>   
      <Row>
      <Col sm><SearchResultContainer /></Col>       
      </Row>
      </Container>     
    </div>
  );
}

export default App;