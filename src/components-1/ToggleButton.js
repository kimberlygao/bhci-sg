import React from 'react';
import styled from 'styled-components';
import { Text16SB, Label14, Icon24 } from '../components-styled/TextStyles';
import microscope from '../img/microscope.svg'
import heatmap from '../img/heatmap.svg'



const Toggle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 155px;
`
const Name = styled.span`
  padding: 0px 5px;
`
const Input = styled.input`
  visibility: hidden;

  & + ${Label} {
    border: 1px solid #E4E4E6;
    border-radius: 4px;
    padding: 8px 20px;
  }

  &:checked + ${Label} {
    background: #E4E4E6;
  }
`

export default function ToggleButton(name1, name2, img1, img2) {
  return (
    <Toggle>
      <li>
          <Input type='radio' value='1' name='radio1' id='images' checked="checked"/>
          <Label for='images'> 
            <Icon24 src={microscope}></Icon24>
            <Name>Images</Name>
          </Label>
      </li>
      <li>
          <Input type='radio' value='2' name='radio1'  id='heatmap'/>
          <Label for='heatmap'>
          <Icon24 src={heatmap}></Icon24>
            <Name>Heat Map</Name>
          </Label>
      </li>
    </Toggle>
  )
}