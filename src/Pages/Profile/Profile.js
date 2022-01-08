import React, { useState, useRef, useContext } from 'react';
import { useAuth } from "../../hooks/useAuth"
import {
    Wrapper,
    StylledButton,
} from "./Profile.styles"
import ErrorMessage from '../../Components/ErrorMessage/ErrorMessage';
import { StyledLink } from '../../GlobalStyledComponents/StyledAccountButton';
import { useImageReader } from "../../hooks/useImageReader"
import { storage } from "../../firebase"
import LoadingButton from '../../Components/LoadingButton/LoadingButton';
import AuthContext from "../../Context/authContext"

const typesTable = [
    { name: 'image/jpg' },
    { name: 'image/jpeg' },
    { name: 'image/png' },
    { name: 'image/svg' },
    { name: 'image/webp' },
]

const Profile = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

    const [image, setImage] = useState("")
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const { logOutHandler } = useAuth()
    const { previewUrl } = useImageReader(image)

    const fileRef = useRef()

    const submitHandler = () => {
        if(image){
            try{
                const uploadTask = storage.ref(`${isAuthenticated.token}`).put(image)
                uploadTask.on(
                    "state_changed",
                    (snapshot) => {
                        let progress = (snapshot.bytesTransferred / snapshot.totalBytes)* 100
                        console.log(progress)
                        if(!progress) setLoading(true)
                        if(progress === 100) {
                            window.localStorage.setItem("authToken", JSON.stringify([
                                { token: isAuthenticated.token },
                                { email: isAuthenticated.email },
                                { image: previewUrl }  
                             ]))
                            setIsAuthenticated((state) => ({
                                ...state,
                                image: previewUrl,
                            }))
                            setLoading(false)
                        }
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
                setImage(e.target.files[0])
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

    return (
        <section>
            <Wrapper>
                Profile Settings
                <br />
                {isAuthenticated.email}
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

                <StylledButton onClick={imgPrewievHandler} image={isAuthenticated.image}>
                    {isAuthenticated.image && (
                        <>
                            {previewUrl ? <img alt="avatar image" src={previewUrl} /> : <img alt="avatar image" src={isAuthenticated.image} />}     
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