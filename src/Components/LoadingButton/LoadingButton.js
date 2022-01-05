import React from 'react';
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import ClipLoader from "react-spinners/ClipLoader";

const style ={
    position: 'absolute',
}

const LoadingButton = ({ loading, label, disabled }) => {
    return (
        <StyledLink isLogin as="button" type="submit" disabled={disabled}>
            {loading ? (
                <div style={style}><ClipLoader color={'#1a1a1a'} /></div>
            ) : <>{label}</>}
        </StyledLink>
    );
};

export default LoadingButton;