import React, { useState, useContext } from 'react';
import { useStoreLength } from '../../hooks/useStoreLength';
import { Link, useLocation  } from "react-router-dom"
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
import AuthContext from "../../Context/AuthContext"

const NavBar = ({ isProductPage }) => {
   const [toggle, setToggle] = useState(false)
   const [hideNav, setHideNav] = useState(false)
   const [locationChange, setLocationChange] = useState('')

   const cart = useSelector((state) => state.cart)
   const favorite = useSelector((state) => state.favorite)

   const cartLength = useStoreLength(cart)
   const favoriteLength = useStoreLength(favorite)
   
   const { isAuthenticated } = useContext(AuthContext)
   
   const location = useLocation()

   const toggleMenu = () => setToggle(!toggle)

   React.useEffect(() => {
      const abortController = new AbortController();
      const { signal } = abortController;

      var lastScrollTop = 0

      window.addEventListener("scroll", function(){ 
         var st = window.pageYOffset || document.documentElement.scrollTop; 
         if (st > lastScrollTop){
            if(lastScrollTop > 40) {
               setHideNav(true)
               setToggle(false)
            }
         } else setHideNav(false)

         lastScrollTop = st <= 0 ? 0 : st;
      }, {signal: signal});

      return () => abortController.abort()
   }, [])

   React.useEffect(() => {
      setLocationChange(location.pathname)
      if(location.pathname !== locationChange) setToggle(false)
   }, [location.pathname])

   if(location.pathname === `/`) return null

   return (
      <Wrapper isProductPage={isProductPage} hideNav={hideNav}>
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

            <StyledNav isToggled={toggle}>
               <li>
                  <StyledNavItem isFirst isToggled={toggle} to="/AllProducts">Home</StyledNavItem>
               </li>

               <li>
                  <StyledNavItem isSecond isToggled={toggle} to="/about">About</StyledNavItem>
               </li>

               <li>
                  <StyledNavItem isToggled={toggle} to="/contact">Contact</StyledNavItem>
               </li>

               <li>
                  <StyledBackButton onClick={toggleMenu}></StyledBackButton>
               </li>
            </StyledNav>
            
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

            <StyledCartItem as={Link} to="/cart" title="cart">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/></svg>
               {cartLength ? <span>{cartLength}</span> : null}  
            </StyledCartItem>

            <StyledCartProfile profileImg={isAuthenticated && isAuthenticated.image}>
               {isAuthenticated && isAuthenticated.image ? (
                  <Link to="/profile" title="Profile">
                     <img src={isAuthenticated.image} alt={isAuthenticated.email} />
                  </Link>
               ) : (
                  <Link to="/login" title="Log in">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c2.757 0 5 2.243 5 5.001 0 2.756-2.243 5-5 5s-5-2.244-5-5c0-2.758 2.243-5.001 5-5.001zm0-2c-3.866 0-7 3.134-7 7.001 0 3.865 3.134 7 7 7s7-3.135 7-7c0-3.867-3.134-7.001-7-7.001zm6.369 13.353c-.497.498-1.057.931-1.658 1.302 2.872 1.874 4.378 5.083 4.972 7.346h-19.387c.572-2.29 2.058-5.503 4.973-7.358-.603-.374-1.162-.811-1.658-1.312-4.258 3.072-5.611 8.506-5.611 10.669h24c0-2.142-1.44-7.557-5.631-10.647z"/></svg>
                  </Link>
               )}
            </StyledCartProfile>
         </StyledCart>
      </Wrapper>
   );
};

export default NavBar;