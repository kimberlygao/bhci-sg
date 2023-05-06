/*
  PlateAnalysis.js
  Component for entire image analysis area

  useState for selected well
  Parent component is PlateArea.js/PlateActionArea
  Child components Plate02 and WellAnalysisCard

*/

import React, { useState } from "react";
import analysisLeftMenu from '../img/static/analysisLeftMenu.svg'
import percentageToggle from '../img/static/percentageToggle.svg'
import Plate02 from './Plate02';
import WellAnalysisCard from "./WellAnalysis";
import { Row, Col } from "../components-styled/DivStyles";
import { Img } from "../components-styled/ImgStyles";


// returns entire plate analysis area
// props: plate - selected plate (should be status002)
export default function PlateAnalysis(props) {

  const [selectedWell, setSelectedWell] = useState(null)

  const onOptionChange = e => {
    if (e.target.value in props.plate.wells) {
      setSelectedWell(props.plate.wells[e.target.value])
    } else {
      setSelectedWell(null)
    }
    
  }

  return (
    <div style={{marginLeft: "20px"}}>
      <Row>
        <Col style={{marginRight: "38px"}}>
          <Img style={{marginTop: "12px"}} src={analysisLeftMenu}></Img>
        </Col>
        <Col>
          <Row style={{justifyContent: "end", padding: "12px"}}>
            <div style={{float: "right"}}>
              <Img src={percentageToggle}></Img>
            </div>
          </Row>
          <Plate02 plate={props.plate} fun={onOptionChange} selectedOption={selectedWell}></Plate02>
        </Col>
        <Col>
          <WellAnalysisCard well={selectedWell} plate={props.plate.name}></WellAnalysisCard>
        </Col>
      </Row>
     
      
    </div>
  )
}