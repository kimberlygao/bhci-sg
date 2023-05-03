import logo from './logo.svg';
import './App.css';
import React, { Component }  from 'react';
import Plate from './components-1/Plate.js';
import PlateMenu from './components-1/PlateMenu.js';
import styled from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import SetMenu from './components-1/SetMenu.js';
import LeftControl from './components-1/LeftControl';
import SetCard from './components-1/SetCard';
import {plates} from './data.js'
import topNav from './img/static/topNav.svg';
import sideBar from './img/static/sideBar.svg';
import pathBar from './img/static/pathBar.svg';
import experimentInfo from './img/static/experimentInfo.svg';
import {Row, Col} from './components-styled/DivStyles';
import {Img} from './components-styled/ImgStyles';
import PlateArea from './components/PlateArea';




function App() {
  return (
    <div className="App">
      <Row>
        <Img src={topNav}></Img>
      </Row>
      <Row>
        <Col><Img src={sideBar}></Img></Col>
        <Col>
          <Row><Img src={pathBar}></Img></Row>
          <Row><Img src={experimentInfo}></Img></Row>
          <PlateArea plates={plates}></PlateArea>
        </Col>
      </Row>
     

      {/* <Container fluid>
        <Row>
          <img className='p-0' src={topBar}></img>
        </Row>
        <Row>
          <Col xs={1} className="p-0">
            <img className='p-0' src={sideBar}></img>
          </Col>
          <Col xs={11} className="p-0 float-start">
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
                    <LeftControl plateSets={plates[0].sets} allSets={gcprSets}></LeftControl>
                  </Col>
                  <Col className="p-0"><Plate></Plate></Col>
                  <Col><WellAnalysisCard></WellAnalysisCard></Col>
                  <Col className="p-0"  ><SetCard></SetCard></Col>
                </Row>
            </Container>
            
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}

export default App;
