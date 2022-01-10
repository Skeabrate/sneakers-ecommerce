import React from 'react';
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import ClipLoader from "react-spinners/ClipLoader";

const style ={
    position: 'absolute',
}

const LoadingButton = ({ loading, label, disabled, onClick, isBlack }) => {
    return (
        <StyledLink isBlack={isBlack} as="button" type="submit" disabled={disabled} onClick={onClick}>
            {loading ? (
                <div style={style}><ClipLoader color={isBlack ? '#1a1a1a' : '#fe7901'} /></div>
            ) : <>{label}</>}
        </StyledLink>
    );
};

export default LoadingButton;