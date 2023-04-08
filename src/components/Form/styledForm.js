import styled, { css } from "styled-components";

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;

  transition: background-color 0.5s;
  &:hover{
    background-color: #00D1FF;
    color:black;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 5px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border-radius: 0.3em;
  ${({ isWarning }) => isWarning && css`
    border: solid red 1px;
  `}
`;

export const P = styled.p`
  display: block;
  ${({ isError }) => isError && css`
    font-size: 10px;
    color: red;
    width: inherit;
    border: 1px solid red;
    border-radius: 3px;
  `}
`;

export const Label = styled.label`
  display: block;
  text-align: left;
  margin-bottom: 5px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Container = styled.div`
  display: flex;
  transform: rotate(-15deg);
  flex-direction: column;
  margin-top: 10em;
  margin-left: 30em;
  margin-right: 30em;
  padding: 2em 3em 2em 3em;
  border: solid;
  border-radius: 5px;
  background-color: white;
`;