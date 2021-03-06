import React, {useState} from "react";


 
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <form className="login__form">
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