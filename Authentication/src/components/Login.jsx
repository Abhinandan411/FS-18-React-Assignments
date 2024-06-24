import React from 'react'
import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try{
            await signInWithEmailAndPassword(auth , email , password);
            alert("Login Success")
            navigate("/")
        }
        catch(err){
           alert(err.message)
        }
    }

    return (
        <>
            <div>
                <h1>Login</h1>
                <form action="" onSubmit={login}>
                    <br />
                    <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" placeholder='Enter email' /><br />
                    <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder='Enter password' /><br />
                    <input type="submit" value="Log in" />

                </form>
            </div>
        </>
    )
}

export default Login