import React from 'react';
import { useAuth } from "../../hooks/useAuth"

const Profile = () => {
    const { logOutHandler } = useAuth()

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