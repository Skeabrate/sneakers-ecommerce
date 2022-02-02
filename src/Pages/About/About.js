import React from 'react';

const About = () => {
   React.useEffect(() => {
      window.scrollTo({ top: 0, left: 0 })
   }, [])
   return (
      <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'white', fontSize: '2rem'}}>
         About us
      </div>
   );
};

export default About;