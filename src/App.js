import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Plate from './components/Plate.js';
import PlateMenu from './components/PlateMenu.js';

import TreatmentTable from './components/TreatmentTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SetMenu from './components/SetMenu.js';
import SetCard from './components/SetCard';
import {plates, gcprSets, treatments} from './data.js'
import topBar from './img/topBar.svg';
import sideBar from './img/sideBar.svg';
import navBar from './img/navBar.svg';
import pageInfo from './img/pageInfo.svg';
import plateBar from './img/plateBar.svg';



function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <img src={topBar}></img>
        </Row>
        <Row>
          <Col xs={1} className="p-0">
            <img fluid src={sideBar}></img>
          </Col>
          <Col xs={11} className="p-0">
            <img src={navBar}></img>
            <img src={pageInfo}></img>
           
            <Container fluid>
              <Row>
                <Col>
                <img src={plateBar}></img>
                </Col>
                <Col>
                  <PlateMenu></PlateMenu>
                </Col>
              </Row>
            </Container>
            <SetMenu plateSets={plates[0].sets} allSets={gcprSets}></SetMenu>
            <SetCard></SetCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
