import React from 'react';
import StyledTitle from "../../../../GlobalStyledComponents/StyledTitle"
import { aboutCategories } from "../../../../data/aboutCategories"
import {
    Wrapper,
    StyledContent,
    StyledItem,
    StyledItemImg,
    StyledItemTitle,
    StyledItemTitleLower,
    StyledItemContent,
    StyledItemButton,
    StyledItemHeader
} from "./ThirdSection.styles"

const ThirdSection = () => {
    return (
        <Wrapper>
            <header>
                <StyledTitle>
                    our products
                </StyledTitle>
            </header>

            <StyledContent>
                {aboutCategories.map(({ category, img }) => (
                    <StyledItem key={category}>
                        <StyledItemImg img={img} />

                        <StyledItemHeader>
                            <StyledItemTitle>{category}</StyledItemTitle>
                            <StyledItemTitleLower>Lorem ipsum dolor sit</StyledItemTitleLower>
                        </StyledItemHeader>

                        <StyledItemContent>
                            <p>
                                Consectetur adipisicing elit. Unde et quam eveniet saepe amet facere magnam, dignissimos ex pariatur! Quaerat earum eveniet architecto voluptates.
                            </p>

                            <StyledItemButton>
                                <span>READ MORE</span>
                            </StyledItemButton>
                        </StyledItemContent>

                    </StyledItem>
                ))}
            </StyledContent>

        </Wrapper>
    );
};

export default ThirdSection;