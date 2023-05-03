import React from 'react';
import {Text14SB, Text20SB} from '../components-styled/TextStyles'
import ToggleButton from './ToggleButton';
import cell from '../img/cell.png'


function ImageGrid() {
  const grid = []
  for(let i = 0; i < 3; i++) {
      const row = []
    for(let j = 0; j < 4; j++) {
        row.push(<td><img src={cell}></img></td>)
    }
    grid.push(<tr>{row}</tr>)
  }

  return grid
}

export default function WellAnalysisCard() {
  return (
    <div>
      <Text20SB>A1</Text20SB>
      <Text14SB>[Set_01]</Text14SB>
      <ToggleButton></ToggleButton>
      <table> {ImageGrid()} </table>
    </div>
  )
};