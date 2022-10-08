import React, { useState } from "react";
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon, NavLinks, NavBtnLink, NavItem, NavMenu} from "./Navbar.elements";


import {GiSoccerKick } from "react-icons/gi";
import { IconContext } from "react-icons";

import Home from '../pages/home';
import About from '../pages/about';
import Search from '../pages/search';
import Contact from '../pages/contact';

import { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import {
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
} from "react-icons/fa";





const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  
    return (
      <Router>
      <div className="Navbar">
      <Container>
        <Wrapper>
          <IconContext.Provider value={{ style: { fontSize: "2rem" } }}>
            <LogoContainer>
              <GiSoccerKick />
              <p>CMK  </p>
              <p><b>Recruitment</b> </p>
            </LogoContainer>

            <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  <Link to="/home">Home</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  <Link to="/about">About Us</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBriefcase />
                  <Link to="/search">Search</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaGlasses />
                  <Link to="/contact">Contact Us</Link>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
                  

            <Routes>
              <Route exact path='/home' element={< Home />}></Route>
              <Route exact path='/search' element={< Search />}></Route>
              <Route exact path='/about' element={< About />}></Route>
              <Route exact path='/contact' element={< Contact />}></Route>
            </Routes>  

            
          </IconContext.Provider>
        </Wrapper>
      </Container>
      </div>
      </Router>
    
  );
  };


export default Navbar;