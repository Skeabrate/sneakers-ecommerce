import React, { useState, useContext } from 'react';
import { useAuth } from "../../hooks/useAuth"
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import AuthContext from "../../Context/authContext"
import ProfileImage from './ProfileImage/ProfileImage';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import LoadingButton from '../../Components/LoadingButton/LoadingButton';
import {
    Wrapper,
    StyledSettings,
    StyledShopping,
    StyledOrnament,
    StyledSwitch,
    StyledLogout,
    StyledAccountDetails,
    StyledSettingsContent
} from "./Profile.styles"
import ConfirmModal from '../../Modals/ConfirmModal/ConfirmModal';

const Profile = () => {
    const { isAuthenticated } = useContext(AuthContext)

    const [toggle, setToggle] = useState(false)
    const [openConfirm, setOpenConfirm] = useState(false)

    const { logOutHandler, resetPasswordHandler, loading } = useAuth()

    return (
        <Wrapper>
            <StyledSettings toggle={toggle}>
                <StyledTitle>
                    Profile Settings
                    <StyledOrnament />
                </StyledTitle>

                <StyledSettingsContent>
                    <StyledAccountDetails>
                        <h3>Email: <span style={{fontWeight: 'normal', marginLeft: '10px'}}>{isAuthenticated.email}</span></h3>
                        
                        <div>
                            <h3>Forgot Your Password?</h3>
                            <LoadingButton isBlack loading={loading} onClick={() => setOpenConfirm(true)} label="Reset Password" />
                        </div>
                    </StyledAccountDetails>

                    <ProfileImage />

                    <StyledLogout>
                        <StyledLink as="button" onClick={logOutHandler}>Logout</StyledLink>
                    </StyledLogout>

                    <StyledSwitch onClick={() => setToggle(!toggle)} toggle={toggle}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/></svg>
                    </StyledSwitch>
                </StyledSettingsContent>

                {/* {error && <ErrorMessage label={error} setError={setError} />} */}

                {openConfirm && (
                    <ConfirmModal 
                        label="Do you want to reset your password?"
                        yesHandler={() => {
                            resetPasswordHandler(isAuthenticated.email)
                            setOpenConfirm(false)
                        }}
                        noHandler={() => setOpenConfirm(false)}
                    />
                )}

            </StyledSettings>
            
            <StyledShopping toggle={toggle}>
                <StyledTitle>
                    Shopping History
                    <StyledOrnament isOrange />
                </StyledTitle>

            </StyledShopping>
        </Wrapper>
    );
};

export default Profile;