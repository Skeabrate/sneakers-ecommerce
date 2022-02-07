import React from 'react';
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

    React.useEffect(() => {
        
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
                    <StyledContent>
                        <h2>Lorem ipsum dolor sit!</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis? Earum, qui. Unde error, accusamus quisquam similique magnam tempora dolorem.
                        </p>
                        <StyledLink as="button">Read More</StyledLink>
                        <StyledLeftOrnament />
                    </StyledContent>

                    <StyledImg>
                        <img alt="aboutus" src={imgOne} />
                        <StyledRightOrnament />
                    </StyledImg>
                </StyledContentWrapper>
            </section>
        </Wrapper>
    );
};

export default AboutContent;