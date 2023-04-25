import React from 'react';
import styled from 'styled-components';
import { Text20SB, Label14, Icon24 } from './TextStyles';
import status00 from '../img/status00.svg'


const Card = styled.div`
  text-align: left;
  width: 330px;
`;

const ListMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

const GCPRList = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  text-align: right;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 250px;
  padding: 0px;
  gap: 2px;
`;

const SetLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 155px;
`
const SetName = styled.span`
  padding: 0px 5px;
`
const SetInput = styled.input`
  visibility: hidden;

  & + ${SetLabel} {
    border: 1px solid #E4E4E6;
    border-radius: 4px;
    padding: 8px 20px;
  }

  &:checked + ${SetLabel} {
    background: #E4E4E6;
  }
`

const FormGroup = styled.div`
  margin: 12px 12px 12px 0px;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  width: 82px;
  display: inline-block;
  margin-right: 20px;
`;

const Select = styled.select`
  font-weight: 500;
  font-size: 16px;
  width: 200px;
  border: 1px solid #E5E5EC;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;
`;

const Option = styled.option`
`;

const Input = styled.input.attrs({ type: 'number', placeholder:"-" })`
  width: 200px;
  border: 1px solid #E5E5EC;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;

`;

const NumInput = styled.input.attrs({ type: 'number', placeholder:"-" })`
  width: 200px;
  border: 1px solid #E5E5EC;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;

`;

export default function SetCard(set) {

  let gcprs = ["ADRA1A",
    "ADRA1B",
    "ADRA1D",
    "ADRA2A",
    "ADRA2B",
    "ADRA2C",
    "ADRB1",
    "ADRB2",
    "ADRB3",
    "HTR1A",
    "HTR1B",
    "HTR1D"]

  let treatments = ["caffeine", "glutamate"]

  const ts = treatments.map(t =>
    <Option>{t}</Option>
  );

  const gcprTags = gcprs.map(g =>
    <td><Label14>{g}</Label14></td>
  );

  return (
    <Card>
       <Text20SB>Set_01: A1-A6</Text20SB>
       <GCPRList>
          {gcprTags}
        </GCPRList>
        <form>
    <ListMenu>
      <li>
          <SetInput type='radio' value='1' name='radio1' id='single' checked="checked"/>
          <SetLabel for='single'> 
            <Icon24 src={status00}></Icon24>
            <SetName>Single</SetName>
          </SetLabel>
      </li>
      <li>
          <SetInput type='radio' value='2' name='radio1'  id='double'/>
          <SetLabel for='double'>
          <Icon24 src={status00}></Icon24>
            <SetName>Multiple</SetName>
          </SetLabel>
      </li>
    </ListMenu>
    <FormGroup>
          <Label>Treatment</Label>
          <Select>{ts}</Select>
    </FormGroup>
    <FormGroup>
      <Label>Start Value</Label>
      <Input></Input>
    </FormGroup>
    <FormGroup>
      <Label>N-fold</Label>
      <NumInput></NumInput>
    </FormGroup>
    <FormGroup>
      <Label>Direction</Label>
      <ListMenu>
      <li>
          <SetInput type='radio' value='3' name="dir" id='left'/>
          <SetLabel for='left'> 
            <Icon24 src={status00}></Icon24>
            <SetName>Left</SetName>
          </SetLabel>
      </li>
      <li>
          <SetInput type='radio' value='4' name="dir"   id='right'/>
          <SetLabel for='right'>
          <Icon24 src={status00}></Icon24>
            <SetName>Right</SetName>
          </SetLabel>
      </li>
    </ListMenu>
    </FormGroup>
    </form>
    </Card>
    
  )
}