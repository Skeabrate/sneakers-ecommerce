import React from 'react';
import {
   Wrapper,
   StyledHero,
   StyledHeroTitle,
   StyledContent,
   StyledArrow
} from "./About.styles"
import AboutFooter from './AboutFooter/AboutFooter';
import arrowImg from "../../Assets/Images/rotated-right-arrow (1).png"

const About = () => {
   
   React.useEffect(() => {
      window.scrollTo({ top: 0, left: 0 })
   }, [])

   return (
      <Wrapper>
         <StyledHero>
            <StyledHeroTitle>
               About Our Company
            </StyledHeroTitle>
            <StyledArrow>
               <img alt="arrow" src={arrowImg} />
            </StyledArrow>
         </StyledHero>
         
         <StyledContent>
            {/*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis? Earum, qui. Unde error, accusamus quisquam similique magnam tempora dolorem quasi aliquid optio rerum perspiciatis, inventore, necessitatibus fugit dolore saepe praesentium! Quod, iusto veniam. Sapiente rem ab enim nihil? Delectus saepe sint, rerum nam dolorum tenetur nihil possimus modi laborum. */}
         </StyledContent>

         <AboutFooter />
      </Wrapper>
   );
};


export default About;