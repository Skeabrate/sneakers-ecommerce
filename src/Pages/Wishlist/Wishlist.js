import React, { useRef, useContext } from 'react';
import { useSelector } from 'react-redux';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { useStoreLength } from '../../hooks/useStoreLength'
import gsap from "gsap"
import {
   StyledError,
   StyledLoginWrapper,
   StyledLoginTitle,
   StyledLoginContent
} from "./Wishlist.styles"
import { Wrapper } from '../../GlobalStyledComponents/Wrapper';
import { StyledContent } from "../../GlobalStyledComponents/StyledContent"
import { StyledTitle } from "../../GlobalStyledComponents/StyledTitle"
import { StyledLink } from "../../GlobalStyledComponents/StyledAccountButton"
import ModalsContext from '../../Context/ModalsContext';
import AuthContext from "../../Context/AuthContext"
import { StyledLinkToHome } from '../../GlobalStyledComponents/StyledLinkToHome';

const Wishlist = () => {
   const favorite = useSelector((state) => state.favorite)
   const length = useStoreLength(favorite)

   const { setIsRegisterOpen } = useContext(ModalsContext)
   const { isAuthenticated } = useContext(AuthContext)

   const tl = useRef(null)
   const contentRef = useRef(null)
   const contentLengthRef = useRef(null)

   React.useEffect(() => {
      tl.current = gsap.timeline()

      if(tl.current){
         tl.current
            .to(contentRef.current, {
               opacity: 1,
               duration: .6,
            }, "+=0.2s")
            .to(contentLengthRef.current, {
               opacity: 1,
               duration: .6,
            }, "-=0.6s")
      }
   }, [])

   return (
      <Wrapper>
         <header>
            <StyledTitle>
               MY WISH LIST
               <span ref={contentLengthRef}>[ {length} ]</span>
               <StyledLinkToHome label="GO BACK SHOPPING" title="all products" path="AllProducts" isHeader isWhite />
            </StyledTitle>
         </header>

         <article>
            <StyledContent ref={contentRef}>
               {length ? (
                  <>
                     {favorite.map(({id, title, price, image}) => (
                        <ProductItem
                           key={id}
                           id={id}
                           image={image}
                           title={title}
                           price={price}
                        />
                     ))}
                  </>
               ) : (
                  <StyledError>There are no products in your wishlist yet. Start buying and add what you like to your wish list.</StyledError>
               )}
               
               {!isAuthenticated && (
                  <StyledLoginWrapper length={length}>
                     <StyledLoginTitle>DON'T LOSE YOUR WISH LIST</StyledLoginTitle>
                     <StyledLoginContent>
                        <div>
                           <p>Join the Sneakers Club today and get 15% off your first order. Or log in to save your wish list.</p>
                           <StyledLink as="button" onClick={() => setIsRegisterOpen(true)}>Register</StyledLink>
                        </div>

                        <div>
                           <p>Are you a member of the Sneakers Club?</p>
                           <StyledLink to="/login">Log in</StyledLink>
                        </div>
                     </StyledLoginContent>
                  </StyledLoginWrapper>
               )}
            </StyledContent>
         </article>
      </Wrapper>
   );
};

export default Wishlist;