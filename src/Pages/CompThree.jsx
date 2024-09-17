import React , {useState} from 'react'
import gImage from '../assets/Images/greeting-women.jpg'

export default function CompThree() {
    const [email , setEmail] = useState("")
  
    const SubscribeUser = async (e)=>{
      e.preventDefault()
    let data = await fetch('http://localhost:5000/subscribe' ,{
      method:"post",
      body:JSON.stringify({email}),
      headers:{'Content-Type' : 'application/json' , 
         authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}`
      }
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
    <div className='flex flex-wrap h-fit w-fit justify-center items-center text-xl '>
      <div>
        <img src={gImage} alt="" />
      </div>
      <div className='flex flex-col justify-center items-center text-2xl gap-3'>
        <p className='text-5xl font-bold text-cyan-600 shadow-md'>SUBSCRIBE</p>
        <p> <span className='text-red-700 shadow-md'>Why Subscribe ?</span> <span>Subscribe to be updated</span></p>
        <div className='m-2 flex flex-col justify-center items-center gap-3'>
        <input type="text" className='rounded-full text-center text-violet-500 border-2 border-rose-500 sm:w-fit' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
        <button className='border-2 bg-rose-800  text-white w-fit p-1 rounded-full ' onClick={SubscribeUser}>subscribe</button>
        </div>
      </div>
    </div>
  )
}
