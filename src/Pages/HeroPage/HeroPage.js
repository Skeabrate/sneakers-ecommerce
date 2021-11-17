import React, { useEffect, useRef, useState } from 'react';
import { Wrapper, StyledHeroImage, StyledTitleWrapper, StyledTitle, StyledButton } from "./HeroPage.styles"
import heroImg from "../../Assets/Images/heroPageImg.png"
import gsap from "gsap"

import MainView from '../MainView/MainView';

const HeroPage = () => {
   const t1 = useRef(null)
   const t2 = useRef(null)

   const heroWrapperRef = useRef(null)
   const heroRef = useRef(null)
   const textRef1 = useRef(null)
   const textRef2 = useRef(null)
   const btnRef = useRef(null)
   const btnSpanRef = useRef(null)

   const mainViewRef = useRef(null)

   useEffect(() => {
      t1.current = gsap.timeline()
      t2.current = gsap.timeline({ paused: true })

      if(t1.current) {
         t1.current
            .to(heroRef.current, {
               opacity: 1,
               scale: 1,
               duration: 1.1,
            })
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
            .set(btnSpanRef.current, {
               background: '#151515',
            })
            .set(btnRef.current,{
               color: '#e2e2e2',
            })
            .to(btnSpanRef.current, {
               scale: 20,
               duration: 0.7,
            })
            .to(btnRef.current, {
               color: '#151515',
               duration: .2,
            }, "-=.3")
            .set(mainViewRef.current, {
               display: 'block',
            }, "+=.2")
            .set(heroWrapperRef.current, {
               display: 'none',
            })
      }
   }, [])

   const handleChangeScene = () => {
      t2.current.play()
   }

   return (
      <div>
         <Wrapper ref={heroWrapperRef}>
            <StyledHeroImage ref={heroRef} hero={heroImg}>
               <StyledTitleWrapper>
                  <StyledTitle><span ref={textRef1}>Sneakers</span></StyledTitle>
                  <StyledTitle><span ref={textRef2}>Journey</span></StyledTitle>
               </StyledTitleWrapper>

               <StyledButton ref={btnRef} onClick={handleChangeScene}>
                  Discover
                  <span ref={btnSpanRef}></span>
               </StyledButton>
            </StyledHeroImage>
         </Wrapper>

         <MainView ref={mainViewRef}/>
      </div>
   )
}


export default HeroPage