import React, { useRef, useEffect } from 'react';
import arrowImg from "../../../Assets/Images/rotated-right-arrow.png"
import { imgLoad } from '../../../helpers/imgLoad';
import gsap from "gsap"
import {
    Wrapper,
    StyledHeroTitle,
    StyledArrow,
    StyledHeroImg,
    StyledBackgroundLeft,
    StyledBackgroundRight,
} from "./AboutHero.styles"

const AboutHero = () => {
    const tl = useRef(null)

   const firstTitleRef = useRef(null)
   const secondTitleRef = useRef(null)
   const thirdTitleRef = useRef(null)

   const backgroundLeftRef = useRef(null)
   const backgroundRightRef = useRef(null)

   const wrapperRef = useRef(null)
   const arrowRef = useRef(null)
   
    useEffect(() => {
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
                    opacity: .4,
                    duration: .6,
                })
                .to([firstTitleRef.current, secondTitleRef.current, thirdTitleRef.current], {
                    y: 0,
                    duration: .4,
                    stagger: .05,
                }, "-=.15s")
                .to(arrowRef.current, {
                    opacity: 1,
                    duration: .6,
                })
        }
    }, [])

    return (
        <Wrapper>
            <StyledHeroImg ref={wrapperRef} />

            <StyledHeroTitle>
                <span ref={firstTitleRef}>About</span> 
                <span ref={secondTitleRef}>Our</span> 
                <span ref={thirdTitleRef}>Company</span>
                <StyledBackgroundLeft ref={backgroundLeftRef} />
                <StyledBackgroundRight ref={backgroundRightRef} />
            </StyledHeroTitle>

            <StyledArrow ref={arrowRef}>
                <img alt="arrow" src={arrowImg} />
            </StyledArrow>
        </Wrapper>
    );
};

export default AboutHero;