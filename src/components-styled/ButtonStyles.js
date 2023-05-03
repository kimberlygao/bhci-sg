import styled from 'styled-components';

export const Button = styled.button`
  width: 171px;
  height: 36px;
  background-color: white;
  color: #0040DD;
  border-radius: 4px;
`

export const Button00 = styled(Button)`
  border: 2px solid #0040DD;
  float: right;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 8px;
`

export const Button02 = styled(Button)`
  border: none;
  float: right;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 8px;
  background: none;
`

export const ButtonFillSm = styled(Button)`
  background: #0040DD;
  color: white;
  border: none;
  width: 66px;
  height: 25px;
  float: right;
`

export const ButtonFillSq = styled(ButtonFillSm)`
  width: 40px;
  height: 40px;
  font-size: 18px;
`