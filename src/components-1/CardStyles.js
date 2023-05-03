import styled from 'styled-components';


export const Card = styled.div`
  border: 1px solid #D1D1D6;
  width: 296px;
  height: 234px;
  border-radius: 10px;
`;

export const CardList = styled.ul`
list-style: none;
`;


export const Select = styled.select`
`


const SetListItem = styled.li`
`

const SetLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 200px;

`

const ColorTag = styled.span`
  background-color: pink;
  padding: 6px 2px; 
  font-size: 0px;
  margin: 0px 5px;
`;

const SetInput = styled.input`
  visibility: hidden;

  & + ${SetLabel} {
    border: 1px solid #DFE3ED;
    border-radius: 4px;
    padding: 8px;
  }

  &:checked + ${SetLabel} {
    border: 2px solid #0176F9;
  }
`