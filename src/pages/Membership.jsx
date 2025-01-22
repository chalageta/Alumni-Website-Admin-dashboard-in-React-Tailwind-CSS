import React from 'react'
import { Link } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'

const Membership = () => {
  const {currentColor} = useStateContext();
  return (
    <div>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="membership.jpg" alt="membership" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 class="sm:text-4xl text-2xl font-bold mb-6">ECC Alumni Membership </h2>
        <p class="sm:text-lg text-base text-center text-gray-200">Welcome to our ECC Alumni community—where opportunities and meaningful connections thrive.</p>
        <Link
      to="/register"
      style={{ '--hover-bg': currentColor }}
      className="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-[var(--hover-bg)] hover:text-white transition duration-300"
    >
      Join Our Community
    </Link>

      </div>
    </div>
      <div className="bg-gray-100 px-6 py-12 font-sans">
      <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="max-h-90">
            <img src="criteria.avif" alt="criteria" className="rounded-md object-cover w-full h-full" />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold text-purple-700 mb-4">Welcome to the ECC Alumni membership page!</h2>
            <p className="text-gray-600 text-sm leading-6">
            Membership Criteria: </p>
            <ul className="list-disc text-sm text-gray-600 space-y-2 pl-4 mt-6">
              <li>Discover innovative ideas.</li>
              <li>Create unique projects.</li>
              <li>Collaborate with like-minded individuals.</li>
              <li>Transform your visions into reality.</li>
            </ul>
            <p>Thank you for your interest in joining the ECC Alumni.</p>
            <div className="mt-6">
              <a href="/register" className="text-purple-600 text-sm font-semibold hover:underline">Get Started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default Membership