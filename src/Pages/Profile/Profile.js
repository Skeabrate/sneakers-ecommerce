import React, { useState, useContext } from 'react';
import { useAuth } from "../../hooks/useAuth"
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import AuthContext from "../../Context/authContext"
import ProfileImage from './ProfileImage/ProfileImage';

import {
    Wrapper,
    StyledSettings,
    StyledShopping,
} from "./Profile.styles"
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';

const Profile = () => {
    const { isAuthenticated } = useContext(AuthContext)
    const [error, setError] = useState(false)

    const { logOutHandler, resetPasswordHandler } = useAuth()

    return (
        <Wrapper>
            <StyledSettings>
                <StyledTitle>
                    Profile Settings
                </StyledTitle>

                <br />
                {isAuthenticated.email}
                <br />

                <ProfileImage setError={setError} />

                <br />
                <StyledLink as="button" onClick={() => resetPasswordHandler(isAuthenticated.email)}>Reset Password</StyledLink>

                <br />
                <StyledLink as="button" onClick={logOutHandler}>Logout</StyledLink>

                {error && <ErrorMessage label={error} setError={setError} />}
            </StyledSettings>
            
            <StyledShopping>
                <StyledTitle>
                    Shopping History
                </StyledTitle>

            </StyledShopping>
        </Wrapper>
    );
};

export default Profile;