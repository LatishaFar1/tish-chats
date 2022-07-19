import React, {useState} from 'react'
import { signInWithEmailAndPassword} from "firebase/auth";
import {auth, db} from "../firebase";
import { doc,  updateDoc} from "firebase/firestore";
import { useNavigate } from "react-router-dom";


function Login({user}) {

    let navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
        error: null
    });


    const { email, password, error} = data;

    const handleChange = e => {
        setData({...data, [e.target.name]: e.target.value })
    }

    const handleRegister = async (e) => {
        e.preventDefault();
        setData({ ...data, error: null });
        if ( !email || !password) {
          setData({ ...data, error: "Please fill out each line" });
        }
        try {
          const result = await signInWithEmailAndPassword(
            auth,
            email,
            password
          );
          console.log(result.user);
          await updateDoc(doc(db, "users", result.user.uid), {
            isOnline: true,
          });
          setData({
            email: "",
            password: "",
            error: null,
          });
          navigate("/chat");
        } catch (error) {
          setData({ ...data, error: error.message});
        }
      };

  return (
    <div className='register'>
            <h1 className='register-h1'>Login</h1>
        <form onSubmit={handleRegister}>
            <br/>

            <div className='form-container'>
                <label name="email">Email</label>
                <input type="text" name="email"  value={email} onChange={handleChange}/>
            </div>

            <div className='form-container'>
                <label name="password">Password</label>
                <input type="password" name="password"  value={password} onChange={handleChange}/>
            </div>
            {error ? <h3 className='error'>{error}</h3> : null}
            <div className='register-button'>
                <button className='reg-button'>Login</button>
            </div>
        </form>


    </div>
  )
}

export default Login