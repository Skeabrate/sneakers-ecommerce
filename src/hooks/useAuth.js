import { useState, useContext } from 'react';
import firebase from "../firebase"
import { useNavigate } from 'react-router-dom';
import AuthContext from "../Context/authContext"
import { ModalsContext } from '../Context/ModalsContext';

export const useAuth = () => {
    const  { setIsAuthenticated } = useContext(AuthContext)
    const { setIsInfoOpen } = useContext(ModalsContext)

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    
    function logInHandler(email, password) {
        setLoading(true)
        /* console.log(email, password); */
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                // var user = userCredential.user;
                console.log('logIn')
                setLoading(false)
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)

                let message = ""
                
                if(errorMessage === 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'){
                    message = "Account has been temporarily disabled due to many failed attempts. Try again later or reset password"
                } 
                else if(errorMessage === 'There is no user record corresponding to this identifier. The user may have been deleted.' 
                        || errorMessage === 'The password is invalid or the user does not have a password.'){
                            message = "Invalid email address or password"
                }
                else if(errorMessage === 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.'){
                    message = "Session has expired"
                }
                else {
                    message = errorMessage
                }

                setLoading(false)
                setIsInfoOpen({
                    info: message,
                    success: false,
                })

                return message
            });
    }

    function logOutHandler() {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            if(window.localStorage.getItem("authToken")) window.localStorage.removeItem("authToken")
            setIsAuthenticated(false)
            navigate("/login")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    function registerHandler(email, password) {
        setLoading(true)
        // console.log(state.email.value, state.password.value)
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            /* var user = userCredential.user;
            console.log(user) */

            setLoading(false)
            setIsInfoOpen({
                info: "You have succesfully signed up",
                success: true,
            })
            navigate("/profile")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)

            setLoading(false)
            setIsInfoOpen({
                info: errorMessage,
                success: false,
            })
        });
    }

    function resetPasswordHandler(email) {
        setLoading(true)
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                setLoading(false)
                setIsInfoOpen({
                    info: "Email has been sent",
                    success: true,
                })
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)

                if(errorMessage === 'There is no user record corresponding to this identifier. The user may have been deleted.'){
                    setIsInfoOpen({
                        info: "Invalid email",
                        success: false,
                    })
                }
                setLoading(false)
            });
    }

    return {
        loading,
        logInHandler,
        logOutHandler,
        registerHandler,
        resetPasswordHandler,
    };
};