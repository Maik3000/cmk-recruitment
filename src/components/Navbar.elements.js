import styled from "styled-components";
import {Link as LinkS} from 'react-scroll'
import {Link as LinkR} from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1b004b ;
`;

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: auto;
`;

export const LogoContainer = styled.div`
  margin-left: .5rem;
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-family: sans-serif;
  p {
    &:nth-child(2) {
        
        font-size: 1.5rem;
        font-weight: 500;
        color: #ffffff;
    }
    &:nth-child(3) {
      font-weight: bold;
      font-size: 1.5rem;
      font-weight: 500;
      color: #ffffff;
      margin-left: 0.5rem;
    }
  }
  svg {
    fill: #ffffff;
    margin-right: 0.5rem;
  }
`;

export const Menu = styled.ul`
  height: 100%;
  display: flex;
  justify-content: space-between;
  list-style: none;
  @media screen and (max-width: 960px) {
    background-color: #23394d;
    position: absolute;
    top: 70px;
    left: ${({ open }) => (open ? "0" : "-100%")}; //Import
    width: 100%;
    height: 90vh;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: 0.5s all ease;
  }
`;

export const MenuItem = styled.li`
  height: 100%;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: ce;
    align-items: center;
  }
`;

export const MenuItemLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 0.5rem 2.5rem;
  color: #ffffff;
  font-family: sans-serif;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  transition: 0.5s all ease;
  &:hover {
    color: #fff;
    background-color: #4b1c71;
    transition: 0.5s all ease;
    div {
      svg {
        fill: #23394d;
      }
    }
  }
  div {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      display: none;
      fill: #4b1c71;
      margin-right: 0.5rem;
    }
  }
  @media screen and (max-width: 960px) {
    width: 100%;
    div {
      width: 30%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 880px) {
    div {
      width: 40%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 500px) {
    div {
      width: 60%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
  @media screen and (max-width: 260px) {
    div {
      width: 100%;
      justify-content: left;
      svg {
        display: flex;
      }
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: flex;
    align-items: center;
    cursor: pointer;
    svg {
      fill: #ffffff;
      margin-right: 0.5rem;
    }
  }
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active{
        border-bottom: 3px solid #01bf71;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #87CEFA;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606,
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
    
    `;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px) {
        display: none;
    }
    `;

  