import React, { useRef, useEffect } from 'react';
import { StyledTitle } from "../../../GlobalStyledComponents/StyledTitle"
import { StyledTitleOrnament } from "../../../GlobalStyledComponents/StyledTitleOrnament"
import imgOne from "../../../Assets/Images/aboutContent2.jpg"
import {
    Wrapper,
    StyledContentWrapper,
    StyledContent,
    StyledLeftOrnament,
    StyledRightOrnament,
    StyledImg
} from "./AboutContent.styles"
import { StyledLink } from "../../../GlobalStyledComponents/StyledLink"
import gsap from "gsap"

const AboutContent = () => {

    const contentRef = useRef(null)
    const leftOrnUpRef = useRef(null)
    const leftOrnDownRef = useRef(null)

    const imgRef = useRef(null)
    const rightOrnUpRef = useRef(null)
    const rightOrnDownRef = useRef(null)
    

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 750px)')

        if(!mediaQuery.matches){
            gsap.fromTo(contentRef.current, {
                x: '-=10%',
                autoAlpha: 0,
            }, {
                x: '0',
                autoAlpha: 1,
                duration: 1,
                ease: 'power3',
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top center',
                }
            })
    
            gsap.fromTo([leftOrnUpRef.current, leftOrnDownRef.current], {
                x: '0',
                y: '0',
            }, {
                x: '-30px',
                y: '30px',
                delay: .6,
                duration: .5,
                ease: 'power3',
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top center',
                }
            })

            gsap.fromTo([rightOrnUpRef.current, rightOrnDownRef.current], {
                x: '0',
                y: '0',
            }, {
                x: '30px',
                y: '-30px',
                delay: .6,
                duration: .5,
                ease: 'power3',
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: 'top center',
                }
            })
        }


        /* gsap.to(contentRef.current, {
            yPercent: -100,
            ease: "none",
            scrollTrigger: {
              trigger: imgRef.current,
              // start: "top bottom", // the default values
              // end: "bottom top",
              scrub: true
            }, 
          }); */
    }, [])

    return (
        <Wrapper>
            <section>
                <header>
                    <StyledTitle>
                        <StyledTitleOrnament />
                        About our company
                    </StyledTitle>
                </header>
                
                <StyledContentWrapper>
                    <StyledContent ref={contentRef}>
                        <h2>Lorem ipsum dolor sit!</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis? Earum, qui. Unde error, accusamus quisquam similique magnam tempora dolorem.
                        </p>
                        <StyledLink as="button">Read More</StyledLink>
                        <StyledLeftOrnament>
                            <span ref={leftOrnUpRef} />
                            <div ref={leftOrnDownRef} />
                        </StyledLeftOrnament>
                    </StyledContent>

                    <StyledImg ref={imgRef}>
                        <img alt="aboutus" src={imgOne} />
                        <StyledRightOrnament>
                            <span ref={rightOrnUpRef} />
                            <div ref={rightOrnDownRef} />
                        </StyledRightOrnament>
                    </StyledImg>
                </StyledContentWrapper>
            </section>
        </Wrapper>
    );
};

export default AboutContent;