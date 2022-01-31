import React from 'react';
import styled from "styled-components"

const Wrapper = styled.div`
    position: absolute;
    bottom: 5px;
    left: -10px;
    width: 0;
    height: 0;
    z-index: -1;
    border-top: 60px solid transparent;
    border-bottom: none;
    border-left: 100px solid ${({ theme, isBlack }) => isBlack ? theme.colors.black : theme.colors.orange};

    @media(max-width: 750px){
        left: -5px;
        bottom: 3px;
        border-top: 40px solid transparent;
        border-left: 70px solid ${({ theme, isBlack }) => isBlack ? theme.colors.black : theme.colors.orange};
    }

`

export const StyledTitleOrnament = ({ isBlack }) => {
    return <Wrapper isBlack={isBlack} />;
}