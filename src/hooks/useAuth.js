import { useState, useContext } from 'react';
import firebase from "../firebase"
import { useNavigate } from 'react-router-dom';
import AuthContext from "../Context/AuthContext"
import {
    SIGNED_UP,
    SENT_EMAIL,
    BLOCKED_ACC,
    BLOCKED_ACC_MINI,
    INVALID_EMAIL,
    INVALID_PASSWORD,
    INVALID_ACC_RES,
    CONNECTION_ERROR,
    CONNECTION_ERROR_RES,
    USER_DOESNT_EXIST,
    USER_DOESNT_EXIST_RES,
} from "../helpers/serverResponse.js"
import { useInfoOpen } from "./useInfoOpen"

export const useAuth = () => {
    const [loading, setLoading] = useState(false)

    const  { setIsAuthenticated } = useContext(AuthContext)
    const resolveInfoOpen = useInfoOpen()

    const navigate = useNavigate()
    
    function logInHandler(email, password) {
        setLoading(true)
        /* console.log(email, password); */
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                // var user = userCredential.user;
                console.log('logIn')
                /* navigate("/AllProducts") */
                window.location.reload(true);
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                let message;
                console.log(errorMessage)
                
                if(errorMessage === BLOCKED_ACC) 
                    message = BLOCKED_ACC_MINI

                else if(errorMessage === INVALID_EMAIL || errorMessage === INVALID_PASSWORD) 
                    message = INVALID_ACC_RES

                else if(errorMessage === CONNECTION_ERROR) 
                    message = CONNECTION_ERROR_RES

                else 
                    message = errorMessage
                
                setLoading(false)
                resolveInfoOpen(message, false)

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
            resolveInfoOpen(SIGNED_UP, true)
            navigate("/profile")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)

            setLoading(false)
            resolveInfoOpen(errorMessage, false)
        });
    }

    function resetPasswordHandler(email) {       
        setLoading(true)
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                setLoading(false)
                resolveInfoOpen(SENT_EMAIL, true)
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)

                if(errorMessage === USER_DOESNT_EXIST) resolveInfoOpen(USER_DOESNT_EXIST_RES, false)
                
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