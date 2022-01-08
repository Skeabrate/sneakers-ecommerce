import React, { useRef, useState, useContext } from 'react';
import LoadingButton from '../../../Components/LoadingButton/LoadingButton';
import { StylledButton } from "./ProfileImage.styles"
import { useImageReader } from "../../../hooks/useImageReader"
import { storage } from "../../../firebase"
import AuthContext from "../../../Context/authContext"

const typesTable = [
    { name: 'image/jpg' },
    { name: 'image/jpeg' },
    { name: 'image/png' },
    { name: 'image/svg' },
    { name: 'image/webp' },
]

const ProfileImage = ({ setError }) => {
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)

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
        <article>
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
                    <>{previewUrl ? <img alt={isAuthenticated.email} src={previewUrl} /> : <img alt={isAuthenticated.email} src={isAuthenticated.image} />}</>
                )}
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
            </StylledButton>

            <br />
            <LoadingButton loading={loading} onClick={submitHandler} label="Save" />
        </article>
    );
};

export default ProfileImage;