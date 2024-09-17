import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function UserProfile() {
    const navigate = useNavigate()
    const auth = localStorage.getItem('User')
    const RemoveUser = ()=>{
        localStorage.clear()
        navigate('/')
    }
  return (
    <div className='flex justify-center items-center bg-teal-300 text-xl h-screen'>
      <div className='flex flex-col justify-center items-center gap-10 border-2 rounded-lg bg-sky-600 text-white shadow-xl ' style={{width:"44rem", height:"28rem"}}>
        <h1 className='text-4xl font-semibold font-serif'>WELCOME</h1>
        <h3><span className='font-serif font-semibold'>MY NAME</span> {JSON.parse(auth).name}</h3>
        <h3> <span className='font-serif font-semibold'> MY EMAIL</span> {JSON.parse(auth).email}</h3>
        <h3><span className='font-serif font-semibold'> TOTAL ORDERS {0}</span></h3>
        <button className='border-2 bg-red-500 rounded-md p-2' onClick={RemoveUser}>LOG OUT</button>
      </div>
    </div>
  )
}
