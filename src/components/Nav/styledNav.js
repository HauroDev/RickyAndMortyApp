import styled from "styled-components";
import { NavLink } from "react-router-dom";

const colorButtom = '#007bff';

export const NavBar = styled.nav`
  background-color: rgb(100,250,50);
  display: inline-flex;
  justify-content: space-between;
  height: 5em;
`;

export const NavLinkStyled = styled(NavLink)`
  display: inline-block;

  background-color: ${colorButtom};
  color: #fff;
  text-decoration: none;
  border: 2px solid ${colorButtom};
  border-radius: 5px;
  padding: 5px;
  margin: 20px 20px;
  /* font-size: 16px; */
  cursor: pointer;

  transition: background-color 0.5s;
  &:hover{
    background-color: #00D1FF;
    color: #000;
  }
`;

export const Container = styled.div`
width: 28rem;
`;