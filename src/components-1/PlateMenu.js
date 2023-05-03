import React from 'react';
import styled from 'styled-components';
import status00 from '../img/status00.svg'
import status02 from '../img/status02.svg'
import check from '../img/icons/check.svg';
import checkCircle from '../img/icons/checkCircle.svg';

import { Label12, Text12M, Icon24} from '../components-styled/TextStyles';

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
  background: white;
`

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

const CompleteButton = styled.button`
  width: 171px;
  height: 36px;
  background-color: white;
  color: #0040DD;
  float: right;
  border: 2px solid white;
  text-align: right;
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

function PlateStatusButton(status) {
  if (status === "0") {
    return ( <PipettedButton>
              <ButtonIcon src={checkCircle}></ButtonIcon>
              Mark as Pipetted
            </PipettedButton>)
  } else {
    return ( <CompleteButton>
                <ButtonIcon src={check}></ButtonIcon>
                Complete
              </CompleteButton>)
  }
}

function PlateCard(plateSets, allSets) {
  return (
      <Card>
          <CardInput type='radio' value='1' name='radio' id='radio1'/>
          <CardLabel for='radio1'> 
            <Icon24 src={status02}></Icon24>
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
              <PlateStatusButton status={"1"}></PlateStatusButton>
          </div>
         
        </CardLabel>
      </Card>
  )
}


export default function PlateMenu() {
  return (
    <form>
    <CardList>
      <Card>
          <CardInput type='radio' value='1' name='radio' id='plate1'/>
          <CardLabel for='plate1'> 
            <Icon24 src={status02}></Icon24>
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
          <PlateStatusButton status={"1"}></PlateStatusButton>
          </div>
         
        </CardLabel>
      </Card>
      <Card>
          <CardInput type='radio' value='3' name='radio' id='plate2'/>
          <CardLabel for='plate2'> 
            <Icon24 src={status00}></Icon24>
            <CardName>Plate_02</CardName>
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
          <CardInput type='radio' value='2' name='radio' id='plate3'/>
          <CardLabel for='plate3'> 
            <Icon24 src={status00}></Icon24>
            <CardName>Plate_03</CardName>
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
    </form>
  )
}