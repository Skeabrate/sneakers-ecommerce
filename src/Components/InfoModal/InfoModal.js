import React, { useEffect, useContext } from 'react';
import {
    StyledError,
    StyledBtn,
    StyledLoadingBar,
} from "./InfoModal.styles"
import { ModalsContext } from '../../Context/ModalsContext';
import { usePathChange } from "../../hooks/usePathChange"

const InfoModal = () => {
    const { isInfoOpen, setIsInfoOpen } = useContext(ModalsContext)
    
    const handleSetInfo = () => setIsInfoOpen((state) => ({
        ...state,
        info: false,
    }))
    
    usePathChange(handleSetInfo)

    useEffect(() => {
        let timeout = setTimeout(() => {
            handleSetInfo()
        }, 4200)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <StyledError success={isInfoOpen.success}>
            {isInfoOpen.info}
            <StyledBtn onClick={handleSetInfo}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
            </StyledBtn>

            <StyledLoadingBar>
                <span></span>
            </StyledLoadingBar>
        </StyledError>
    );
};

export default InfoModal;