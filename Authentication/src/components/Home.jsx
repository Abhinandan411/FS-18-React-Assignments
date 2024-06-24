import React, { useEffect } from 'react'
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom'
import { signOut } from 'firebase/auth'
function Home() {

    const navigate = useNavigate()
    useEffect(()=>{
        if(auth.currentUser === null){
            navigate("/login")
        }
    },[]);

    const logout = async ()=>{
        try{
            await signOut(auth)
            navigate("/login")
        }
        catch(err){
          alert(err.message)
        }
        
    }
  return (
    <div>
        <h1>HOME</h1>
        {auth.currentUser ? <div> {auth.currentUser.email} <button onClick={logout}>Log out</button> </div> : ''}

    </div>
  )
}

export default Home