import React from 'react'
import { Link } from 'react-router-dom'


export default function Success() {
  return (
    <div className="flex flex-col items-center justify-center h-fit bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg text-center h-fit flex flex-col">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-green-500 mx-auto mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2l4 -4m6 0a9 9 0 1 1 -9 -9"
        />
      </svg>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Payment Successful!</h1>
      <p className="text-gray-600 mb-6">Thank you for your purchase. Your transaction was completed successfully.</p>
      <Link
        to="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
      >
        Go to Homepage
      </Link>
    </div>
  </div>
  )
}
