import React, { useState, useContext } from 'react';
import { useAuth } from "../../hooks/useAuth"
import {
    Wrapper,
} from "./Profile.styles"
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import AuthContext from "../../Context/authContext"
import ProfileImage from './ProfileImage/ProfileImage';

const Profile = () => {
    const { isAuthenticated } = useContext(AuthContext)
    const [error, setError] = useState(false)

    const { logOutHandler, resetPasswordHandler } = useAuth()

    return (
        <section>
            <Wrapper>
                Profile Settings
                <br />
                {isAuthenticated.email}
                <br />

                <ProfileImage setError={setError} />

                <br />
                <StyledLink as="button" isLogin onClick={() => resetPasswordHandler(isAuthenticated.email)}>Reset Password</StyledLink>

                <br />
                <StyledLink as="button" isLogin onClick={logOutHandler}>Logout</StyledLink>

                {error && <ErrorMessage label={error} setError={setError} />}
            </Wrapper>
        </section>
    );
};

export default Profile;