import React, { useEffect, useRef } from 'react';
import {
   Wrapper,
   StyledHero,
   StyledHeroTitle,
   StyledContent,
   StyledArrow,
   StyledHeroImg,
   StyledBackgroundLeft,
   StyledBackgroundRight,
} from "./About.styles"
import AboutFooter from './AboutFooter/AboutFooter';
import arrowImg from "../../Assets/Images/rotated-right-arrow.png"
import { imgLoad } from '../../helpers/imgLoad';
import gsap from "gsap"

const About = () => {
   const tl = useRef(null)

   const firstTitleRef = useRef(null)
   const secondTitleRef = useRef(null)
   const thirdTitleRef = useRef(null)

   const backgroundLeftRef = useRef(null)
   const backgroundRightRef = useRef(null)

   const wrapperRef = useRef(null)
   const arrowRef = useRef(null)
   
   useEffect(() => {
      window.scrollTo({ top: 0, left: 0 })

      var image = document.createElement('img')
      image.src = imgLoad(wrapperRef.current) 
      image.onload = function() {
         tl.current.play()
      }
   
      tl.current = gsap.timeline({ paused: true })

      if(tl.current) {
         tl.current
            .to(wrapperRef.current, {
               opacity: 1,
               duration: .6,
               scale: 1,
            })
            .to([backgroundLeftRef.current, backgroundRightRef.current], {
               x: 0,
               duration: .6,
            })
            .to([firstTitleRef.current, secondTitleRef.current, thirdTitleRef.current], {
               y: 0,
               duration: .4,
               stagger: .05,
            }, "-=.15s")
            .to(arrowRef.current, {
               x: '140%',
               duration: .6,
            })
      }

   }, [])

   return (
      <Wrapper>
         <StyledHero>
            <StyledHeroImg ref={wrapperRef} />
            <StyledHeroTitle>
               <span ref={firstTitleRef}>About</span> 
               <span ref={secondTitleRef}>Our</span> 
               <span ref={thirdTitleRef}>Company</span>
               <StyledBackgroundLeft ref={backgroundLeftRef} />
               <StyledBackgroundRight ref={backgroundRightRef} />
            </StyledHeroTitle>
            <StyledArrow>
               <img alt="arrow" src={arrowImg} />
               <span ref={arrowRef} />
            </StyledArrow>
         </StyledHero>
         
         <StyledContent>
            {/*  Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis? Earum, qui. Unde error, accusamus quisquam similique magnam tempora dolorem quasi aliquid optio rerum perspiciatis, inventore, necessitatibus fugit dolore saepe praesentium! Quod, iusto veniam. Sapiente rem ab enim nihil? Delectus saepe sint, rerum nam dolorum tenetur nihil possimus modi laborum. */}
         </StyledContent>

         <AboutFooter />
      </Wrapper>
   );
};


export default About;