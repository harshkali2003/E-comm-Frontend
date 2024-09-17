import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Feedback() {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [desc , setDesc] = useState("")
    const navigate = useNavigate()

    const CollectData = async (e)=>{
        e.preventDefault()
        let data = await fetch('https://e-comm-backend-pxwb.onrender.com/feedback',{
            method:"post",
            body:JSON.stringify({name , email , desc}),
            headers:{'Content-Type' : 'application/json' ,    authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}` } 
        })
        let result = await data.json()
        if(result){
            alert("Your Response has been submitted")
            navigate('/')
        }
    }
  return (
    <div className='flex flex-col justify-center items-center bg-violet-400 text-xl gap-5 h-screen'>
      <form className='bg-white border-2 rounded-lg shadow-xl flex flex-col justify-center items-center gap-8 m-6 p-4 h-96 w-96 shadow-xl'>
        <input type="text" placeholder='YOUR NAME' className='border-2 w-full rounded-md border-rose-600 text-center' value={name} onChange={(e)=>{setName(e.target.value)}}/>
        <input type="email" placeholder='YOUR EMAIL' className='border-2 w-full rounded-md border-rose-600 text-center' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <textarea type="text" placeholder='DESCRIPTION' className='border-2 w-full rounded-md border-rose-600 text-center' value={desc} onChange={(e)=>{setDesc(e.target.value)}}/>
        <button type='submit' className='border-2 rounded-md p-2 m-3 bg-rose-500 text-white' onClick={CollectData}>SUBMIT</button>
      </form>
    </div>
  )
}
