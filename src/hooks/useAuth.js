import { useState, useContext } from 'react';
import firebase from "../firebase"
import { useNavigate } from 'react-router-dom';
import AuthContext from "../Context/authContext"

export const useAuth = () => {
    const  { setIsAuthenticated } = useContext(AuthContext)

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const navigate = useNavigate()
    
    function logInHandler(email, password) {
        setLoading(true)
        /* console.log(email, password); */
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                // var user = userCredential.user;
                setLoading(false)
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                
                if(errorMessage === 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'){
                    setError("Account has been temporarily disabled due to many failed attempts. Try again later or reset password")
                } 
                else if(errorMessage === 'There is no user record corresponding to this identifier. The user may have been deleted.'){
                    setError("Invalid email address or password")
                }
                else if(errorMessage === 'The password is invalid or the user does not have a password.'){
                    setError("Invalid email address or password")
                }
                else if(errorMessage === 'A network error (such as timeout, interrupted connection or unreachable host) has occurred.'){
                    setError("Session has expired")
                }
                else {
                setError(errorMessage)
                }
                setLoading(false)
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

            navigate("/profile")
            setLoading(false)
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            setError(errorMessage)
            setLoading(false)
        });
    }

    function resetPasswordHandler(email) {
        firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                // Password reset email sent!
                // ..
                console.log('success')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
            });
    }

    return {
        loading,
        error,
        setError,
        logInHandler,
        logOutHandler,
        registerHandler,
        resetPasswordHandler,
    };
};