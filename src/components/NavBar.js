import React from 'react'
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/">Home</Link>
     
            <Link to="/chat">Chat</Link>

        </div>


    </div>
  )
}

export default NavBar