import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import {
    Wrapper,
    StyledSlide,
    SlideContainer,
    StyledBtnPrev,
    StyledBtnNext,
} from "./NewImageSlider.styles"

const NewImageSlider = ({ product, loading }) => {
    const props = {
        autoplay: false,
        transitionDuration: 400,
        indicators: true,
        prevArrow: <StyledBtnPrev><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></StyledBtnPrev>,
        nextArrow: <StyledBtnNext><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></StyledBtnNext>
    }

    return (
        <Wrapper>
            <SlideContainer>
                <Slide {...props}>
                    {loading && product.images.map(({ url }, index) => (
                        <div key={index}>
                            <StyledSlide url={url} />
                        </div>
                    ))} 
                </Slide>
            </SlideContainer>
        </Wrapper>
    );
};

export default NewImageSlider;