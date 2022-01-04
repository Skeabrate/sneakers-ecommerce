import React from 'react';
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import LoadingScreen from '../LoadingScreen/LoadingScreen';

const LoadingButton = ({ loading, label }) => {
    return (
        <StyledLink isLogin as="button" type="submit">
            {loading ? (
                <LoadingScreen style={{fill: "white"}}/>
            ) : <>{label}</>}
        </StyledLink>
    );
};

export default LoadingButton;