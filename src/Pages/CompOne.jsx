import React from 'react'
import Candles from '../assets/Images/candles.jpg'
import { Link } from 'react-router-dom'


export default function CompOne() {
  return (
    <div className='lg:grid grid-cols-2 rounded-xl sm:grid grid-cols-2'>
      <div className='flex flex-col justify-center items-center bg-yellow-200'>
        <h1 className='font-bold text-5xl font-sans'>The Gift Of <span className='block'>Good Style</span></h1>
        <p className='text-center p-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. <span className='block text-center'>Officiis reiciendis mollitia unde amet obcaecati quam vitae cumque molestiae quaerat nobis!</span></p>
        <button className='border-2 rounded-full bg-rose-400 text-white m-5 p-3'><Link to="/product">SHOP NOW</Link></button>
      </div>
      <div>
        <img src={Candles} alt="" />
      </div>
    </div>
  )
}
