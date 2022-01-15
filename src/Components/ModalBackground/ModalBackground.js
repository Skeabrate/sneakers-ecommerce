import React from 'react';
import styled, { keyframes } from 'styled-components';

const appear = keyframes`
    from{
        opacity: 0;
    } to {
        opacity: 0.6;
    }
`

const StyledBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: black;
   cursor: pointer;
   z-index: 99999;
   animation: .2s forwards ${appear};
`

const ModalBackground = ({ isModalOpen, setIsModalOpen }) => {
    return <StyledBackground isModalOpen={isModalOpen} onClick={setIsModalOpen}/>
};

export default ModalBackground;