import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavBar = styled.nav`
  background-color: rgb(100, 250, 50);
  display: inline-flex;
  justify-content: space-between;
  height: 5em;
`

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;
  padding: 5px;
  margin: 20px;
  border: 2px solid #007bff;

  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  background-color: #007bff;

  transition: background-color 0.5s;
  &:hover {
    background-color: #00d1ff;
    color: #000;
  }
`

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;

  width: 30rem;
  /* background-color: green; */
`
