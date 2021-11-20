import React, { useEffect, useRef, useState } from 'react';
import { Wrapper } from "./MainView.styles"
import NavBar from '../../Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';

import AllProducts from '../AllProducts/AllProducts';
import Contact from '../Contact/Contact';
import About from "../About/About"
import WomenProducts from "../WomenProducts/WomenProducts"
import MenProducts from "../MenProducts/MenProducts"

const MainView = React.forwardRef(({ handleGoBack }, mainViewRef) => {
   const [contentAnimation, setContentAnimation] = useState()

   const t1 = useRef(null)
   const navBarRef = useRef(null)
   
   const goBack = async () => {
      const promise1 = () => {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
               t1.current.reverse()
            }, 400)
            
            if(contentAnimation) contentAnimation.reverse() 
            
            resolve()
         })
      }

      const promise2 = () => {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
               handleGoBack()
               resolve()
            }, 1100)
         })
      }

      promise1()
         .then(promise2)   
   }

   useEffect(() => {
      t1.current = gsap.timeline()

      if(t1.current) {
         t1.current
            .to(navBarRef.current, {
               y: 0,
               duration: .4,
            })
      }
      /* const womenData = data.filter(item => item.category.includes('Women')) */

   }, [])

   return (
      <Router>
         <Wrapper ref={mainViewRef}>
            <NavBar ref={navBarRef} goBack={goBack} />
            
            <Routes>
               <Route path="/contact" element={<Contact />} />

               <Route path="/men" element={<MenProducts />}/>

               <Route path="/women" element={<WomenProducts />}/>

               <Route path="/about" element={<About />}/>

               <Route exact path="/" element={<AllProducts setContentAnimation={setContentAnimation} />}/>
            </Routes>
            
         </Wrapper>
      </Router>
   );
});

export default MainView;