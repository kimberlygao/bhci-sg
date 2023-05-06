/*
  SelectStyles.js
  styled components for selection menus - plate items, toggle buttons
*/

import styled from 'styled-components';

// list for select items
export const SelectList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

// select item - groups label and input
export const SelectItem = styled.li`

`

// item label - all item information
export const ItemLabel = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  text-align: left;
  margin: 0px 0px 0px 20px;
  background: white;

  &:hover {
    background: #E9E9EA;
  }
`

// item input - clickable ability
export const ItemInput = styled.input`
  visibility: hidden;

  & + ${ItemLabel} {
    border: 1px solid #D1D1D6;
    width: 296px;
    // height: 234px;
    border-radius: 10px;
  }

  &:checked + ${ItemLabel} {
    border: 2px solid #0176F9;
  }
`

// toggle button group
export const Toggle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

// label for toggle button
export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 155px;
`

// name in toggle - used in label
export const Name = styled.span`
  padding: 0px 5px;
  font-size: 16px;
  font-weight: 600;
`

// input for label
export const Input = styled.input`
  visibility: hidden;

  & + ${Label} {
    padding: 8px 20px;
    filter: grayscale(100%);
  }

  &:checked + ${Label} {
    background: #E4E4E6;
    filter: grayscale(0%);
    border-radius: 4px;
  }
`

// form group for dropdown
export const FormGroup = styled.div`
  margin: 12px 12px 12px 0px;
`;

// label for dropdown
export const FormLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  width: 82px;
  display: inline-block;
  margin-right: 20px;
`;

// dropdown selection
export const DropdownSelect = styled.select`
  font-weight: 500;
  font-size: 16px;
  width: 200px;
  border: 1px solid #E5E5EC;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;
`;

// options for dropdown
export const Option = styled.option`
`;

