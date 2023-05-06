/*
  DivStyles.js
  styled components for layout – mainly rows and columns
*/

import styled from 'styled-components';

// row div
export const Row = styled.div`
  display: flex;
  width: 100%;
`

// row div but with gray top border for visual divider
export const RowTopBorder = styled.div`
  border-top: 1px solid #C5C5C8;
`

// col div to use in row
export const Col = styled.div`
`