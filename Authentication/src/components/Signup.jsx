import React from 'react'
import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';


function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signup = async(e) => {
        e.preventDefault();
        try{
           await createUserWithEmailAndPassword(auth , email , password)
           alert("Account created")
        }
        catch (error) {
            // setError(error.message);
            alert(error.message)
          }
        
    };
    return (
        <>
            <div>
                <h1>Signup</h1>
                <form action="" onSubmit={signup}>
                    <br />
                    <input onChange={(e) => setEmail(e.currentTarget.value)} type="text" placeholder='Enter email' /><br />
                    <input onChange={(e) => setPassword(e.currentTarget.value)} type="password" placeholder='Enter password' /><br />
                    <input type="submit" value="Sign up" />

                </form>
            </div>
        </>
    )
}

export default Signup