import styled from "styled-components";

export const CloseButton = styled.button`
  border-radius: 100%;
  background-color: red;
  color: white;
  border: 2px solid red;
  width: 30px;
  height: 30px;

  /* float: right; */

  transition: background-color 0.5s;

  &:hover {
    background-color: coral;
    border-color: orange;
  }
`;

export const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;
  height: 15rem;
  margin: 0.5rem;
  background-color: aquamarine;
`;

export const TextInfo = styled.span`
  font-size: small;
`;

export const ImageCharacter = styled.img`
 width: 5rem;
`;

export const FavButton = styled.button`
  background-color: coral;
  border: 3px solid red;
  border-radius: 100%;

  &:hover {
    border: 3px solid coral;
    background-color: crimson;
  }
`;