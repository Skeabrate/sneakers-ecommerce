import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   background-color: black;
   cursor: pointer;
   z-index: 999999;
   opacity: ${({isModalOpen}) => isModalOpen ? 0.6 : 0};
   visibility: ${({isModalOpen}) => isModalOpen ? 'visible' : 'hidden'};

   transition: all .5s ease-in-out;
   transition-duration: ${({isModalOpen}) => !isModalOpen && '.3s'};
`

const ModalBackground = ({ isModalOpen, setIsModalOpen }) => {
    return <StyledBackground isModalOpen={isModalOpen} onClick={setIsModalOpen}/>
};

export default ModalBackground;