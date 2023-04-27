import styled from 'styled-components'

export const Button = styled.button`
  display: inline-block;
  padding: 5px;
  margin: 20px;
  border: 2px solid #007bff;

  border-radius: 5px;
  color: #fff;
  background-color: #007bff;
  text-decoration: none;

  transition: background-color 0.5s;
  &:hover {
    background-color: #00d1ff;
    color: #000;
  }
`

export const Input = styled.input`
  border-radius: 5px;
  border-color: aqua;
  padding: 5px;
  margin: 20px;
`
