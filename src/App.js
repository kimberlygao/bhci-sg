import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    </div>
  );
}

export default App;
