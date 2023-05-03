import React, { useState } from "react";

import { Icon24 } from '../components-styled/TextStyles';
import { Toggle, Input, Label, Name } from '../components-styled/SelectStyles';
import microscope from '../img/icons/microscope.svg'
import heatmap from '../img/icons/heatmap.svg'
import Plate02 from './Plate02';
import {gcprSets, treatments, plateTypes} from '../data.js'
import WellAnalysisCard from "./WellAnalysis";
import { Row, Col } from "../components-styled/DivStyles";


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
        <Col>
          <Plate02 plate={props.plate} fun={onOptionChange} selectedOption={selectedWell}></Plate02>
        </Col>
        <Col>
          <WellAnalysisCard well={selectedWell} plate={props.plate.name}></WellAnalysisCard>
        </Col>
      </Row>
     
      
    </div>
  )
}