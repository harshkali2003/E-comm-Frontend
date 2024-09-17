import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function Footer() {
  const [email , setEmail] = useState("")
  const navigate = useNavigate()

  const SubscribeUser = async (e)=>{
    e.preventDefault()
  let data = await fetch('https://e-comm-backend-pxwb.onrender.com/subscribe' ,{
    method:"post",
    body:JSON.stringify({email}),
    headers:{'Content-Type' : 'application/json'}
  })
  let result = await data.json()
  if(result){
    alert("Subscribed Successfully")
  }
  else{
    alert("Something went wrong")
  }
  }
  return (
    <div className='lg:grid grid-cols-4 bg-sky-700 text-center list-none text-white m-3 p-2 rounded-md md:grid grid-cols-4 bg-indigo-700 text-center list-none text-white m-3 p-2 rounded-md sm:flex flex-col flex-wrap'>
      <div>
        <p className='text-lg'>SHOP</p>
        
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/product">PRODUCTS</Link></li>
      </div>
      <div>
        <p className='text-lg'>HELP & SUPPORT</p>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/feedback">FEEDBACK</Link></li>
        <li><Link to="/privacy">Privacy Policy</Link></li>
      </div>
      <div>
        <p className='text-lg'>CONTACT</p>
        
        <li>online-shop@gmail.com</li>
        <li>+91-919929394</li>
        <li>Noida @ New Delhi</li>
      </div>
      <div>
        <p className='text-lg'>ADMIN</p>
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/all">ALL</Link></li>
      </div>
    </div>
  )
}
