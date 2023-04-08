import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavBar = styled.nav`
    background-color: greenyellow;
    display: flex;
    justify-content: space-between;
`;

export const NavLinkStyled = styled(NavLink)`
display: inline-block;
padding: 0.5rem 1rem;
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
text-align: center;
text-decoration: none;
white-space: nowrap;
background-color: #007bff;
border: 1px solid #007bff;
border-radius: 0.25rem;
color: #fff;
transition: all 0.3s ease-in-out;

&:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

&:active {
    background-color: #004b9a;
    border-color: #004b9a;
    transform: scale(0.95);
}
`;