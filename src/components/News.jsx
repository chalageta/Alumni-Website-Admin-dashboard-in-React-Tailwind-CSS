import React from 'react'
import { useStateContext } from '../contexts/ContextProvider'

const News = () => {
      const {currentColor}  = useStateContext();
  return (
    
    <div className="mt-4 dark:text-gray-50 px-4 sm:px-10 py-12">
    <div class="max-w-full mx-auto">
 <div class="text-center">
   <h2 class="text-3xl font-extrabold text-gray-800 inline-block relative after:absolute after:w-4/6 after:h-1 after:left-0 after:right-0 after:-bottom-4 after:mx-auto after:bg-pink-400 after:rounded-full">Our Latest
   News</h2>
 </div>
 <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-16 max-lg:max-w-3xl max-md:max-w-md mx-auto">

   <div class="dark:text-gray-50 dark:bg-gray-800 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
   <img src="acheivements.jpg" alt="Blog Post 1" class="w-full h-60 object-cover" />   <div class="p-6">
       <span class="text-sm block text-gray-400 mb-2">20 DEC 2023 | BY Chala Geta</span>
       <h3 class="text-xl font-bold dark:text-gray-50 text-gray-800">Celebrating ECC Alumni Achievements</h3>
       <hr class="my-4" />
       <p class="text-gray-400 dark:text-gray-50 text-sm">We take a moment to recognize the exceptional contributions of our alumni to various industries. Their achievements continue to inspire future graduates.</p>
       <a style={{backgroundColor: currentColor}} href="javascript:void(0);" class="mt-4 inline-block px-4 py-2 rounded tracking-wider  hover:bg-orange-600 text-white text-[13px]">Read More</a>
       </div>
   </div>
   <div class="dark:bg-gray-800 dark:text-gray-50 cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
   <img src="community.jpg" alt="Blog Post 2" class="w-full h-60 object-cover" /><div class="p-6">
       <span class="text-sm block text-gray-400 mb-2">15 DEC 2023 | BY Elias</span>
       <h3 class="text-xl font-bold dark:text-gray-50 text-gray-800">The Impact of ECC Alumni on Local Communities</h3>
       <hr class="my-4" />
       <p class="dark:text-gray-50 text-gray-400 text-sm">Our alumni are not only excelling in their careers but are also making a profound impact on the communities they serve. Discover how they are giving back.</p>
       <a href="javascript:void(0);" style={{backgroundColor: currentColor}} class="mt-4 inline-block px-4 py-2 rounded tracking-wider  hover:bg-orange-600 text-white text-[13px]">Read More</a>
       </div>
   </div>
   <div class="dark:bg-gray-800 dark:text-gray-50  cursor-pointer rounded overflow-hidden shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative top-0 hover:-top-2 transition-all duration-300">
     <img src="ecc_teams.jpg" alt="Blog Post 3" class="w-full h-60 object-cover" />   <div class="p-6">
       <span class="text-sm block text-gray-400 mb-2">10 DEC 2024 | BY Bona</span>
       <h3 class="text-xl font-bold  dark:text-gray-50  text-gray-800">ECC Alumni Networking Event Recap</h3>
       <hr class="my-4" />
       <p class=" dark:text-gray-50  text-gray-400 text-sm">The annual ECC Alumni networking event brought together ECC Employees from all over the world. Check out highlights and key takeaways from the event.</p>
       <a href="javascript:void(0);" style={{backgroundColor: currentColor}} class="mt-4 inline-block px-4 py-2 rounded tracking-wider  hover:bg-orange-600 text-white text-[13px]">Read More</a>
       </div>
   </div>
 </div>
</div>
</div>
  )
}

export default News