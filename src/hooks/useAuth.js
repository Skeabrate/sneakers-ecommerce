import { useState, useEffect } from 'react';
import firebase from "../firebase"

export const useAuth = () => {
    const [auth, setAuth] = useState(window.localStorage.getItem("authToken"))
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    /* firebase.auth().onAuthStateChanged((user) => {
        if (user) {
           // console.log(user.uid)
           if(!window.localStorage.getItem("authToken")){
              window.localStorage.setItem("authToken", JSON.stringify([
                 { token: user.uid },
                 { email: user.email },      
              ]))
              setAuth(true)
           }
        }
    }); */

    function logInHandler(email, password, navigate) {
        setLoading(true)
        /* console.log(email, password); */
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in
                // var user = userCredential.user;
                setLoading(false)
                setAuth(true)
            })
            .catch((error) => {
                // var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorMessage)
                
                if(errorMessage === 'Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later.'){
                    setError("Account has been temporarily disabled due to many failed attempts. Try again later or reset password")
                } else {
                    setError(errorMessage)
                }
                setLoading(false)
            });
    }

    function logOutHandler(navigate) {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            if(window.localStorage.getItem("authToken")) window.localStorage.removeItem("authToken")
            setAuth(false)
            navigate("/login")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }

    function registerHandler(email, password, navigate) {
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

    return {
        auth,
        setAuth,
        loading,
        error,
        setError,
        logInHandler,
        logOutHandler,
        registerHandler,
    };
};