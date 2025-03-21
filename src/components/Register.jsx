import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom'
import './Register.css';
export default function Register() {
    const [details, setDetails] = useState([]);
    const [detail, setDetail] = useState({});
    const handleSubmit = () => {
    const isExistingUser = details.some((user) => user.email === detail.email);
    if (isExistingUser) {
      alert("User with this email already exists.");
    } else {
      setDetails([...details, detail]);
    }
      };
      const handleDelete=(value)=>{
        setDetails(details.filter((element,i) => element !=value));
      }
  return (
    <div className="container">
        <div className="left-div">
      <h3>Registration Form</h3>
      <p><input type="text" placeholder='Enter Name'
      onChange={(e) => setDetail({ ...detail, name: e.target.value })}></input></p>
      <p><input type="text" placeholder='Email address'
      onChange={(e) => setDetail({ ...detail, email: e.target.value })}></input></p>
      <p><input type="password" placeholder='New password'
      onChange={(e) => setDetail({ ...detail, password: e.target.value })}></input></p>
      <p><button onClick={handleSubmit}>Submit</button></p>
      <p><Link to="../login">Already a member? Login here!</Link></p>
    </div>
    <div className="right-div">
        <h4>Details</h4>
        <table>
          {details &&
            details.map((value, index) => (
              <tr>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.password}</td>
                <button onClick={()=>handleDelete(value)}>Delete</button>

              </tr>
            ))}
        </table>
      </div>
    </div>
  )
}