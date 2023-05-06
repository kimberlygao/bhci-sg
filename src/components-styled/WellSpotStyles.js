/*
  WellSpotStyles.js
  styled components for well spot analysis
*/

import styled from 'styled-components';

// label for spot info
export const GCPRSpotLabel = styled.label`
  background: white;
  width: 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
`

// input for spot selection
export const GCPRSpotInput = styled.input`
  visibility: hidden;
  height: 0;
  width: 0;

  & + ${GCPRSpotLabel} {
    background: #F2F2F7;
    background: ${props => props.color};
    border-radius: 4px;

  }

  &:checked + ${GCPRSpotLabel} {
    border: 4px solid #0040DD;
    box-shadow: 0px 4px 20px rgba(0, 64, 221, 0.5);
  }
`;

// spot group for label and input
export const GCPRSpotDiv = styled.div`
  width: 75px;
  height: 75px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

// spot table grid
export const SpotTable = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 75px);
  grid-template-rows: repeat(3, 75px);
  column-gap: 10px;
  row-gap: 10px;
`
