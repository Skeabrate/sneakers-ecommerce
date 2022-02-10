import React, { useEffect } from 'react';
import { StyledTitle } from "../../../../GlobalStyledComponents/StyledTitle"
import { StyledTitleOrnament } from "../../../../GlobalStyledComponents/StyledTitleOrnament"
import {
    Wrapper,
} from "./ThirdSection.styles"

const ThirdSection = () => {

    useEffect(() => {
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
            <header>
                <StyledTitle>
                    our products
                    <StyledTitleOrnament />
                </StyledTitle>
            </header>
        </Wrapper>
    );
};

export default ThirdSection;