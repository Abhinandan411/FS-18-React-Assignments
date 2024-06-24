import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const signup = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert("Account created");
            navigate("/login");
        } catch (error) {
            alert(error.message);
        }
    };

    const goToLogin = () => {
        navigate("/login");
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={signup}>
                <h1>Signup</h1>
                <input 
                    onChange={(e) => setEmail(e.currentTarget.value)} 
                    type="text" 
                    placeholder='Enter email' 
                /><br />
                <input 
                    onChange={(e) => setPassword(e.currentTarget.value)} 
                    type="password" 
                    placeholder='Enter password' 
                /><br />
                <input type="submit" value="Sign up" />
            </form>
            <button onClick={goToLogin} className="login-redirect-button">
                Already have an account? Login
            </button>
        </div>
    );
}

export default Signup;
