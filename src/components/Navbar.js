import React from "react";
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon, NavLinks, NavBtnLink, NavItem, NavMenu} from "./Navbar.elements";


import {GiSoccerKick } from "react-icons/gi";
import { IconContext } from "react-icons";

import Home from './components/home'
import About from './components/about'
import Search from './components/search'
import Contact from './components/contact'

import { Component } from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'



class Navbar extends Component {
  render() {
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

                  <NavMenu>
                      <NavItem>
                        <Link to="/home">Home</Link>
                      </NavItem>
                      
                          {/* <NavBtnLink to='/pages/login'>Log In</NavBtnLink> */}
                  </NavMenu>
                  

                  <NavMenu>
                      
                      <NavItem>  
                        <Link to="/search">Search</Link>
                      </NavItem>
                      
                          {/* <NavBtnLink to='/pages/login'>Log In</NavBtnLink> */}
                  </NavMenu>
                  

                  <NavMenu>
                      
                      <NavItem>
                        <Link to="/contact">Contact Us</Link> 
                      </NavItem>
                      
                          {/* <NavBtnLink to='/pages/login'>Log In</NavBtnLink> */}
                  </NavMenu>

                  <NavMenu>
                      
                      <NavItem>
                        <Link to="/about">About Us</Link> 
                      </NavItem>
                      
                          {/* <NavBtnLink to='/pages/login'>Log In</NavBtnLink> */}
                  </NavMenu>
                  

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
};

export default Navbar;