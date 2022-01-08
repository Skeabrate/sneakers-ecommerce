import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useAuth } from "../../hooks/useAuth"
import firebase from "../../firebase"
import {
    Wrapper,
    StylledButton,
} from "./Profile.styles"
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import { useImageReader } from "../../hooks/useImageReader"
import { storage } from "../../firebase"
import LoadingButton from '../../Components/LoadingButton/LoadingButton';

const typesTable = [
    { name: 'image/jpg' },
    { name: 'image/jpeg' },
    { name: 'image/png' },
    { name: 'image/svg' },
    { name: 'image/webp' },
]

const Profile = ({ profileImg }) => {
    const [profile, setProfile] = useState({
        email: '',
        uid: '',
        image: '',
    })
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const { logOutHandler } = useAuth()
    const { previewUrl } = useImageReader(profile.image)

    const fileRef = useRef()

    const user = firebase.auth().currentUser;

    const getUser = useCallback(() => {
        if (user !== null) {
            setProfile({
                email: user.email,
                uid: user.uid,
            })
        }
    }, [user])

    const submitHandler = () => {
        if(profile.image){
            try{
                const uploadTask = storage.ref(`${profile.uid}`).put(profile.image)
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        let progress = (snapshot.bytesTransferred / snapshot.totalBytes)* 100
                        console.log(progress)
                        if(!progress) setLoading(true)
                        if(progress === 100) setLoading(false)
                    },
                    (err) => {
                        console.log(err)
                    }
                )

            } catch (ex) {
                console.log(ex.response)
            }
        }
    }

    const imgChoseHandler = e => {
        if(e.target.files[0]){
            if(typesTable.find(x => x.name === e.target.files[0].type)){
                setProfile((state) => ({
                    ...state,
                    image: e.target.files[0],
                }))
            } else {
                setError("Invalid image type")
            }
        }
    }

    const imgPrewievHandler = (e) => {
        e.preventDefault()
        setError(false)
        fileRef.current.click()
    }

    useEffect(() => {
        if(window.localStorage.getItem('authToken')){
            setProfile({
                email: JSON.parse(window.localStorage.getItem('authToken'))[1].email,
                uid: JSON.parse(window.localStorage.getItem('authToken'))[0].token,
            })
        } else getUser()
    }, [])

    return (
        <section>
            <Wrapper>
                Profile Settings
                <br />
                {profile && profile.email}
                <br />

                <h3>Add Profile Photo</h3>
                <div >
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        onChange={imgChoseHandler}
                        ref={fileRef}
                    />
                </div>

                <StylledButton onClick={imgPrewievHandler} image={profile.image}>
                    {profileImg && (
                        <>
                            {previewUrl ? <img alt="avatar image" src={previewUrl} /> : <img alt="avatar image" src={profileImg} />}     
                        </>
                    )}
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </StylledButton>

                <br />
                <LoadingButton loading={loading} onClick={submitHandler} label="Save" />

                <br />
                <StyledLink as="button" isLogin onClick={logOutHandler}>Logout</StyledLink>

                {error && <ErrorMessage label={error} setError={setError} />}
            </Wrapper>
        </section>
    );
};

export default Profile;