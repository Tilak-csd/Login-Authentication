import React, {useEffect, useState} from 'react'

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const RegisterFormSubmit = ()=>{

    }
    

  return (
    <div>
        <div>
            <h2>Register</h2>
            <h3>Username</h3>
            <input type="text" placeholder="Enter Username" onChange={(e)=>{setUsername(e.target.value)}} required /><br />
            <h3>Email</h3>
            <input type="email" placeholder="Enter your email"  onChange={(e)=>{setEmail(e.target.value)}} required /><br />
            <h3>Password</h3>
            <input type="password" placeholder="Enter Password" onChange={(e)=>{setPassword(e.target.value)}} required /><br />

            <button onClick={RegisterFormSubmit()}>Register</button>

        </div>
    </div>
  )
}
