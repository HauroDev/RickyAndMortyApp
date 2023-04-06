import SearchBar from './SearchBar';
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav(props) {
    return (
        <nav>
            <NavLink to={'/about'}><button>About</button></NavLink>
            <NavLink to={'/'}><button>Home</button></NavLink>
            <SearchBar onSearch={props.onSearch} />
        </nav>)
}
