import React from 'react';
import FirstSection from "./FirstSection/FirstSection"
import styled from "styled-components"
import SecondSection from './SecondSection/SecondSection';
import ThirdSection from './ThirdSection/ThirdSection';

const AboutContent = () => {
    return (
        <main>
            <FirstSection />

            <SecondSection />

            <ThirdSection /> 
        </main>
    );
};

export default AboutContent;