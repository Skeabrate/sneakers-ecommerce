import React, { useEffect } from 'react';
import {
   Wrapper,
} from "./About.styles"

import AboutHero from './AboutHero/AboutHero';
import AboutContent from './AboutContent/AboutContent';
import AboutFooter from './AboutFooter/AboutFooter';

const About = () => {
   
   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 })
   }, [])

   return (
      <Wrapper>
         <AboutHero />
         
         <AboutContent />

         <AboutFooter />
      </Wrapper>
   );
};


export default About;