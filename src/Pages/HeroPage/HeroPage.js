import React, { useEffect, useRef } from 'react';
import { Wrapper, StyledHeroImage, StyledTitleWrapper, StyledTitle, StyledButton } from "./HeroPage.styles"
import heroImg from "../../Assets/Images/heroPageImg.png"
import gsap from "gsap"
import { imgLoad } from "../../helpers/imgLoad"
import { useNavigate } from 'react-router-dom';

const HeroPage = () => {
   let navigate = useNavigate()

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

   useEffect(() => {
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
               duration: .8,
            })
            .to(textBackgroundRef.current, {
               opacity: 0.4,
               duration: .6,
            })
            .to(titleWrapperRef.current, {
               duration: .6,
            }, "-=1.6s")
            .to([textRef1.current, textRef2.current], {
               y: 0,
               duration: .5,
               stagger: .1,
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
               duration: 1.2,
            })
      }
   }, [])

   const handleChangeScene = () => {
      t2.current.play()
      setTimeout(() => {
         navigate("/AllProducts")
      }, 1000)
   }

   return (
      <>
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
      </>
   )
}


export default HeroPage