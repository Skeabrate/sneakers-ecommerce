import React from 'react';
import firebase from "../../firebase"

const Profile = () => {

    const logoutHandler = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    }

    return (
        <div style={{marginTop: '100px', height: '400px', color: 'white'}}>
            Profile Settings
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default Profile;