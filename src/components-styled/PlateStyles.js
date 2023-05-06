/*
  PlateStyles.js
  styled components grid plate with selection
*/


import styled from 'styled-components';

// label for content inside well
export const WellLabel = styled.label`
  background: white;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`
// input to make well selectable
export const WellInput = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;

  & + ${WellLabel} {
    border: 1px solid #DFE3ED;
    background: #F2F2F7;
    background: ${props => props.color};

  }

  &:checked + ${WellLabel} {
    border: 4px solid #0040DD;
    box-shadow: 0px 4px 20px rgba(0, 64, 221, 0.5);
    border-radius: 4px;
  }
`;

// well div to group WellLabel & WellInput
export const WellDiv = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// control well - extension of WellDiv
export const CtrlWell = styled(WellDiv)`
  background: #F1F1F5;
  border-radius: 4px;
  color: #8A8A8E;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// text used in plate
export const Text = styled.p`
  margin: 0;
`

// column labels (numbers)
export const ColLabel = styled.div`
  width: 60px;
  height: 40px;
  background: #F6F6F6;
  border: 1px solid #DFE3ED;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// row labels (letters)
export const RowLabel = styled.div`
  width: 40px;
  height: 60px;
  background: #F6F6F6;
  border: 1px solid #DFE3ED;
  display: flex;
  align-items: center;
  justify-content: center;
`

// entire plate table with css grid
// should eventually use props to define the number of rows + columns
export const PlateTable = styled.div`
  display: grid;
  grid-template-columns: 40px repeat(12, 60px);
  grid-template-rows: 40px repeat(12, 60px);
  width: 784px;
`