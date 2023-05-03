import styled from 'styled-components';

export const SelectList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

export const SelectItem = styled.li`

`

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

export const Toggle = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 155px;
`
export const Name = styled.span`
  padding: 0px 5px;
  font-size: 16px;
  font-weight: 600;
`
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

export const FormGroup = styled.div`
  margin: 12px 12px 12px 0px;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  line-height: 19px;
  text-align: left;
  width: 82px;
  display: inline-block;
  margin-right: 20px;
`;

export const DropdownSelect = styled.select`
  font-weight: 500;
  font-size: 16px;
  width: 200px;
  border: 1px solid #E5E5EC;
  height: 40px;
  padding: 8px 12px;
  border-radius: 4px;
`;

export const Option = styled.option`
`;

