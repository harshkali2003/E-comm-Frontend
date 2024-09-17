import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function LogIn() {
  const [email , setEmail] = useState("")
  const [password , setPassword] = useState("")
  const navigate = useNavigate()

  const CollectData = async (e)=>{
    e.preventDefault()

    let data = await fetch('http://localhost:5000/logUser' , {
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{'Content-Type':'application/json'}
    })
    let result = await data.json()
    if(result){
      navigate('/')
      localStorage.setItem('User',JSON.stringify(result.data))
      localStorage.setItem('Token' , JSON.stringify(result.auth))
    }
    else{
      navigate('/sign')
    }
  }

  return (
    <div className='bg-white h-screen w-screen flex justify-center items-center text-xl'>
      <div className='h-96 w-96 border-0 bg-cyan-600 rounded-lg flex flex-col justify-center items-center gap-8 shadow-xl' >
        <input type="text" placeholder='Your Email' className='border-2 border-white rounded-full text-center'value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <input type="password" placeholder='Your Password' className='border-2 border-white rounded-full text-center'value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        <button type='submit' className='border-2 bg-white rounded-full p-2 text-black' onClick={CollectData} >Log In</button>
        <p>New User <span className='text-red-600'><Link to="/sign">Sign Up</Link></span></p>
      </div>
    </div>
  )
}
