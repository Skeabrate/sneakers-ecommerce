import React, { useState } from 'react';
import { Wrapper } from "./MainView.styles"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProducts from '../AllProducts/AllProducts';
import Contact from '../Contact/Contact';
import About from "../About/About"
import WomenProducts from "../WomenProducts/WomenProducts"
import MenProducts from "../MenProducts/MenProducts"
import HeroPage from '../HeroPage/HeroPage';
import NavBar from '../../Components/NavBar/NavBar';

const MainView = React.forwardRef((props, mainViewRef) => {
   const [isHero, setIsHero] = useState(false)
   return (
      <Router>
         <Wrapper ref={mainViewRef}>
            {isHero ? null : <NavBar />}
            
            <Routes>
               <Route path="/contact" element={<Contact />} />

               <Route path="/men" element={<MenProducts />}/>

               <Route path="/women" element={<WomenProducts />}/>

               <Route path="/about" element={<About />}/>

               <Route path="/AllProducts" element={<AllProducts />}/>

               <Route exact path="/" element={<HeroPage setIsHero={setIsHero}/>} />
            </Routes>
            
         </Wrapper>
      </Router>
   );
});

export default MainView;