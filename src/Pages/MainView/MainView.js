import React, { useEffect, useRef } from 'react';
import { Wrapper } from "./MainView.styles"
import NavBar from '../../Components/NavBar/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import gsap from 'gsap';

import AllProducts from '../AllProducts/AllProducts';
import Contact from '../Contact/Contact';



const MainView = React.forwardRef((props, mainViewRef) => {

   const tl = useRef(null)

   const navBarRef = useRef(null)

   const goBack = async () => {

      const promise1 = () => {
         return new Promise((resolve, reject) => {
            tl.current.reverse()
            resolve()
         })
      }

      const promise2 = () => {
         return new Promise((resolve, reject) => {
            setTimeout(() => {
               props.handleGoBack()
               resolve()
            }, 1000)
         })
      }

      promise1()
         .then(promise2)   
   }

   useEffect(() => {
      tl.current = gsap.timeline()

      if(tl.current) {
         tl.current
            .to(navBarRef.current, {
               y: 0,
               duration: .4,
            })
      }
   }, [])

   return (
      <Router>
         <Wrapper ref={mainViewRef}>
            <NavBar ref={navBarRef} handleGoBack={goBack}/>
            
            <Routes>
               <Route path="/home" element={<AllProducts />}/>

               <Route path="/contact" element={<Contact />} />
            </Routes>
            
         </Wrapper>
      </Router>
   );
});

export default MainView;