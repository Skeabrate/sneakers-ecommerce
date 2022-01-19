import React from 'react';
import styled from "styled-components"
import { StyledTitle } from '../../../GlobalStyledComponents/StyledTitle';

const Wrapper = styled.div`
    text-align: center;
    padding: 30px 50px 0px 50px;

    svg{
        fill: ${({theme}) => theme.colors.green};
        height: 150px;
        width: 150px;
        margin-bottom: 20px;
    }
`

const SuccesfulPayment = () => {
    return (
        <Wrapper>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.25 8.891l-1.421-1.409-6.105 6.218-3.078-2.937-1.396 1.436 4.5 4.319 7.5-7.627z"/></svg>
            <StyledTitle color="green">
                Payment
                <br />
                Succesful
            </StyledTitle>
        </Wrapper>
    );
};

export default SuccesfulPayment;