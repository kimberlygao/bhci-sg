
import React from "react";
import { GCPRSpotLabel, GCPRSpotInput, GCPRSpotDiv, SpotTable } from '../components-styled/WellSpotStyles';
import { Img } from "../components-styled/ImgStyles";
import cell from '../img/icons/cell.png'
import { White14, Trans12 } from "../components-styled/TextStyles";
import { getColor } from './Plate02'
import {gcprs, gcprSets} from '../data.js'




function Spot(type, i, color, set, heat) {
  if (type === "images") {
    return <GCPRSpotLabel htmlFor={i} color={color}><Img src={cell} ></Img></GCPRSpotLabel>
  } else {
    return <GCPRSpotLabel style={{flexDirection: "column"}} htmlFor={i} color={color}>
      <White14>{gcprSets[set].gcprs[i]}</White14>
      <Trans12>{heat}%</Trans12>
    </GCPRSpotLabel>
  }
}

export default function SpotGrid(props) {
  const grid = []
  for(let i = 0; i < 12; i++) {
    let color = getColor(props.spots[i].heat)
    grid.push(
      <GCPRSpotDiv key={i}>
        <GCPRSpotInput type="radio" name="spots" id={i} color={color} onChange={props.fun} value={i}></GCPRSpotInput>
        {Spot(props.type, i, color, props.set, props.spots[i].heat)}
      </GCPRSpotDiv>
    )
  }

  return <SpotTable>{grid}</SpotTable>
}