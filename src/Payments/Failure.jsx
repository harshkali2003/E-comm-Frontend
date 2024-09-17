import React from 'react'
import { Link } from 'react-router-dom'


export default function Failure() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center flex flex-col h-fit justify-center items-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Payment Failed</h1>
        <p className="text-lg text-gray-600 mb-6">
          Unfortunately, your payment could not be processed at this time. Please try again later or contact support.
        </p>
        <Link
          to="/"
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 w-fit"
        >
          Back to Homepage
        </Link>
      </div>
    </div>
  )
}
