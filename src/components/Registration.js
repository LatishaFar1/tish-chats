import React, {useState} from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../firebase";
import {setDoc, doc, Timestamp} from "firebase/firestore";

function Registration() {

    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        error: null
    });


    const {name, email, password, error} = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null });
        if (!name || !email || !password) {
          setData({ ...data, error: "Please fill out each line" });
        }
        try {
          const result = await createUserWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log(result.user);
          await setDoc(doc(db, "users", result.user.uid), {
            uid: result.user.uid,
            name,
            email,
            createdAt: Timestamp.fromDate(new Date()),
            isOnline: true,
          });
          setData({
            name: "",
            email: "",
            password: "",
            error: null,
          });
        } catch (error) {
          setData({ ...data, error: error.message});
        }
      };

  return (
    <div className='register'>
            <h1 className='register-h1'>Register</h1>
        <form onSubmit={handleRegister}>
            <br/>
            <div className='form-container'>
                <label name="name">Name</label>
                <input type="text" name="name" value={name} onChange={handleChange}/>
            </div>

            <div className='form-container'>
                <label name="email">Email</label>
                <input type="text" name="email"  value={email} onChange={handleChange}/>
            </div>

            <div className='form-container'>
                <label name="password">Password</label>
                <input type="text" name="password"  value={password} onChange={handleChange}/>
            </div>
            {error ? <h3 className='error'>{error}</h3> : null}
            <div className='register-button'>
                <button className='reg-button'>Register</button>
            </div>
        </form>


    </div>
  )
}

export default Registration