import { useRef, useEffect, useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {
    Wrapper,
    StyledSlide,
    SlideContainer,
    StyledBtnPrev,
    StyledBtnNext,
} from "./NewImageSlider.styles"
import { imgLoad } from '../../helpers/imgLoad';
import gsap from "gsap"

const NewImageSlider = ({ product, loading }) => {
    const tl = useRef(null)
    const imgRef = useRef(null)
    const imgContRef = useRef(null)

    const props = {
        autoplay: false,
        transitionDuration: 400,
        indicators: true,
        prevArrow: <StyledBtnPrev><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></StyledBtnPrev>,
        nextArrow: <StyledBtnNext><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></StyledBtnNext>,
    }

    useEffect(() => {
        var image = document.createElement('img')
        if(loading && imgRef.current){
            image.src = imgLoad(imgRef.current)
            image.onload = function() {
                tl.current.play() 
            }
        }
        
        tl.current = gsap.timeline({ paused: true })
        if(tl.current) {
            tl.current
                .to(imgContRef.current, {
                    opacity: 1,
                    duration: .8,
                })
        }
        
    }, [loading])

    return (
        <Wrapper>
            <SlideContainer ref={imgContRef}>
                <Slide {...props}>
                    {loading && product.images.map(({ url }, index) => (
                        <div key={index}>
                            <StyledSlide url={url} ref={!index ? imgRef : null} />
                        </div>
                    ))} 
                </Slide>
            </SlideContainer>
        </Wrapper>
    );
};

export default NewImageSlider;