import styled from 'styled-components';
import React, { Component }  from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';



const set1 = {
  id: 'Set_01',
  row: "A",
  colStart: 1,
  colEnd: 12
};

const set2 = {
  id: 'Set_02',
  row: "B",
  colStart: 1,
  colEnd: 12
};

const treatments = ["caffeine", "glutamate"]

const units = ["um"]

const OptionColor = styled.p`
  border-left: 2px solid red;
`

function Dropdown(options) {
  const optionItems = options.options.map(opt =>
    <option><OptionColor value={opt}>{opt}</OptionColor></option>
  );

  return (
    <Form.Select aria-label="Select">
      {optionItems}
    </Form.Select>
  );
}

function SetRow(set) {
  return (
    <tr>
      <td>
        <p>{set.set.id}</p>
        <p>[{set.set.row}, {set.set.colStart}-{set.set.colEnd}]</p>
      </td>
      <td>
        <Dropdown options={treatments}></Dropdown>
      </td>
      <td>
        10
      </td>
      <td>
        <Dropdown options={units}></Dropdown>
      </td>
      <td>
        10
      </td>
      <td>
        Right
      </td>
    </tr>
  )
}

export default function TreatmentTable() {
  return <Table>
    <thead>
      <tr>
        <th>GCPR Set</th>
        <th>Treatment</th>
        <th>Starting Value</th>
        <th>Unit</th>
        <th>N-fold</th>
        <th>Direction</th>
      </tr>
    </thead>
    <tbody>
      <SetRow set={set1}></SetRow>
      <SetRow set={set2}></SetRow>
    </tbody>
  </Table>
}