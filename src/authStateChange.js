import firebase from "./firebase"
import { storage } from './firebase';

export const authStateChangedHandler = (auth, setAuth = () => {}) => {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            if(!auth){
                storage.ref(`${user.uid}`)
                .getDownloadURL()
                .then(url => {
                    window.localStorage.setItem("authToken", JSON.stringify([
                        { token: user.uid },
                        { email: user.email },
                        { image: url }  
                    ]))
                    setAuth({
                        token: user.uid,
                        email: user.email,
                        image: url,
                    })
                })
                .catch((ex) => {
                    console.log(ex)
                    window.localStorage.setItem("authToken", JSON.stringify([
                        { token: user.uid },
                        { email: user.email },
                        { image: false }  
                    ]))
                    setAuth({
                        token: user.uid,
                        email: user.email,
                        image: false,
                    })
                })  
            }
        }
    });
}