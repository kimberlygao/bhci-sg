import React from 'react';
import styled from 'styled-components';
import status00 from '../img/status00.svg'
import check from '../img/check.svg';
import { Label12, Text12M, Text20SB} from './TextStyles';



const CardList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

const Card = styled.li`
`

const CardLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  text-align: left;
  margin: 0px 20px 0px 0px;
`

const PlateStatusImg = styled.img`
  width: 24px;
  height: 24px;
`;

const CardName = styled.span`
  font-weight: 600;
  font-size: 20px;
`

const CardInput = styled.input`
  visibility: hidden;

  & + ${CardLabel} {
    border: 1px solid #D1D1D6;
    width: 296px;
    height: 234px;
    border-radius: 10px;
  }

  &:checked + ${CardLabel} {
    border: 2px solid #0176F9;
  }
`
const PipettedButton = styled.button`
  width: 171px;
  height: 36px;
  border: 2px solid #0040DD;
  border-radius: 4px;
  background-color: white;
  color: #0040DD;
  float: right;
`

const ButtonIcon = styled.img`
  width: 20px;
  height: 20px;
  margin: auto;
  padding-right: 6px;
`

const Td = styled.td`
  vertical-align: top;
`

function PlateCard(plateSets, allSets) {
  return (
      <Card>
          <CardInput type='radio' value='1' name='radio' id='radio1'/>
          <CardLabel for='radio1'> 
            <PlateStatusImg src={status00}></PlateStatusImg>
            <CardName>Plate_01</CardName>
            <table>
            <thead>
              <th><Label12>Number</Label12></th>
              <th><Label12>Type</Label12></th>
              <th><Label12>GCPR Sets</Label12></th>
            </thead>
            <tbody>
              <Td><Text12M>SGDEV01</Text12M></Td>
              <Td><Text12M>Type_01</Text12M></Td>
              <Td><Text12M>Set_01</Text12M><Text12M>Set_02</Text12M><Text12M>...</Text12M></Td>
            </tbody>
          </table>
          <div>
            <PipettedButton>
              <ButtonIcon src={check}></ButtonIcon>
              Mark as Pipetted
            </PipettedButton>
          </div>
         
        </CardLabel>
      </Card>
  )
}


export default function PlateMenu() {
  return (
    <CardList>
      <Card>
          <CardInput type='radio' value='1' name='radio' id='radio1'/>
          <CardLabel for='radio1'> 
            <PlateStatusImg src={status00}></PlateStatusImg>
            <CardName>Plate_01</CardName>
            <table>
            <thead>
              <th><Label12>Number</Label12></th>
              <th><Label12>Type</Label12></th>
              <th><Label12>GCPR Sets</Label12></th>
            </thead>
            <tbody>
              <Td><Text12M>SGDEV01</Text12M></Td>
              <Td><Text12M>Type_01</Text12M></Td>
              <Td><Text12M>Set_01</Text12M><Text12M>Set_02</Text12M><Text12M>...</Text12M></Td>
            </tbody>
          </table>
          <div>
            <PipettedButton>
              <ButtonIcon src={check}></ButtonIcon>
              Mark as Pipetted
            </PipettedButton>
          </div>
         
        </CardLabel>
      </Card>
      <Card>
          <CardInput type='radio' value='3' name='radio' id='radio3'/>
          <CardLabel for='radio3'> 
            <PlateStatusImg src={status00}></PlateStatusImg>
            <CardName>Plate_01</CardName>
            <table>
            <thead>
              <th><Label12>Number</Label12></th>
              <th><Label12>Type</Label12></th>
              <th><Label12>GCPR Sets</Label12></th>
            </thead>
            <tbody>
              <Td><Text12M>SGDEV01</Text12M></Td>
              <Td><Text12M>Type_01</Text12M></Td>
              <Td><Text12M>Set_01</Text12M><Text12M>Set_02</Text12M><Text12M>...</Text12M></Td>
            </tbody>
          </table>
          <div>
            <PipettedButton>
              <ButtonIcon src={check}></ButtonIcon>
              Mark as Pipetted
            </PipettedButton>
          </div>
         
        </CardLabel>
      </Card>
      <Card>
          <CardInput type='radio' value='2' name='radio' id='radio2'/>
          <CardLabel for='radio2'> 
            <PlateStatusImg src={status00}></PlateStatusImg>
            <CardName>Plate_01</CardName>
            <table>
            <thead>
              <th><Label12>Number</Label12></th>
              <th><Label12>Type</Label12></th>
              <th><Label12>GCPR Sets</Label12></th>
            </thead>
            <tbody>
              <Td><Text12M>SGDEV01</Text12M></Td>
              <Td><Text12M>Type_01</Text12M></Td>
              <Td><Text12M>Set_01</Text12M><Text12M>Set_02</Text12M><Text12M>...</Text12M></Td>
            </tbody>
          </table>
          <div>
            <PipettedButton>
              <ButtonIcon src={check}></ButtonIcon>
              Mark as Pipetted
            </PipettedButton>
          </div>
         
        </CardLabel>
      </Card>
    </CardList>
  )
}