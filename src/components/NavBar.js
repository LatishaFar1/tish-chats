import React, {useContext} from 'react';
import { AuthContext } from '../context/Authorization';
import {Link} from "react-router-dom";
import {auth, db} from "../firebase";
import {signOut} from "firebase/auth";
import {doc, updateDoc} from "firebase/firestore";

function NavBar() {

  const {user} = useContext(AuthContext);

  const logOut = async () => {
    await updateDoc(doc(db, "users", auth.currentUser.uid), {
      isOnline: false
    })
    await signOut(auth);
  };

  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>

        </div>

      <div className='other-links'>
       
        {user ? (
        <>
         <Link to="/chat" className='chat-link'>Chat</Link>
        <button className='logout-button' onClick={logOut}> Logout </button>
        </>
        )
        :  ( 
        <>
           <Link to="/register">Register</Link>
          <Link to="/login">Login</Link>
        </>
     
      )}
      </div>

    </div>
  )
}

export default NavBar