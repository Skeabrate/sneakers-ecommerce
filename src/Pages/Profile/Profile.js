import React, { useState, useContext, useRef } from 'react';
import { useAuth } from "../../hooks/useAuth"
import AuthContext from "../../Context/AuthContext"
import ProfileImage from './ProfileImage/ProfileImage';
import { StyledTitle } from '../../GlobalStyledComponents/StyledTitle';
import LoadingButton from '../../Components/LoadingButton/LoadingButton';
import {
    StyledSettings,
    StyledOrnament,
    StyledLogoutDesktop,
    StyledLogoutMobile,
    StyledAccountDetails,
    StyledSpan,
    StyledDetailTitle,
    StyledOption,
    Wrapper,
    StyledProfileInfo,
    StyledForgotPassword
} from "./Profile.styles"
import ConfirmModal from '../../Modals/ConfirmModal/ConfirmModal';
import { useSticky } from "../../hooks/useSticky"
import ShoppingHistory from './ShoppingHistory/ShoppingHistory';
import { useStickyTwo } from '../../hooks/useStickyTwo';

const Profile = () => {
    const [openConfirm, setOpenConfirm] = useState(false)

    const { isAuthenticated } = useContext(AuthContext)

    const { logOutHandler, resetPasswordHandler, loading } = useAuth()

    const stickyRef = useRef(null)
    const { isSticky } = useSticky(stickyRef.current)

    const settingsRef = useRef(null)
    const end = useRef(null)
    const position = useStickyTwo(settingsRef, end)

    return (
        <div>
            <Wrapper>
                <StyledSettings ref={settingsRef} position={position}>
                    <header>
                        <StyledTitle>
                            profile
                            <StyledOrnament />
                        </StyledTitle>
                    </header>

                    <article>
                        <StyledAccountDetails>
                            <ProfileImage />

                            <StyledProfileInfo>
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
                            </StyledProfileInfo>

                            <StyledForgotPassword>
                                <StyledDetailTitle>Forgot Your Password ?</StyledDetailTitle>
                                <LoadingButton loading={loading} onClick={() => setOpenConfirm(true)} label="Reset Password" />
                            </StyledForgotPassword>
                            

                            <StyledLogoutMobile onClick={logOutHandler}>
                                <span>Logout</span>
                            </StyledLogoutMobile>
                        </StyledAccountDetails>
                    </article>
                    <div style={{ position: "absolute", bottom: '0', left: '0', height: '100vh', width: '100%', zIndex: '-1'}} ref={end} />
                </StyledSettings>

                <ShoppingHistory /> 

                <StyledLogoutDesktop onClick={logOutHandler} isSticky={isSticky}>
                    <span>Logout</span>
                </StyledLogoutDesktop> 
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
        </div>
    );
};

export default Profile;