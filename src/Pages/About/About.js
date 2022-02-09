import React, { useEffect } from 'react';
import {
   Wrapper,
} from "./About.styles"

import AboutHero from './AboutHero/AboutHero';
import AboutContent from './AboutContent/AboutContent';
import AboutFooter from './AboutFooter/AboutFooter';
import { Element } from "react-scroll"
import Helmet from "../../helpers/Helmet"

const About = () => {
   
   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 })
   }, [])

   return (
      <Wrapper>
         <Helmet title="Sneakers Journey - About Us" />

         <AboutHero />

         <Element name="content">
            <AboutContent />
         </Element>

         <AboutFooter />
      </Wrapper>
   );
};


export default About;