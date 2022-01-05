import React, { useContext } from 'react';
import firebase from "../../firebase"
import AuthContext from '../../Context/authContext';

const Profile = () => {
    const { setIsAuthenticated } = useContext(AuthContext)
    /* console.log(JSON.parse(window.localStorage.getItem('authToken'))[1].email) */
    
    const logoutHandler = () => {
        firebase.auth().signOut().then(() => {
            // Sign-out successful.
            if(window.localStorage.getItem("authToken")) window.localStorage.removeItem("authToken")
            setIsAuthenticated(false)
        }).catch((error) => {
        // An error happened.
            console.log(error)
        });
    }

    return (
        <div style={{marginTop: '100px', height: '400px', color: 'white'}}>
            Profile Settings
            <br />
            {JSON.parse(window.localStorage.getItem('authToken'))[1].email}
            <br />
            <button onClick={logoutHandler}>Logout</button>
        </div>
    );
};

export default Profile;