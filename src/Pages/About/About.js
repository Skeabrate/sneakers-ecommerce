import React, { useEffect } from 'react';
import AboutHero from './AboutHero/AboutHero';
import AboutContent from './AboutContent/AboutContent';
import { Element } from "react-scroll"
import Helmet from "../../helpers/Helmet"

const About = () => {
   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 })
   }, [])

   return (
      <div>
         <Helmet title="Sneakers Journey - About Us" />

         <AboutHero />

         <Element name="content">
            <AboutContent />
         </Element>
      </div>
   );
};


export default About;