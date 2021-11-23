import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, StyledHeroImage, StyledTitleWrapper, StyledTitle, StyledButton } from "./HeroPage.styles"
import heroImg from "../../Assets/Images/heroPageImg.png"
import gsap from "gsap"

import MainView from '../MainView/MainView';
import { useData } from '../../helpers/useData';
import ProductsContext from '../../Context/productsContext';
import { imgLoad } from "../../helpers/imgLoad"

const HeroPage = () => {
   const { products } = useData()
   const [displayView, setDisplayView] = useState(false)

   const t1 = useRef(null)
   const t2 = useRef(null)

   const heroWrapperRef = useRef(null)
   const heroRef = useRef(null)
   const titleWrapperRef = useRef(null)
   const textRef1 = useRef(null)
   const textRef2 = useRef(null)
   const textBackgroundRef = useRef(null)
   const btnRef = useRef(null)
   const btnSpanRef = useRef(null)

   const mainViewRef = useRef(null)

   useEffect(() => {
      // Check if hero image is loaded, if true
      var image = document.createElement('img')
      image.src = imgLoad(heroRef.current) 
      image.onload = function() {
         t1.current.play()
      }

      t1.current = gsap.timeline({ paused: true })
      t2.current = gsap.timeline({ paused: true })

      if(t1.current) {
         t1.current
            .to(heroRef.current, {
               opacity: 1,
               scale: 1,
               duration: 1.1,
            })
            .to(textBackgroundRef.current, {
               opacity: 0.3,
               duration: .2,
            })
            .to(titleWrapperRef.current, {
               boxShadow: '0px 0px 100px -25px rgba(0, 0, 0, 1)',
               duration: .2,
            }, "-=.2s")
            .to([textRef1.current, textRef2.current], {
               y: 0,
               duration: .5,
               stagger: .2,
            }, "-=.4s")
            .to(btnRef.current, {
               scale: 1,
               duration: .4,
            })
      }

      if(t2.current){
         t2.current
            .to(btnSpanRef.current, {
               scale: 20,
               duration: 0.9,
            })
            .to(btnRef.current, {
               color: '#151515',
               duration: .2,
            }, "-=.3")
            .set(mainViewRef.current, {
               onComplete: () => {
                  setDisplayView(true)
               }
            }, "+=.2")
            .set(heroWrapperRef.current, {
               display: 'none',
            })
      }
      
   }, [])

   const handleChangeScene = () => t2.current.play()
   const handleGoBack = () => {
      t2.current.reverse()
      setDisplayView(!displayView)
   }

   return (
      <ProductsContext.Provider value={{
         products: products,
      }}>
         <Wrapper ref={heroWrapperRef}>
            <StyledHeroImage ref={heroRef} hero={heroImg}>
               <StyledTitleWrapper ref={titleWrapperRef}>
                  <StyledTitle><span ref={textRef1}>Sneakers</span></StyledTitle>
                  <StyledTitle><span ref={textRef2}>Journey</span></StyledTitle>
                  <div ref={textBackgroundRef}></div>
               </StyledTitleWrapper>

               <StyledButton ref={btnRef} onClick={handleChangeScene}>
                  Discover
                  <span ref={btnSpanRef}></span>
               </StyledButton>
            </StyledHeroImage>
         </Wrapper>

         {displayView ? (
            <MainView ref={mainViewRef} handleGoBack={handleGoBack}/>
         ) : null}

      </ProductsContext.Provider>
   )
}


export default HeroPage