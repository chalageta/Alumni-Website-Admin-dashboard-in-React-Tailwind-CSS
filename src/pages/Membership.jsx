import React from 'react'
import { Link } from 'react-router-dom'

const Membership = () => {
  return (
    <div>
    <div class="relative font-sans before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-50 before:z-10">
      <img src="https://z-p3-scontent.fadd2-1.fna.fbcdn.net/v/t39.30808-6/469995785_897010042621632_4316432272141485109_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHPiGEGQudLRHs1gFfXe_pfaNFQe9rfpDRo0VB72t-kNInbPZ8_Mkq8s1YylLMO_4MdlK4byKVixgAOD32Yltqr&_nc_ohc=EYGVzDsdq1wQ7kNvgHENqji&_nc_zt=23&_nc_ht=z-p3-scontent.fadd2-1.fna&_nc_gid=AjbAbc07-8QnxneiCcldyVE&oh=00_AYCnTetyO9zG-vkfl2FtVvAvCPFZWX92pACjpaDsoSGC1A&oe=6771EFF5" alt="Banner Image" class="absolute inset-0 w-full h-full object-cover" />

      <div class="min-h-[300px] relative z-50 h-full max-w-6xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
        <h2 class="sm:text-4xl text-2xl font-bold mb-6">ECC Alumni Membership </h2>
        <p class="sm:text-lg text-base text-center text-gray-200">Welcome to our ECC Alumni community—where opportunities and meaningful connections thrive.</p>
            <Link
          to="/register"
          class="mt-12 bg-transparent text-white text-base py-3 px-6 border border-white rounded-lg hover:bg-white hover:text-black transition duration-300">
          Join Our Community
        </Link>
      </div>
    </div>
      <div className="bg-gray-100 px-6 py-12 font-sans">
      <div className="lg:max-w-7xl max-w-lg mx-auto px-6 py-8 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="max-h-80">
            <img src="https://readymadeui.com/management-img.webp" alt="Image" className="rounded-md object-cover w-full h-full" />
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