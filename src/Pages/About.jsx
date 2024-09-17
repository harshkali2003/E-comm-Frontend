import React from 'react'

export default function About() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://via.placeholder.com/1500x500" 
          alt="About Us Hero"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl text-white font-bold">
            About Us
          </h1>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 px-4 md:px-20 lg:px-40 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          At ONLINE SHOP, our mission is to provide the best products to our customers at affordable prices while offering exceptional customer service.
        </p>
      </div>

      {/* About the Company */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-20 lg:px-40">
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              Established in 2024, ONLINE SHOP has been a leader in the e-commerce industry, offering a wide range of products to customers around the globe. We are dedicated to bringing the latest trends and products at the best prices.
            </p>
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <p className="text-lg text-gray-600 mb-6">
              We are more than just a store. We pride ourselves on delivering value, quality, and an exceptional shopping experience. Our team works around the clock to ensure that we bring you the very best.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
