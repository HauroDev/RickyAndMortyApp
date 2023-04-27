import styled from 'styled-components'

export const CloseButton = styled.button`
  display: block;
  border-radius: 100%;
  background-color: red;
  color: white;
  border: 2px solid red;
  width: 30px;
  height: 30px;

  text-align: left;
  transition: background-color 0.5s;

  &:hover {
    background-color: coral;
    border-color: orange;
  }
`

export const TextInfo = styled.span`
  font-size: normal;
`

export const ImageCharacter = styled.img`
  border: 3px solid green;
  border-radius: 10px;
  width: 7rem;
`

export const FavButton = styled(CloseButton)`
  background-color: coral;
  border: 3px solid red;
  border-radius: 100%;
  text-align: center;

  &:hover {
    border: 3px solid coral;
    background-color: crimson;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.2rem;
  padding-top: 0.5rem;

  width: 10rem;
  height: 15rem;

  background-color: aquamarine;
  border: 3px solid green;
  border-radius: 10px;
`
