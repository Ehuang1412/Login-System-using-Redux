import React, {useState} from "react";
import {useDispatch} from "react-redux";
import { login } from "../features/userSlice";



 
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    //input data to reducer or slice
    dispatch(
      login({
        name:name,
        email: email,
        password: password,
        loggedIn: true,
    })
    );
  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e)=>handleSubmit(e)}>
        <h1> Login Here </h1>
        <input 
        type="name" 
        placeholder="Name" 
        value= {name}
        onChange={(e)=>setName(e.target.value)}/>
        <input 
        type="Email" 
        placeholder="Email" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>
        <input 
        type="Password" 
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}/>
      </form>
      <button type="submit" className="submit__btn">
      Submit
      </button>
    </div>
  )
}

export default Login;