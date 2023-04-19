import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Plate from './components/Plate.js';
import TreatmentTable from './components/TreatmentTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SetMenu from './components/SetMenu.js';
import SetCard from './components/SetCard';
import {plates, gcprSets, treatments} from './data.js'


function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <SetMenu sets={plates[0].sets}></SetMenu>
          </Col>
          <Col>
            <SetCard></SetCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
