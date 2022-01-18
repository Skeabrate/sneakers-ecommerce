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
                    <header>
                        <StyledTitle>
                            Profile Settings
                            <StyledOrnament />
                        </StyledTitle>
                    </header>

                    <article>
                        <StyledAccountDetails>
                            <ProfileImage />

                            <div style={{ marginTop: '40px' }}>
                                <StyledDetailTitle>Profile Information</StyledDetailTitle>
                                <StyledOption>User ID : <StyledSpan>{isAuthenticated.token}</StyledSpan></StyledOption>
                                <StyledOption>Email : <StyledSpan>{isAuthenticated.email}</StyledSpan></StyledOption>
                                <StyledOption>Phone Number : <StyledSpan>+48 123 456 789</StyledSpan></StyledOption>
                            </div>

                            <div style={{ marginBlock: '40px' }}>
                                <StyledDetailTitle>Address Information</StyledDetailTitle>
                                <StyledOption>Country : <StyledSpan>United States</StyledSpan></StyledOption>
                                <StyledOption>Region / State : <StyledSpan>California</StyledSpan></StyledOption>
                                <StyledOption>Street : <StyledSpan>RandomStreet 1234</StyledSpan></StyledOption>
                                <StyledOption>City : <StyledSpan>Anytown</StyledSpan></StyledOption>
                                <StyledOption>ZIP / Postal Code : <StyledSpan>34-563</StyledSpan></StyledOption>

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
                    </article>
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