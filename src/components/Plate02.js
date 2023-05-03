import React from 'react';

import {WellDiv, Text, WellInput, WellLabel, CtrlWell, ColLabel, RowLabel, PlateTable} from '../components-styled/PlateStyles'

function ColLabels () {
  const row = [<ColLabel key="0" style={{width: "40px"}}><Text></Text></ColLabel>];
  for (let i = 0; i < 12; i++) {
      row.push(<ColLabel key={"c" +(i + 1)}><Text>{i+1}</Text></ColLabel>);
  }
  return row;
}

export function getColor(num) {
  switch (true) {
    case num > 70:
      return "#2F043F";
    case num > 60: 
      return "#32286C";
    case num > 50:
      return  "#325378";
    case num > 40: 
      return "#3F7D79";
    case num > 30: 
      return "#58AA6C";
    case num > 20: 
      return "#93D151";
    case num > 10:
      return "#F8E652";
    default:
      return "#F2F2F7";
  }
}

function Well(id, fun, color) {
  return (
    <WellDiv key={id}>
      <WellInput type="radio" name="wells" id={id} value={id} onChange={fun} color={color}></WellInput>
      <WellLabel htmlFor={id} color={color}>
      </WellLabel>
    </WellDiv>
  )
}

function PlateRow(rowLabel, fun, wells) {
  const row = [<RowLabel key={"r" + rowLabel}><Text>{rowLabel}</Text></RowLabel>];
  for (let i = 0; i < 11; i++) {
    let color = "#F2F2F7";
    let id = (rowLabel + (i+1))
    if(id in wells) {
      color = getColor(wells[id]["heat"])
    }
    row.push(Well(id, fun, color));
  }
  row.push(
    <CtrlWell key={"ctrl" + rowLabel}>
      <WellInput type="radio" name="wells" id={row + "CTRL"} value={row + "CTRL"} onChange={fun}></WellInput>
      <WellLabel htmlFor={row + "CTRL"}>
        <Text>CTRL</Text>
      </WellLabel>
    </CtrlWell>)

  return row;
}

export default function Plate02(props) {
  const body = []
  const rowLabels = ["A", "B", "C", "D", "E", "F", "G", "H"]
  for (let i = 0; i < 8; i++) {
    body.push(PlateRow(rowLabels[i], props.fun, props.plate.wells));
  }
  return (
    <PlateTable>
      {ColLabels()}
      {body}
    </PlateTable>
  )
}
