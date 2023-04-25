import styled from 'styled-components';
import React, { Component }  from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GCPR from './TextStyles.js';


const WellCircle = styled.div`
  background-color: pink;
  width: 30px;
  height: 30px;
  font-size: 16px;
  margin: auto;
  padding: 0px 0px;
  border: 1px solid
`;

const PlateLabel = styled.p`
  padding: 0px 0px;
  margin: auto;
  font-weight: 600;
`;


function Label(char) {
  return <Col><PlateLabel>{char}</PlateLabel></Col>
}

function ColLabels () {
  const row = [<Col></Col>];
  for (let i = 0; i < 12; i++) {
      row.push(Label(i+1));
  }
  return <Row>{row}</Row>;
}

function Well() {
  return <Col><WellCircle>5ml</WellCircle></Col>
}

function PlateRow(rowLabel) {
  const row = [<Col><PlateLabel>{rowLabel}</PlateLabel></Col>];
  for (let i = 0; i < 12; i++) {
      row.push(Well());
  }
  return <Row>{row}</Row>;
}


export default function Plate() {
  const rows = [ColLabels()];
  let rowLabels = ["A", "B", "C", "D", "E", "F", "G", "H"]
  for (let i = 0; i < 8; i++) {
      rows.push(PlateRow(rowLabels[i]));
  }
  return <Container>{rows}</Container>;
}