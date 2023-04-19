import React from 'react';
import styled from 'styled-components';


const Card = styled.div`  
  width: 315px;
`

const CardTop = styled.div`
  width: 315px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 20px 20px 12px;
  gap: 10px;
  background-color: #EBEBEB;
  border-radius: 8px 8px 0px 0px;
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

const GCPR = styled.p`
  color: gray;
  font-size: 14px;
  margin-bottom: 2px;
`;

const CardTitle = styled.div`
  text-align: left;
`;

const CardT = styled.p`
  font-weight: 600;
  font-size: 24px;
  margin-bottom: 5px;
`;

const CardForm = styled.form`
  border: 1px solid #DFE3ED;
  border-top: none;
  width: 315px;
  padding: 20px;
`

const FormGroup = styled.div`
  margin-bottom: 12px;
`;

const Label = styled.label`
  font-size: 16px;
  line-height: 19px;
  text-align: right;
  display: inline-block;
  width: 100px;
  margin-right: 12px;
`;

const Select = styled.select`
  font-weight: 500;
  font-size: 16px;
  width: 140px;
  border: 1px solid #E5E5EC;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;


`;

const Option = styled.option`
`;

const Input = styled.input.attrs({ type: 'number', placeholder:"-" })`
  width: 140px;
  border: 1px solid #E5E5EC;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;

`;

const NumInput = styled.input.attrs({ type: 'number', placeholder:"-" })`
  width: 140px;
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
    <GCPR>{g}</GCPR>
  );

  return (
    <Card>
      <CardTop>
        <GCPRList>
          {gcprTags}
        </GCPRList>
        <CardTitle>
          <CardT>Set_01</CardT>
          <CardT>-</CardT>
        </CardTitle>
      </CardTop>
      <CardForm>
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
          <Select>
            <Option>Left</Option>
            <Option>Right</Option>
          </Select>
        </FormGroup>
        
      </CardForm>
    </Card>
    
  )
}