import React from 'react';
import { StyledTitle } from "../../../GlobalStyledComponents/StyledTitle"
import { StyledOrnament } from "../Profile.styles"
import {
    Wrapper,
} from "./ShoppingHistory.styles"

const ShoppingHistory = () => {
    return (
        <Wrapper>
            <StyledTitle>
                Shopping History
                <StyledOrnament isOrange/>
            </StyledTitle>
        </Wrapper>
    );
};

export default ShoppingHistory;