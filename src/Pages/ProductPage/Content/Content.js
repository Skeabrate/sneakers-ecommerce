import react, { useState, useEffect } from 'react'
import ImageSlider from '../../../Components/ImageSlider/ImageSlider';
import { StyledContent, StyledList, StyledListItem, StyledLink } from "./Content.styles"
import { Element, animateScroll as scroll } from 'react-scroll'

const Content = ({product, loading}) => {
   const [isSticky, setIsSticky] = useState()


   return (
      <StyledContent>
         <Element name="gallery">
            <ImageSlider product={product} loading={loading}/>
         </Element>

         <div>
            <nav>
               <StyledList>
                  <StyledListItem>
                     <StyledLink to="gallery" smooth={true} duration={500} spy={true} exact={true} offset={-80}>GALLERY</StyledLink>
                  </StyledListItem>

                  <StyledListItem>
                     <StyledLink to="highlights" smooth={true} duration={500} spy={true} exact={true} offset={-150}>HIGHLIGHTS</StyledLink>                 
                  </StyledListItem>

                  <StyledListItem>
                     <StyledLink to="description" smooth={true} duration={500} spy={true} exact={true} offset={-70}>DESCRIPTION</StyledLink>
                  </StyledListItem>

                  <StyledListItem>
                     <StyledLink to="details" smooth={true} duration={500} spy={true} exact={true} offset={-70}>DETAILS</StyledLink>
                  </StyledListItem>
               </StyledList>
            </nav>
         </div>

         <Element name="highlights" style={{height: '100vh'}}>
            Highlights
         </Element>

         <Element name="description" style={{height: '100vh'}}>
            Description
         </Element>

         <Element name="details" style={{height: '100vh'}}>
            Details
         </Element>
      </StyledContent>
   );
};

export default Content;