import React from 'react';
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const style ={
    position: 'absolute',
}

const LoadingButton = ({ loading, label, disabled }) => {
    return (
        <StyledLink isLogin as="button" type="submit" disabled={disabled}>
            {loading ? (
                <LoadingScreen style={style}/>
            ) : <>{label}</>}
        </StyledLink>
    );
};

export default LoadingButton;