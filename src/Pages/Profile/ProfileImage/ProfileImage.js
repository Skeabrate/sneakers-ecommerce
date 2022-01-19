import React, { useRef, useState, useContext } from 'react';
import LoadingButton from '../../../Components/LoadingButton/LoadingButton';
import { useImageReader } from "../../../hooks/useImageReader"
import { storage } from "../../../firebase"
import { useImgLoad } from '../../../hooks/useImgLoad';
import AuthContext from "../../../Context/AuthContext"
import ModalsContext from "../../../Context/ModalsContext"
import { 
    StylledButton,
    Wrapper,
    StyledContent
} from "./ProfileImage.styles"

const typesTable = [
    { name: 'image/jpg' },
    { name: 'image/jpeg' },
    { name: 'image/png' },
    { name: 'image/svg' },
    { name: 'image/webp' },
]

const ProfileImage = () => {
    const [image, setImage] = useState("")
    const [loading, setLoading] = useState(false)

    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext)
    const { isInfoOpen, setIsInfoOpen } = useContext(ModalsContext)

    const { previewUrl } = useImageReader(image)
    
    const fileRef = useRef(null)
    const profileImgRef = useRef(null)
    
    const { handleLoadImg } = useImgLoad(profileImgRef.current)

    const submitHandler = () => {
        if(previewUrl === isAuthenticated.image) return null
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
                            window.localStorage.removeItem("authToken")
                            window.localStorage.setItem("authToken", JSON.stringify([
                                { token: isAuthenticated.token },
                                { email: isAuthenticated.email },
                                { image: previewUrl }  
                             ]))
                            setIsAuthenticated((state) => ({
                                ...state,
                                image: previewUrl,
                            }))
                            setIsInfoOpen({
                                info: "You have changed profile avatar",
                                success: true,
                            })
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
            if(!typesTable.find(x => x.name === e.target.files[0].type)){
                setIsInfoOpen({
                    info: "Invalid image type",
                    success: false,
                })
                return null
            } 
            if(e.target.files[0].size > 1000000) {
                setIsInfoOpen({
                    info: "File is too big",
                    success: false,
                })
                return null
            }
            else setImage(e.target.files[0])
        }
    }

    const imgPrewievHandler = (e) => {
        e.preventDefault()
        if(isInfoOpen.info) setIsInfoOpen((state) => ({
            ...state,
            info: false,
        }))
        
        fileRef.current.click()
    }

    return (
        <Wrapper>
            <h3>Change Avatar</h3>

            <StyledContent>
                <div >
                    <input
                        style={{ display: 'none' }}
                        type="file"
                        onChange={imgChoseHandler}
                        ref={fileRef}
                        />
                </div>

                <StylledButton onClick={imgPrewievHandler} image={isAuthenticated.image || previewUrl}>
                    <img 
                        alt={isAuthenticated.image || previewUrl ? isAuthenticated.email : ""} 
                        src={previewUrl ? previewUrl : isAuthenticated.image}
                        ref={profileImgRef}
                        onLoad={handleLoadImg}
                        />
                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z"/></svg>
                </StylledButton>
                

                <br />
                <LoadingButton isBlack loading={loading} onClick={submitHandler} label="Save" />
            </StyledContent>
        </Wrapper>
    );
};

export default ProfileImage;