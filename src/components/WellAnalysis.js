import React, {useState} from 'react';
import {Text14SB, Text20SB, Text16, White14, Label16, Label16SB, Text16M, Label14, Custom40B} from '../components-styled/TextStyles'

import {gcprs, gcprSets, treatments} from '../data.js'
import { Row } from '../components-styled/DivStyles';
import { Img, Icon24 } from '../components-styled/ImgStyles';
import { Toggle, Input, Label, Name, FormGroup, DropdownSelect, Option} from '../components-styled/SelectStyles';
import microscope from '../img/icons/microscope.svg'
import heatmap from '../img/icons/heatmap.svg'

import { ButtonFillSm, ButtonFillSq } from '../components-styled/ButtonStyles';

import SpotGrid from './SpotGrid';
import { getColor } from './Plate02';



function ImageControls() {
  return (
    <div style={{marginBottom: "20px"}}>
      <ButtonFillSm><White14>Select</White14></ButtonFillSm>
    </div>
  )
}

function SpotInfo(props) {
  console.log(props.spotNum)

  if (props.spotNum == null) {
    return null
  }

  let gcpr = gcprSets[props.well.set].gcprs[parseInt(props.spotNum)]
  let spot = props.well.spots[parseInt(props.spotNum)]
  return (
    <div style={{marginTop: "20px", marginBottom: "4px"}}>
      <Row>
        <Text16M>{gcpr}</Text16M>
        <Text16M style={{margin: "0px 4px"}}>x</Text16M>
        <Text16M>{treatments[props.well.treatment].name}</Text16M>
        <Text16M style={{margin: "0px 4px"}}>•</Text16M>
        <Text16M>{props.well.conc}</Text16M>
      </Row>
      <Row>
        <Label14>[{gcprs[gcpr]}]</Label14>
      </Row>
      <Row style={{alignItems: "baseline"}}>
        <Custom40B color={getColor(spot.heat)}>{spot.heat}</Custom40B>
        <Custom40B style={{fontSize: "20px"}} color={getColor(spot.heat)}>%</Custom40B> 
        <Label16 style={{marginLeft: "10px"}}>compared to control (A12)</Label16>   
      </Row>
    </div>
  )
}

function ReportControls(props) {
  return (
    <div style={{marginTop: "16px"}}>
      <Row>
        <Label16 style={{marginRight: "4px"}}>Add </Label16>
        <Label16SB style={{marginRight: "4px"}}>{props.plate} / {props.well.loc}</Label16SB>
        <Label16 style={{marginRight: "4px"}}>to </Label16>
      </Row>
      <Row style={{alignItems: "center"}}>
        <FormGroup>
          <DropdownSelect style={{width: "276px"}}>
            <Option>Report 1</Option>
            <Option>Report 2</Option>
            <Option>Report 3</Option>
          </DropdownSelect>
        </FormGroup>
        <ButtonFillSq>+</ButtonFillSq>
      </Row>
    </div>
    
  )
}

export default function WellAnalysisCard(props) {
  let well = props.well
  if (props.well == null) {
    return null
  }

  const [selectedSpotView, setSelectedSpotView] = useState("images")
  const [selectedSpot, setSelectedSpot] = useState(null)

  const onSpotViewChange = e => {
    setSelectedSpotView(e.target.value)
  }

  const onSelectedSpotChange = e => {
    setSelectedSpot(e.target.value)
  }

  return (
    <div>
      <Row style={{alignItems: "baseline", marginBottom: "12px"} }>
        <Text20SB style={{marginRight: "4px", marginBottom: "0"}}>{well.loc}</Text20SB>
        <Text14SB style={{marginBottom: "0"}}>[{gcprSets[well.set].name}]</Text14SB>
      </Row>
      <Row>
        <Text16>{well.heat}% | {treatments[well.treatment].name} • {well.conc}</Text16>
      </Row>
      <Row>
        <Toggle>
        <li style={{marginRight: "20px"}} >
            <Input type='radio' value='images' name='spotView' id='images' onChange={onSpotViewChange} defaultChecked/>
            <Label htmlFor='images'> 
              <Icon24 src={microscope}></Icon24>
              <Name>Images</Name>
            </Label>
        </li>
        <li>
            <Input type='radio' value='heatmap' name='spotView'  id='heatmap' onChange={onSpotViewChange}/>
            <Label htmlFor='heatmap'>
            <Icon24 src={heatmap}></Icon24>
              <Name>Heat Map</Name>
            </Label>
        </li>
      </Toggle>
      </Row>
      <Row style={{margin: "12px 0px"}}>
        <SpotGrid type={selectedSpotView} spots={well.spots} set={well.set} fun={onSelectedSpotChange}></SpotGrid>
      </Row>
        <ImageControls></ImageControls>
        <SpotInfo well={props.well} spotNum={selectedSpot}></SpotInfo>
      <ReportControls plate={props.plate} well={props.well}></ReportControls>
      
    </div>
  )
};