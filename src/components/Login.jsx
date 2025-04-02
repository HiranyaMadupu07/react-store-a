import React from "react";
import { Link } from "react-router-dom";
import { appContext } from "../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export default function Login() {
  const {user, setUser, users, setUsers} = useContext(appContext);
  const Navigate = useNavigate();
  const[msg, setMsg] = useState();
  const handleSubmit = () => {
    const found = users.find((value) => value.email === user.email && value.password === user.password);
    if(found){
      Navigate("/");
    }
    else{
      setMsg("User not found!")
    }
  }
  return (
    <div>
      <h2>Login Form</h2>

      <p>
        <input type="text" placeholder="Email address"
        onChange={(e) => setUser({...user, email: e.target.value})}
        ></input>
      </p>
      <p>
        <input type="password" placeholder="Password"
        onChange={(e) => setUser({...user, password: e.target.value})}
        ></input>
      </p>
      <p>
        <button onClick={handleSubmit}>Log In</button>
      </p>
      <p>
        <Link to="../register">New User Register Here!</Link>
      </p>
    </div>
  );
}