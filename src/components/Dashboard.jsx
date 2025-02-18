import React from 'react'

const Dashboard = () => {
  return (
    <div><div className="bg-gray-50 p-8 min-h-[350px] flex items-center justify-center font-sans">
    <div className="bg-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.2)] grid lg:grid-cols-4 sm:grid-cols-2 sm:gap-24 gap-12 rounded-3xl px-20 py-10">
      <div className="text-center">
        <h3 className="text-gray-800 text-4xl font-extrabold">5.4<span className="text-blue-600">+</span></h3>
        <p className="text-gray-500 text-base font-semibold mt-3">Total Users</p>
      </div>
      {/* <div className="text-center">
        <h3 className="text-gray-800 text-4xl font-extrabold">80<span className="text-blue-600">ETB+</span></h3>
        <p className="text-gray-500 text-base font-semibold mt-3">Revenue</p>
      </div> */}
      <div className="text-center">
        <h3 className="text-gray-800 text-4xl font-extrabold">100<span className="text-blue-600">+</span></h3>
        <p className="text-gray-500 text-base font-semibold mt-3">Engagement</p>
      </div>
      <div className="text-center">
        <h3 className="text-gray-800 text-4xl font-extrabold">99.9<span className="text-blue-600">+</span></h3>
        <p className="text-gray-500 text-base font-semibold mt-3">Total Categories</p>
      </div>
    </div>
  </div></div>
  )
}

export default Dashboard