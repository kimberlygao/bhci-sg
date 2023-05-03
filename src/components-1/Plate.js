import styled from 'styled-components';
import React from 'react';


const WellInput = styled.input`
  width: 60px;
  margin: 0;
  margin-bottom: 1px;
  border-radius: 4px;
  text-align: center;
  padding: 1px 15px;
  height: 30px;
  border: 0;

`;

const Td = styled.td`
  padding: 0;
  border: 2px solid #DFE3ED;
  border-collapse: collapse;
`
const CtrlWell = styled.td`
  padding: 1px 15px;
  background: #F1F1F5;
  border-radius: 4px;
  color: #8A8A8E;
  height: 60px;
`

const PlateLabel = styled.th`
  font-weight: 600;
  width: 40px;
  height: 60px;
  background: #F6F6F6;
  margin: 5px;
  border: 2px solid #DFE3ED;
`;

const RowLabel = styled.th`
  font-weight: 600;
  height: 40px;
  width: 60px;
  background: #F6F6F6;
  margin: 5px;
  border: 2px solid #DFE3ED;
`

const PlateTable = styled.table`
  // border-spacing: 0; !important;
  background: #DFE3ED;
  // border: 2px solid #DFE3ED;
  width: 800px;
`


function Label(char) {
  return <PlateLabel>{char}</PlateLabel>
}

function ColLabels () {
  const row = [<PlateLabel></PlateLabel>];
  for (let i = 0; i < 12; i++) {
      row.push(Label(i+1));
  }
  return <tr>{row}</tr>;
}

function Well() {
  return <Td><WellInput type="text" value="-"></WellInput><WellInput type="text" value="0"></WellInput></Td>
}



function PlateRow(rowLabel) {
  const row = [<RowLabel>{rowLabel}</RowLabel>];
  for (let i = 0; i < 11; i++) {
      row.push(Well());
  }
  row.push(<td>{<CtrlWell>CTRL</CtrlWell>}</td>)
  return <tr>{row}</tr>;
}


export default function Plate() {
  const rows = [ColLabels()];
  let rowLabels = ["A", "B", "C", "D", "E", "F", "G", "H"]
  for (let i = 0; i < 8; i++) {
      rows.push(PlateRow(rowLabels[i]));
  }
  return (
    <PlateTable>{rows}</PlateTable>
  );

}