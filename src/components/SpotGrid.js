/*
  SpotGrid.js
  Component for the image/heatmap toggle of spots in one well

  Uses WellSpot styles for rendering selection styles with input/label
  Parent component in WellAnalysis.js/WellAnalysisCard
*/


import React from "react";
import { GCPRSpotLabel, GCPRSpotInput, GCPRSpotDiv, SpotTable } from '../components-styled/WellSpotStyles';
import { Img } from "../components-styled/ImgStyles";
import cell from '../img/icons/cell.png'
import { White14, Trans12 } from "../components-styled/TextStyles";
import { getColor } from './Plate02'
import { gcprSets} from '../data.js'


// returns one spot for selection 
// type: image or heatmap, i: index and id (1-12), 
// color: color for heatmap, gcpr, heat: heat value
function Spot(type, i, gcpr, heat) {
  if (type === "images") {
    return <GCPRSpotLabel htmlFor={i}><Img src={cell} ></Img></GCPRSpotLabel>
  } else {
    return <GCPRSpotLabel style={{flexDirection: "column"}} htmlFor={i} color={getColor(heat)}>
      <White14>{gcpr}</White14>
      <Trans12>{heat}%</Trans12>
    </GCPRSpotLabel>
  }
}

// returns 3x4 spot grid images or heatmap for a single well analysis
// props – spots: list of spots to render (length 12)
export default function SpotGrid(props) {
  const grid = []
  for(let i = 0; i < 12; i++) {
    let color = getColor(props.spots[i].heat)
    grid.push(
      <GCPRSpotDiv key={i}>
        <GCPRSpotInput type="radio" name="spots" id={i} color={color} onChange={props.fun} value={i}></GCPRSpotInput>
        {Spot(props.type, i, gcprSets[props.set].gcprs[i], props.spots[i].heat)}
      </GCPRSpotDiv>
    )
  }

  return <SpotTable>{grid}</SpotTable>
}