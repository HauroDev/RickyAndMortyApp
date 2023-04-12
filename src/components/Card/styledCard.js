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
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 10rem;
  height: auto;
`;

export const TextInfo = styled.span`
  font-size: small;
`;

export const ImageCharacter = styled.img`
 width: 5rem;
 height: auto;
`;

export const FavButton = styled.button`
  background: none;
  border: none;

`;