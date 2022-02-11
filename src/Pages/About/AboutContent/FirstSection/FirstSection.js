import { useRef, useEffect } from 'react';
import { StyledTitle } from "../../../../GlobalStyledComponents/StyledTitle"
import imgOne from "../../../../Assets/Images/About/aboutContent1.jpg"
import { StyledLink } from "../../../../GlobalStyledComponents/StyledLink"
import gsap from "gsap"
import { useImgLoad } from "../../../../hooks/useImgLoad"
import {
    Wrapper,
    StyledContentWrapper,
    StyledArticle,
    StyledLeftOrnament,
    StyledRightOrnament,
    StyledImg
} from "./FirstSection.styles"

const FirstSection = () => {
    const contentRef = useRef(null)
    const leftOrnUpRef = useRef(null)
    const leftOrnDownRef = useRef(null)

    const imgRef = useRef(null)
    const rightOrnUpRef = useRef(null)
    const rightOrnDownRef = useRef(null)

    const imgLoadRef = useRef(null)
    const { handleLoadImg } = useImgLoad(imgLoadRef.current)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 750px)')

        if (!mediaQuery.matches) {
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
    }, [])
    
    return (
        <Wrapper>
            <header>
                <StyledTitle>
                    About our company
                </StyledTitle>
            </header>

            <StyledContentWrapper>
                <StyledArticle ref={contentRef}>
                    <header>
                        <h2>Lorem ipsum dolor sit!</h2>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis? Earum, qui. Unde error, accusamus quisquam similique magnam tempora dolorem.
                    </p>
                    <StyledLink as="button">Read More</StyledLink>

                    <StyledLeftOrnament>
                        <span ref={leftOrnUpRef} />
                        <div ref={leftOrnDownRef} />
                    </StyledLeftOrnament>
                </StyledArticle>

                <StyledImg ref={imgRef}>
                    <img 
                        alt="aboutus" 
                        src={imgOne}
                        ref={imgLoadRef}
                        onLoad={handleLoadImg}
                        width="1600" 
                        height="1066" 
                    />

                    <StyledRightOrnament>
                        <span ref={rightOrnUpRef} />
                        <div ref={rightOrnDownRef} />
                    </StyledRightOrnament>
                </StyledImg>
            </StyledContentWrapper>
        </Wrapper>
    );
};

export default FirstSection;