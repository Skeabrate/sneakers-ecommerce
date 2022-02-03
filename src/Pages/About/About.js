import React from 'react';
import {
   Wrapper,
} from "./About.styles"

const About = () => {
   
   React.useEffect(() => {
      window.scrollTo({ top: 0, left: 0 })
   }, [])

   return (
      <Wrapper>
         About us
      </Wrapper>
   );
};

export default About;