import React from 'react';

import {SelectItem, ItemLabel, ItemInput} from '../components-styled/SelectStyles';
import { Icon20, Icon24 } from '../components-styled/ImgStyles';
import {Button00, Button02} from '../components-styled/ButtonStyles';
import { Text20SB, Label12, Text12M, Blue16, Blue16SB} from '../components-styled/TextStyles';
import {Td} from '../components-styled/TableStyles';

import status00 from '../img/status00.svg'
import status02 from '../img/status02.svg'
import check from '../img/icons/check.svg';
import checkCircle from '../img/icons/checkCircle.svg';

function StatusIcon(status) {
  if (status.status === "00") {
    return (<Icon24 src={status00} style={{marginBottom: "12px"}}></Icon24>)
  } else {
    return (<Icon24 src={status02} style={{marginBottom: "12px"}}></Icon24>)
  }
}

function StatusButton(status) {
  if (status.status === "00") {
    return ( <Button00>
              <Icon20 src={checkCircle}></Icon20>
              <Blue16>Mark as Pipetted</Blue16>
            </Button00>)
  } else {
    return ( <Button02>
                <Icon20 src={check}></Icon20>
                <Blue16SB>Completed</Blue16SB>
              </Button02>)
  }
}

export default function PlateItem(props) {
  let p = props.plate
  return (
    <SelectItem>
      <ItemInput type="radio" value={p.id} name="plates" id={p.id} onChange={props.fun}></ItemInput>
      <ItemLabel htmlFor={p.id}>
        <StatusIcon status={p.status}></StatusIcon>
        <Text20SB>{p.name}</Text20SB>
        <table>
        <thead>
          <tr>
            <th><Label12>Number</Label12></th>
            <th><Label12>Type</Label12></th>
            <th><Label12>GCPR Sets</Label12></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <Td><Text12M>{p.id}</Text12M></Td>
            <Td><Text12M>{p.type}</Text12M></Td>
            <Td><Text12M>Set_01</Text12M><Text12M>Set_02</Text12M><Text12M>...</Text12M></Td>
          </tr>
        </tbody>
      </table>
      <div><StatusButton status={p.status}></StatusButton></div>
      </ItemLabel> 
    </SelectItem>
  )
}