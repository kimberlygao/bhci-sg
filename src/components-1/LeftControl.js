import React from 'react';
import styled from 'styled-components';
import { Text16 } from '../components-styled/TextStyles';

const ListMenu = styled.ul`
  list-style: none;
  padding: 0px;
  width: 200px;
`;

const ListItem = styled.li`
  width: 200px;
`
const ItemLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  background: white;

`

const ItemInput = styled.input`
  visibility: hidden;

  & + ${ItemLabel} {
    border: 1px solid #DFE3ED;
    border-radius: 4px;
    padding: 8px 16px;
  }

  &:checked + ${ItemLabel} {
    border: 2px solid #0176F9;
  }
`


const ColorTag = styled.span`
  background-color: pink;
  padding: 6px 2px; 
  font-size: 0px;
  // margin: 0px 5px;
`;

export default function LeftControl(plateSets, allSets) {
  // const setList = allSets.map(s =>
  //   <SetListItem>
  //     <SetInput type='radio' value={s.setID} name='radio' id='radio1'/>
  //     <SetLabel for='radio1'> 
  //     <SetName>{allSets[s.setID].name}</SetName>
  //     <SetLoc>[A, 1-12]</SetLoc> 
  //     <ColorTag> </ColorTag>
  //     </SetLabel>
  //   </SetListItem>
  // )
  return (
    <ListMenu>
      <ListItem>
          <ItemInput type='checkbox' value='1' name='drug' id='menu1'/>
          <ItemLabel for='menu1'> 
            <Text16>Caffeine</Text16>
            <ColorTag></ColorTag>
          </ItemLabel>
      </ListItem>
      <ListItem>
          <ItemInput type='checkbox' value='2' name='drug' id='menu2'/>
          <ItemLabel for='menu2'> 
            <Text16>Caffeine</Text16>
            <ColorTag></ColorTag>
          </ItemLabel>
      </ListItem>
    </ListMenu>
    
  )
}