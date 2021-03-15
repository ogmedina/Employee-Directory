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

// import logo from './logo.svg';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
