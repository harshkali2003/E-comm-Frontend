import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Contact() {
  const [name , setName] = useState("")
  const [email , setEmail] = useState("")
  const [message , setMessage] = useState("")
  const navigate = useNavigate()

  const handleResponse = async (e)=>{
    e.preventDefault()
    let data = await fetch('http://localhost:5000/contact' , {
      method:"post",
      body:JSON.stringify({name,email,message}),
      headers:{'Content-Type' : 'application/json' , authorization :`bearer ${JSON.parse(localStorage.getItem('Token'))}`}
    })
    let result = await data.json()
    if(result){
      alert("We have received your message , we will contact you soon")
      navigate('/')
    }
    else{
      alert("Something went wrong")
    }
  }
  return (
     <div className="bg-gray-100 min-h-screen">
     
      <div className="relative">
        <img
          src="https://via.placeholder.com/1500x500"
          alt="Contact Us Hero"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">Contact Us</h1>
        </div>
      </div>

      <div className="py-12 px-4 md:px-20 lg:px-40 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Get In Touch
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          We're here to help! Reach out to us through any of the channels below or use the contact form to send us a message.
        </p>
      </div>

      
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 lg:px-40">
         
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Contact Form
            </h3>
            <form className="space-y-6">
              <div>
                <label className="block text-left text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                  placeholder="Your name" value={name} onChange={(e)=>{setName(e.target.value)}}
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                  placeholder="Your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}
                />
              </div>
              <div>
                <label className="block text-left text-gray-700 font-medium">Message</label>
                <textarea
                  rows="5"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 focus:border-blue-500"
                  placeholder="Write your message here" value={message} onChange={(e)=>{setMessage(e.target.value)}}
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
              onClick={handleResponse}>
                Send Message
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              Contact Details
            </h3>
            <div className="text-left space-y-4 text-gray-600">
              <div>
                <h4 className="text-xl font-medium text-gray-800">Email</h4>
                <p>support@online-shop.com</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Phone</h4>
                <p>(+91) 915528</p>
              </div>
              <div>
                <h4 className="text-xl font-medium text-gray-800">Address</h4>
                <p>Online Shop, Noida, New Delhi</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-medium text-gray-800 mb-2">Visit Us</h4>
              <iframe
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.3565489057787!2d77.36376307495402!3d28.55905423741457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5efdb0b524b%3A0xfe4051a74a0f8c3e!2sBlock%20A%2C%20Sector%2048%2C%20Noida%2C%20Uttar%20Pradesh%20201303!5e0!3m2!1sen!2sin!4v1725873839219!5m2!1sen!2sin"
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
