import React, { useState } from 'react';
import axios from "axios";


export default function Register() {
    const [firstName,setFirstName]=useState("")
    const [lastName,setLastName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
 
    // let userSchema = object({
    //     firstName: string().required().length(10),
    //     lastName: string().required().length(10),
    
    //     email: string().required().email(),
    //     password:string().required().length(5)
    //   });

const handleFirstName=(e)=>{

        setFirstName(e.target.value)
        
        

}
const handleLastName=(e)=>{
    setLastName(e.target.value)
    

}
const handleEmail=(e)=>{
setEmail(e.target.value)
    

}
const handlePassword=(e)=>{
    setPassword(e.target.value)
    

}
// const userValidate= userSchema.validate(
//     {
//         firstName,lastName,email,password
//     }
// )
const submitForm=async(e)=>{
   try {
    e.preventDefault();
   
    const response= await axios.post("http://localhost:3030/signup",{firstName,lastName,email,password})
    console.log(response);
    alert("registration successful");

   } catch (error) {
    console.error(error);
    alert("try new credentials")
   }


  
}

  return (
    <div className='reg-holder'>
     <h1 className='registration-heading'>
     This is the Register page
     </h1>
      <form className='register' onSubmit={submitForm}>
        <input type="text" name="first" placeholder='firstname' onChange={handleFirstName} value={firstName} required/>
        <input type="text" name="last" placeholder='lastname' onChange={handleLastName} value={lastName} required />
        <input type="email" placeholder='email'onChange={handleEmail} value={email} required />
        <input type="password" placeholder='password' onChange={handlePassword} value={password} required />
        <button type='submit'> Submit</button>

      </form>
    </div>
  )
}
