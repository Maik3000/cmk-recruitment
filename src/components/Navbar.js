import React, { useState } from "react";
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink, MobileIcon,} from "./Navbar.elements";
import { FaBars, FaTimes, FaHome, FaSearch, FaUserAlt, FaPhone, } from "react-icons/fa";

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
            
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                    Holi
                </div>
              </MenuItemLink>
            </MenuItem>

      

            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaSearch />
                  SEARCH
                </div>
              </MenuItemLink>
            </MenuItem>

       

            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  ABOUT US
                </div>
              </MenuItemLink>
            </MenuItem>


            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaPhone />
                  CONTACT US
                </div>
              </MenuItemLink>
            </MenuItem>

         

          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;