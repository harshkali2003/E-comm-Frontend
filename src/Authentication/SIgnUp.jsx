import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function SIgnUp() {
  const[name , setName] = useState("")
  const[email , setEmail] = useState("")
  const[password , setPassword] = useState("")
  const navigate = useNavigate()

  const CollectData = async (e) =>{
    e.preventDefault()

    let data = await fetch('http://localhost:5000/register' ,{
      method:"post",
      body:JSON.stringify({name , email , password}),
      headers:{'Content-Type' : 'application/json'}
    })
    let result = await data.json()
    if(result){
      navigate('/log')
      localStorage.setItem('User',JSON.stringify(result.result))
      localStorage.setItem('Token' , JSON.stringify(result.auth))
    }
  }

  return (
    <div className='bg-indigo-100 h-screen w-screen flex justify-center items-center text-xl'>
      <div className='h-96 w-96 border-0 bg-white rounded-lg flex flex-col justify-center items-center gap-8 shadow-xl'>
        <input type="text" placeholder='Your Full Name' className='border-2 border-red-400 rounded-full text-center'value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="text" placeholder='Your Email' className='border-2 border-red-400 rounded-full text-center' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Your Password' className='border-2 border-red-400 rounded-full text-center' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit' className='border-2 bg-red-400 rounded-full p-2 text-white' onClick={CollectData}>Sign Up</button>
        <p>Already Registered <span className='text-red-600'><Link to="/log">Log In</Link></span></p>
      </div>
    </div>
  )
}
