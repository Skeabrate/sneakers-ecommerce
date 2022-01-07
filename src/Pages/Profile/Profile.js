import React from 'react';
import { useAuth } from "../../hooks/useAuth"
import firebase from "../../firebase"

const Profile = () => {
    const { logOutHandler } = useAuth()

    React.useEffect(() => {
        const user = firebase.auth().currentUser;
        if (user !== null) {
            // The user object has basic properties such as display name, email, etc.
            const displayName = user.displayName;
            const email = user.email;
            const photoURL = user.photoURL;
    
            // The user's ID, unique to the Firebase project. Do NOT use
            // this value to authenticate with your backend server, if
            // you have one. Use User.getToken() instead.
            const uid = user.uid;
        }
    }, [])

    return (
        <div style={{marginTop: '100px', height: '400px', color: 'white'}}>
            Profile Settings
            <br />
            {window.localStorage.getItem('authToken') && JSON.parse(window.localStorage.getItem('authToken'))[1].email}
            <br />
            <button onClick={logOutHandler}>Logout</button>
        </div>
    );
};

export default Profile;