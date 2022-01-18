import React, { useState, useContext, useRef } from 'react';
import { useAuth } from "../../hooks/useAuth"
import AuthContext from "../../Context/AuthContext"
import ProfileImage from './ProfileImage/ProfileImage';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import LoadingButton from '../../Components/LoadingButton/LoadingButton';
import {
    StyledSettings,
    StyledOrnament,
    StyledLogout,
    StyledAccountDetails,
    StyledSettingsContent,
    StyledSpan,
    StyledDetailTitle,
    StyledOption,
    Wrapper,
} from "./Profile.styles"
import ConfirmModal from '../../Modals/ConfirmModal/ConfirmModal';
import { useSticky } from "../../hooks/useSticky"
import ShoppingHistory from './ShoppingHistory/ShoppingHistory';

const Profile = () => {
    const [openConfirm, setOpenConfirm] = useState(false)

    const { isAuthenticated } = useContext(AuthContext)

    const { logOutHandler, resetPasswordHandler, loading } = useAuth()

    const stickyRef = useRef(null)
    const { isSticky } = useSticky(stickyRef)

    return (
        <>
            <Wrapper>
                <StyledSettings>
                    <StyledTitle>
                        Profile Settings
                        <StyledOrnament />
                    </StyledTitle>

                    <StyledSettingsContent>
                        <StyledAccountDetails>
                            <ProfileImage />

                            <div style={{ marginTop: '60px' }}>
                                <StyledDetailTitle>Profile Information</StyledDetailTitle>
                                <StyledOption>User ID : <StyledSpan>{isAuthenticated.token}</StyledSpan></StyledOption>
                                <StyledOption>Email : <StyledSpan>{isAuthenticated.email}</StyledSpan></StyledOption>
                                <StyledOption>Phone Number : <StyledSpan>+48 123 456 789</StyledSpan></StyledOption>
                            </div>

                            <div style={{ marginBlock: '60px' }}>
                                <StyledDetailTitle>Address Information</StyledDetailTitle>
                                <StyledOption>Country : <StyledSpan>United States</StyledSpan></StyledOption>
                                <StyledOption>Region / State : <StyledSpan>California</StyledSpan></StyledOption>
                                <StyledOption>Street : <StyledSpan>RandomStreet 1234</StyledSpan></StyledOption>
                                <StyledOption>City : <StyledSpan>Anytown</StyledSpan></StyledOption>
                                <StyledOption>ZIP / Postal Code : <StyledSpan>234-56</StyledSpan></StyledOption>

                                <div style={{ marginTop: '30px' }}>
                                    <LoadingButton onClick={() => console.log('change address')} label="Update Address" />
                                </div>
                            </div>

                            <div>
                                <StyledDetailTitle>Forgot Your Password ?</StyledDetailTitle>
                                <LoadingButton loading={loading} onClick={() => setOpenConfirm(true)} label="Reset Password" />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <StyledLogout onClick={logOutHandler} isSticky={isSticky}>
                                    <span>Logout</span>
                                </StyledLogout> 
                            </div>
                        </StyledAccountDetails>
                    </StyledSettingsContent>
                </StyledSettings>

                <ShoppingHistory />               
            </Wrapper>

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
            
            <div ref={stickyRef} style={{position: 'aboslute', bottom: 0 }}/>
        </>
    );
};

export default Profile;