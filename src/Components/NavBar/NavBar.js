import React, { useState, useContext } from 'react';
import avatarImg from "../../Assets/Images/image-avatar.png"
import { useStoreLenght } from '../../hooks/useStoreLenght';
import { OpenCartContext } from '../../Context/openCartContext';
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import { 
   StyledHamburger, 
   StyledHamburgerWrapper, 
   StyledHamburgerInner 
} from "./Hamburger.styles"
import { 
   Wrapper, 
   StyledNav, 
   StyledLogo, 
   StyledTitleWrapper, 
   StyledTitle, 
   StyledNavItem, 
   StyledCart, 
   StyledCartItem,
   StyledCartProfile,
   StyledBackButton
} from "./NavBar.styles"

const NavBar = ({ isProductPage }) => {
   const [toggle, setToggle] = useState(false)

   const cart = useSelector((state) => state.cart)
   const favorite = useSelector((state) => state.favorite)

   const cartLength = useStoreLenght(cart)
   const favoriteLength = useStoreLenght(favorite)

   const { setIsCartOpen } = useContext(OpenCartContext)

   const toggleMenu = () => setToggle(!toggle)

   return (
      <Wrapper isProductPage={isProductPage}>
         <StyledTitleWrapper>

            <StyledTitle>
               <StyledHamburger onClick={toggleMenu}>
                  <StyledHamburgerWrapper>
                     <StyledHamburgerInner isToggled={toggle}></StyledHamburgerInner>
                  </StyledHamburgerWrapper>
               </StyledHamburger>

               <header>
                  <StyledLogo to="/">sneakers</StyledLogo>
               </header>
            </StyledTitle>

            <nav>
               <StyledNav isToggled={toggle}>
                  <li>
                     <StyledNavItem isFirst isToggled={toggle} exact to="/AllProducts" onClick={toggleMenu}>Home</StyledNavItem>
                  </li>

                  <li>
                     <StyledNavItem isSecond isToggled={toggle} to="/about" onClick={toggleMenu}>About</StyledNavItem>
                  </li>

                  <li>
                     <StyledNavItem isToggled={toggle} to="/contact" onClick={toggleMenu}>Contact</StyledNavItem>
                  </li>

                  <li>
                     <StyledBackButton onClick={toggleMenu}></StyledBackButton>
                  </li>
               </StyledNav>
            </nav>
         </StyledTitleWrapper>

         <StyledCart>
            <StyledCartItem as={Link} to="/wishlist" title="favorite">
               {favoriteLength ? (
                  <>
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"/></svg>
                     <span>{favoriteLength}</span> 
                  </>
               ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M17.867 3.493l4.133 3.444v5.127l-10 8.333-10-8.334v-5.126l4.133-3.444 5.867 3.911 5.867-3.911zm.133-2.493l-6 4-6-4-6 5v7l12 10 12-10v-7l-6-5z"/></svg>
               )} 
            </StyledCartItem>

            <StyledCartItem title="cart" onClick={() => setIsCartOpen(true)}>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
               {cartLength ? <span>{cartLength}</span> : null}  
            </StyledCartItem>

            <StyledCartProfile>
               <img src={avatarImg} alt="avatarImg" />
            </StyledCartProfile>
         </StyledCart>
      </Wrapper>
   );
};

export default NavBar;