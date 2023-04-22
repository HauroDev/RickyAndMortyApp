import styled from "styled-components";

const colorButtom = '#007bff';

export const Button = styled.button`
  display: inline-block;
  background-color: ${colorButtom};
  color: #fff;
  text-decoration: none;
  border: 2px solid ${colorButtom};
  border-radius: 5px;
  padding: 5px;
  margin: 20px;
  /* font-size: 16px; */
  cursor: pointer;

  transition: background-color 0.5s;
  &:hover{
    background-color: #00D1FF;
    color: #000;
  }
`;

export const Input = styled.input`
  border-radius: 5px;
  border-color: aqua;
  padding: 5px;
  margin: 20px;
`;

export const Container = styled.div`
width: 30em;
display: flex;
flex-direction: row;
justify-content: space-between;
`;