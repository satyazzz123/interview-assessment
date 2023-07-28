import React, { useState } from 'react';
import axios from "axios"

export default function Login() {
  
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")




const handleEmail=(e)=>{
setEmail(e.target.value)
    

}
const handlePassword=(e)=>{
    setPassword(e.target.value)
    

}
const submitForm=async(e)=>{
   try {
    e.preventDefault();
    const response= await axios.post(`http://localhost:3030/users/${email}/login`,{password})
    console.log(response);
    alert("login successful")
   } catch (error) {
    console.error(error);
    alert("wrong credentials")
   }


  
}
  return (
    <div>
        <h1>
        This is login page 
        </h1>

   <form className='login' onSubmit={submitForm}>
        
        <input type="email" placeholder='email'onChange={handleEmail} value={email} required />
        <input type="password" placeholder='password' onChange={handlePassword} value={password} required />
        <button type='submit'> Submit</button>

      </form>
    </div>
  )
}
