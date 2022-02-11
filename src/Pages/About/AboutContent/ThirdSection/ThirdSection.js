import React, { useEffect } from 'react';
import { StyledTitle } from "../../../../GlobalStyledComponents/StyledTitle"
import {
    Wrapper,
    StyledContent,
    StyledItem,
    StyledItemImg,
    StyledItemTitle,
    StyledItemTitleLower,
    StyledItemContent,
    StyledItemButton
} from "./ThirdSection.styles"
import imgRunning from "../../../../Assets/Images/About/imgRunning.jpg"
import imgEssentials from "../../../../Assets/Images/About/imgEssentials.jpg"
import imgOriginals from "../../../../Assets/Images/About/imgOriginals.jpg"
import imgWinter from "../../../../Assets/Images/About/imgWinter.jpg"

const categories = [
    { category: "Running", img: imgRunning },
    { category: "Essentials", img: imgEssentials },
    { category: "Originals", img: imgOriginals },
    { category: "Winter", img: imgWinter },
];

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
    /* Running, Essentials, Originals, Winter */

    return (
        <Wrapper>
            <StyledTitle>
                our products
            </StyledTitle>

            <StyledContent>
                {categories.map(({ category, img }) => (
                    <StyledItem>
                        <StyledItemImg img={img} />
                        <StyledItemTitle>{category}</StyledItemTitle>
                        <StyledItemTitleLower>Lorem ipsum dolor sit</StyledItemTitleLower>

                        <StyledItemContent>
                            <p>
                                Consectetur adipisicing elit. Unde et quam eveniet saepe amet facere magnam, dignissimos ex pariatur! Quaerat earum eveniet architecto voluptates. Velit facere illo, amet debitis vitae ex quidem.
                            </p>

                            <StyledItemButton>Read more</StyledItemButton>
                        </StyledItemContent>

                    </StyledItem>
                ))}
            </StyledContent>

        </Wrapper>
    );
};

export default ThirdSection;