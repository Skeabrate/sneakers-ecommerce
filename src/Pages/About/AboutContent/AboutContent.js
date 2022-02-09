import React from 'react';
import FirstSection from "./FirstSection/FirstSection"
import styled from "styled-components"
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';

const Wrapper = styled.main`
    background-color: ${({theme}) => theme.colors.black};
    padding: 3vw;
`

const AboutContent = () => {
    return (
        <Wrapper> {/* main */}
            <FirstSection />

            <SecondSection />

            <ThirdSection /> 
        </Wrapper>
    );
};

export default AboutContent;