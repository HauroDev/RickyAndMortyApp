import SearchBar from '../SearchBar';
import React from 'react';
import { NavBar, NavLinkStyled } from './styledNav';

export default function Nav(props) {

    return (
        <NavBar>
            <div>
                <NavLinkStyled to={'/about'}>About</NavLinkStyled>
                <NavLinkStyled to={'/home'}>Home</NavLinkStyled>
                <NavLinkStyled to={'/'} onClick={props.logout}>Log Out</NavLinkStyled>
            </div>
            <div>
                <button onClick={props.ramdom}>Ramdom</button>
                <SearchBar onSearch={props.onSearch} />
            </div>

        </NavBar>)
}
