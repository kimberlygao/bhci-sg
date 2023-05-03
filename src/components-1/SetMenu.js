import React from 'react';
import styled from 'styled-components';

const ListMenu = styled.ul`
  list-style: none;
  padding: 0px;
  width: 200px;
`;

const SetListItem = styled.li`
  width: 200px;
`

const SetLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;
  background: white;

`

const SetName = styled.span`
  padding: 0px 5px;
`

const SetLoc = styled.span`
  color: gray;
  font-size: 14px;
`

const SetInput = styled.input`
  visibility: hidden;

  & + ${SetLabel} {
    border: 1px solid #DFE3ED;
    border-radius: 4px;
    padding: 16px;
  }

  &:checked + ${SetLabel} {
    border: 2px solid #0176F9;
  }
`

const Select = styled.select`
`

export default function SetMenu(plateSets, allSets) {
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
      <SetListItem>
          <SetInput type='checkbox' value='1' name='radio' id='radio1'/>
          <SetLabel for='radio1'> 
            <SetName>Set_01</SetName>
            <SetLoc>[A, 1-12]</SetLoc> 
          </SetLabel>
      </SetListItem>
      <SetListItem>
          <SetInput type='checkbox' value='2' name='radio'  id='radio2'/>
          <SetLabel for='radio2'>
            <SetName>Set_01</SetName>
            <SetLoc>[A, 1-12]</SetLoc> 
          </SetLabel>
      </SetListItem>
      <SetListItem>
          <SetInput type='checkbox' value='3' name='radio'  id='radio3'/>
          <SetLabel for='radio3'>
            <SetName>Set_01</SetName>
            <SetLoc>[A, 1-12]</SetLoc> 
          </SetLabel>
      </SetListItem>
    </ListMenu>
  )
}