import React from 'react';
import {
    Wrapper,
} from "./AboutContent.styles"
import { StyledTitle } from "../../../GlobalStyledComponents/StyledTitle"
import { StyledTitleOrnament } from "../../../GlobalStyledComponents/StyledTitleOrnament"

const AboutContent = () => {
    return (
        <Wrapper>
            <header>
                <StyledTitle>
                    <StyledTitleOrnament />
                    About our company
                </StyledTitle>
            </header>
            {/* section */}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, officiis? Earum, qui. Unde error, accusamus quisquam similique magnam tempora dolorem quasi aliquid optio rerum perspiciatis, inventore, necessitatibus fugit dolore saepe praesentium! Quod, iusto veniam. Sapiente rem ab enim nihil? Delectus saepe sint, rerum nam dolorum tenetur nihil possimus modi laborum.
        </Wrapper>
    );
};

export default AboutContent;