import react, { useRef, useState } from 'react'
import ImageSlider from '../../../Components/ImageSlider/ImageSlider';
import { StyledContent, StyledList, StyledListItem, StyledLink, StyledContentWrapper } from "./Content.styles"
import { Element } from 'react-scroll'
import { useSticky } from "../../../hooks/useSticky"
import Highlights from "./Highlights/Highlights"
import Description from "./Description/Description"
import Details from "./Details/Details"

const Content = ({product, loading}) => {
   const [cheatActive, setCheatActive] = useState(false)
   const navRef = useRef(null)

   const { isSticky } = useSticky(navRef.current)

   return (
      <StyledContentWrapper>
         <Element name="gallery">
            <ImageSlider product={product} loading={loading}/>
         </Element>

         <div>
            <nav>
               <StyledList isSticky={isSticky}>
                  <StyledListItem>
                     <StyledLink
                        to="gallery" 
                        smooth={true} 
                        duration={400} 
                        spy={true} 
                        exact={true}
                        cheatActive={cheatActive}
                        onSetInactive={() => setCheatActive(true)}
                     >
                        GALLERY
                     </StyledLink>
                  </StyledListItem>

                  <StyledListItem>
                     <StyledLink 
                        to="highlights"
                        smooth={true}
                        duration={400}
                        spy={true}
                        exact={true}
                        offset={-69}
                        onSetActive={() => setCheatActive(false)}
                     >
                        HIGHLIGHTS
                     </StyledLink>                 
                  </StyledListItem>

                  <StyledListItem>
                     <StyledLink 
                        to="description"
                        smooth={true}
                        duration={400}
                        spy={true}
                        exact={true}
                        offset={-69}
                        onSetActive={() => setCheatActive(false)}
                     >
                        DESCRIPTION
                     </StyledLink>
                  </StyledListItem>

                  <StyledListItem>
                     <StyledLink 
                        to="details"
                        smooth={true}
                        duration={400}
                        spy={true}
                        exact={true}
                        offset={-69}
                        onSetActive={() => setCheatActive(false)}
                     >
                        DETAILS
                     </StyledLink>
                  </StyledListItem>
               </StyledList>
            </nav>
         </div>

         {!isSticky ? <div style={{height: '70px'}}></div> : null}
         
         <StyledContent>
            <Element name="highlights" style={{ position: 'relative' }}>
               <div ref={navRef} style={{ position: 'absolute', top: '-71px', left: 0}}></div>
               <Highlights />
            </Element>

            <Element name="description">
               <Description product={product}  loading={loading}/>
            </Element>

            <Element name="details">
               <Details />
            </Element>
         </StyledContent>
      </StyledContentWrapper>
   );
};

export default Content;