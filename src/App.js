import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Plate from './components/Plate.js';
import PlateMenu from './components/PlateMenu.js';
import styled from 'styled-components';
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
import {Text20SB} from './components/TextStyles';


const GrayDiv = styled.div`
  background: #F4F4F5;
`

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
                <Col className="p-0">
                <img src={plateBar}></img>
                </Col>
                <Col className="p-0">
                  <PlateMenu></PlateMenu>
                </Col>
              </Row>

                <Row>
                  <Text20SB>Plate_01</Text20SB>
                  <Col className="p-0">
                    <SetMenu plateSets={plates[0].sets} allSets={gcprSets}></SetMenu>
                  </Col>
                  <Col className="p-0"><Plate></Plate></Col>
                  <Col className="p-0"  ><SetCard></SetCard></Col>
                </Row>
              
            </Container>
            
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
