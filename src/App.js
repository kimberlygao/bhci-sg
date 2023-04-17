import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Plate from './components/Plate.js';
import TreatmentTable from './components/TreatmentTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const plate = {
  id: 1,
  type : {
    num: 2,
    rows: 8, 
    cols: 12
  },
  sets: [
    {id: 1, rowStart: 1, rowEnd: 1, colStart: 1, colEnd: 12},
    {id: 2, rowStart: 2, rowEnd: 2, colStart: 1, colEnd: 12}
  ],
  status: 0
}

const gcprSets = {
  1: {
    id: 1,
    name: 'Set_01',
    gcprs: ["ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "HTR1A", "HTR1B", "HTR1D"]
  },
  2: {
    id: 2,
    name: 'Set_02',
    gcprs: ["ADRA1A", "ADRA1B", "ADRA1D", "ADRA2A", "ADRA2B", "ADRA2C", "ADRB1", "ADRB2", "ADRB3", "HTR1A", "HTR1B", "HTR1D"]
  },
}

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <p>Projects / Medicine / Experiment_004</p>
          <p>EXPERIMENT_004</p>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <TreatmentTable></TreatmentTable>
          </Col>
          <Col>
            <Plate></Plate>
          </Col>
        </Row>
      </Container>
      
      
    </div>
  );
}

export default App;
