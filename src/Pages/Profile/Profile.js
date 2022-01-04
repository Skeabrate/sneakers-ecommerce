import React, { useContext } from 'react';
import AuthContext from "../../Context/authContext"

const Profile = () => {
    const { isAuthenticated } = useContext(AuthContext)

    return (
        <>
        {isAuthenticated ? (
            <div style={{marginTop: '100px', height: '400px', color: 'white'}}>
                Profile Settings
            </div>
        ) : (
            <div style={{marginTop: '100px', height: '400px', color: 'white'}}>
                You are not logged in
                <button>Go To Login page</button>
            </div>
        )}
        </>
    );
};

export default Profile;