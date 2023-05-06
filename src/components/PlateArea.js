/*
  PlateActionArea.js
  Component for entire image analysis area

  useState for selected well
  Child components Plate02 and WellAnalysisCard

*/


import React, { useState } from "react";
import plateBar from '../img/static/plateBar.svg';
import {SelectList} from '../components-styled/SelectStyles';
import PlateItem from './PlateItem';
import {Row, RowTopBorder} from '../components-styled/DivStyles';
import {Img} from '../components-styled/ImgStyles';
import { Text20SB } from "../components-styled/TextStyles";
import plate00 from '../img/static/plate00.svg';
import PlateAnalysis from './PlateAnalysis';


function PlateActionArea(props) {
  if (props.plate == null) {
    return (
      <div style={{height: "100em"}}></div>
    )
  } else if (props.plate.status === "00") {
    return (
    <RowTopBorder>
      <Row style={{margin: "32px 0px 0px 20px"}}>
      <Text20SB>{props.plate.name}</Text20SB>
    </Row>
    <Row>
      <Img src={plate00}></Img>
    </Row>
      </RowTopBorder>)
  } else if (props.plate.status === "02") {
    return (
    <RowTopBorder>
      <Row style={{margin: "32px 0px 0px 20px"}}>
        <Text20SB>{props.plate.name}</Text20SB>
      </Row>
      <PlateAnalysis style={{marginLeft: "32px"}}plate={props.plate}></PlateAnalysis>
    </RowTopBorder>)
  }
}

export default function PlateArea(props) {

  const [selectedPlate, setSelectedPlate] = useState(null);

  const onOptionChange = e => {
    const found = props.plates.find(f => f.id === e.target.value);
    setSelectedPlate(found)
  }


  return (<div style={{backgroundColor: "#F4F4F5"}}>
    <RowTopBorder style={{paddingTop: "32px"}}><Img src={plateBar}></Img></RowTopBorder>
    <Row>
      <SelectList style={{marginBottom: "32px"}}>
        {props.plates.map((item, index) =>
          <PlateItem plate={item} key={item.id} fun={onOptionChange} selectedOption={selectedPlate}></PlateItem>
        )}
      </SelectList>
    </Row>
    <Row></Row>
    <PlateActionArea plate={selectedPlate}></PlateActionArea>
  </div>
  )
}