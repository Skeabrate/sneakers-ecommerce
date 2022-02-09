import { useEffect, useRef } from 'react';
import {
    Wrapper,
    StyledGridContainer,
    StyledUpBigImg,
    StyledUpSmallImg,
    StyledRightImg,
    StyledDownBigImg,
    StyledDownSmallImg,
    StyledLeftImg,
} from "./SecondSection.styles"
import gsap from "gsap"

const SecondSection = () => {
    const containerRef = useRef(null)
    const gridRef = useRef(null)

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 1000px)')

        if (!mediaQuery.matches) {
            gsap
                .timeline({
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top top",
                        end: () => window.innerHeight * 3,
                        scrub: true,
                        pin: gridRef.current,
                        anticipatePin: 1
                    }
                })
                .from(gridRef.current, {
                    scale: 1,
                    ease: "none",
                });
        }
    }, [])

    return (
        <Wrapper ref={containerRef}>
            <StyledGridContainer ref={gridRef}>
                <StyledUpBigImg />
                <StyledUpSmallImg />

                <StyledRightImg />

                <StyledDownBigImg />
                <StyledDownSmallImg />

                <StyledLeftImg />
            </StyledGridContainer>
        </Wrapper>
    );
};

export default SecondSection;