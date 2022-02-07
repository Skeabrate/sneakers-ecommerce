import React, { useRef, useEffect } from 'react';
import arrowImg from "../../../Assets/Images/rotated-right-arrow.png"
import { imgLoad } from '../../../helpers/imgLoad';
import {
    Wrapper,
    StyledHeroTitle,
    StyledArrow,
    StyledHeroImg,
    StyledBackgroundLeft,
    StyledBackgroundRight,
} from "./AboutHero.styles"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const AboutHero = () => {
    const tl = useRef(null)

    const titleRef = useRef(null)
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
                    opacity: 1,
                    duration: .4,
                    stagger: .05,
                }, "-=.15s")
                .to(arrowRef.current, {
                    opacity: 0.8,
                    duration: .6,
                })
        }

        if(wrapperRef.current){
            wrapperRef.current.style.backgroundPosition = "50% 0px"; 

            gsap.to(wrapperRef.current, {
                backgroundPosition: `50% ${window.innerHeight / 2}px`,
                ease: "none",
                scrollTrigger: {
                  trigger: wrapperRef.current,
                  start: "top top", 
                  end: "bottom",
                  scrub: true
                }
              })
        }

        /*  gsap.to(titleRef.current, {
            letterSpacing: '20px',
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top',
                scrub: 1,
            }
        }) */

        /* gsap.to(wrapperRef.current, {
            opacity: 0,
            scrollTrigger: {
                trigger: wrapperRef.current,
                start: 'top',
                scrub: 1,
            }
        }) */
    }, [])

    return (
        <Wrapper>
            <StyledHeroImg ref={wrapperRef} />

            <StyledHeroTitle ref={titleRef}>
                <span ref={firstTitleRef}>About</span> 
                <span ref={secondTitleRef}>Our</span> 
                <span ref={thirdTitleRef}>Company</span>
                <StyledBackgroundLeft ref={backgroundLeftRef} />
                <StyledBackgroundRight ref={backgroundRightRef} />
            </StyledHeroTitle>

            <StyledArrow 
                to="content"
                smooth={true}
                duration={800}
                spy={true}
                exact={true}
            >
                <img alt="arrow" src={arrowImg} ref={arrowRef} />
            </StyledArrow>
        </Wrapper>
    );
};

export default AboutHero;