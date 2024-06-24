import React, { useEffect } from 'react';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

function Home() {
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.currentUser === null) {
            navigate("/login");
        }
    }, [navigate]);

    const logout = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (err) {
            alert(err.message);
        }
    }

    return (
        <div className="home-container">
            <h1 className="home-header">Hi user</h1>
            {auth.currentUser ? (
                <div className="home-content">
                    <div>Your registered email is : {auth.currentUser.email}</div>
                    <button className="logout-button" onClick={logout}>Log out</button>
                </div>
            ) : ''}
        </div>
    );
}

export default Home;
