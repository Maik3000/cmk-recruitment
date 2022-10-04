import React, { useState } from "react";
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon, NavLinks, NavBtnLink, NavBtn, NavItem, NavMenu} from "./Navbar.elements";
import { FaBars, FaTimes, FaSearch, FaUserAlt, FaPhone, } from "react-icons/fa";

import {GiSoccerKick } from "react-icons/gi";
import { IconContext } from "react-icons";



const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
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
            
            
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home">HOME</NavLinks>
                    </NavItem>
                    
                        {/* <NavBtnLink to='/pages/login'>Log In</NavBtnLink> */}
                </NavMenu>
                
                
              </MenuItemLink>

              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              
                <NavMenu>
                    
                    <NavItem>
                        <NavLinks to='search'>SEARCH</NavLinks> 
                    </NavItem>
                    
                        {/* <NavBtnLink to='/pages/login'>Log In</NavBtnLink> */}
                </NavMenu>
                
              
                 
              </MenuItemLink>

              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              
                <NavMenu>
                    
                    <NavItem>
                        <NavLinks to='contactus'>CONTACT US</NavLinks> 
                    </NavItem>
                    
                        {/* <NavBtnLink to='/pages/login'>Log In</NavBtnLink> */}
                </NavMenu>
                
              
                 
              </MenuItemLink>

              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
              
                <NavMenu>
                    
                    <NavItem>
                        <NavLinks to='aboutus'>ABOUT US</NavLinks> 
                    </NavItem>
                    
                        {/* <NavBtnLink to='/pages/login'>Log In</NavBtnLink> */}
                </NavMenu>
                
              
                 
              </MenuItemLink>

              

          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;