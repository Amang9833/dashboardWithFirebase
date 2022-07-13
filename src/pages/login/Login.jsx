import "./login.scss"
import React, {useContext, useState} from 'react'
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../firebase'
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";


const Login = () => {
  const [error, setError] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const Navigate = useNavigate()

  const { dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: { user } })
        Navigate('/')
        setError(false);
      })
      .catch((error) => {
        setError(true)
        console.log(error)
      })

  }

  
  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}/>
        <input type="password" placeholder="*******" onChange={e => setPassword(e.target.value)}/>
        <button type="submit">Login</button>
       {error && <span>Worng email or password</span>}
      </form>
    </div>
  )
}

export default Login