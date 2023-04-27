import SearchBar from '../SearchBar/SearchBar'
import React from 'react'
import { Container, NavBar, NavLinkStyled } from './styledNav'

export default function Nav(props) {
  return (
    <NavBar>
      <Container>
        <NavLinkStyled to={'/about'}>About</NavLinkStyled>
        <NavLinkStyled to={'/home'}>Home</NavLinkStyled>
        <NavLinkStyled to={'/favorites'}>Favorites</NavLinkStyled>
        <NavLinkStyled to={'/'} onClick={props.logout}>
          Log Out
        </NavLinkStyled>
      </Container>
      <Container>
        <SearchBar onSearch={props.onSearch} ramdom={props.ramdom} />
      </Container>
    </NavBar>
  )
}
