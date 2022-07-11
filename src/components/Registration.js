import React from 'react'

function Registration() {
  return (
    <div className='register'>
        <form>
            <h1 className='register-h1'>Register</h1>
            <br/>
            <div className='form-container'>
                <label name="name">Name</label>
                <input type="text" name="name" />
            </div>

            <div className='form-container'>
                <label name="email">Email</label>
                <input type="text" name="email" />
            </div>

            <div className='form-container'>
                <label name="password">Password</label>
                <input type="text" name="password" />
            </div>
        </form>


    </div>
  )
}

export default Registration