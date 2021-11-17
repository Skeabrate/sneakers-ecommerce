import React from 'react';
import avatarImg from "../../Assets/Images/image-avatar.png"
import { Wrapper, StyledNav, StyledLogo, StyledTitleWrapper, StyledNavItem, StyledCart, StyledCartItem } from "./NavBar.styles"

const NavBar = React.forwardRef(({handleGoBack}, navBarRef) => {
   return (
      <Wrapper ref={navBarRef}>
         <StyledTitleWrapper>
            <header>
               <StyledLogo to="/" onClick={handleGoBack}>sneakers</StyledLogo>
            </header>

            <nav>
               <StyledNav>
                  <li>
                     <StyledNavItem to="/home">Home</StyledNavItem>
                  </li>

                  <li>
                     <StyledNavItem to="/men">Men</StyledNavItem>
                  </li>

                  <li>
                     <StyledNavItem to="/women">Women</StyledNavItem>
                  </li>

                  <li>
                     <StyledNavItem to="/about">About</StyledNavItem>
                  </li>

                  <li>
                     <StyledNavItem to="/contact">Contact</StyledNavItem>
                  </li>
               </StyledNav>
            </nav>
         </StyledTitleWrapper>

         <StyledCart>
            <StyledCartItem>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
            </StyledCartItem>

            <StyledCartItem>
               <img src={avatarImg} alt="avatarImg" />
            </StyledCartItem>
         </StyledCart>
         
      </Wrapper>
   );
});

export default NavBar;