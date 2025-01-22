import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useStateContext } from '../contexts/ContextProvider';
import News from '../components/News';
const Home = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const toggleQuestion = (index) => {
    setActiveQuestion((prev) => (prev === index ? null : index));
  };
  const {currentColor}  = useStateContext();
  return (
   <div className="max-w-[1920px] mx-auto dark:bg-gray-600">
  <div className="dark:text-gray-50 text-black text-[15px]">
    <div className="px-4 sm:px-10">
      <div className="min-h-[450px]">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10">
          <div className="max-md:order-1">
            <p className="mt-4 mb-2 font-semibold text-blue-600"><span className="rotate-90 inline-block mr-2">|</span>  Welcome To ECC Alumni </p>
              
  <h1 className="md:text-5xl text-4xl font-bold mb-4 md:!leading-[55px]">
    GROW THE NETWORK
  </h1>
  <p className="mt-4 text-base leading-relaxed">
    It is not just about building the network. We should all join together, 
    support the Ethiopian Customs Commission in their challenges, and 
    share our knowledge for mutual growth.
  </p>
  <div
              className="bg-white mt-10 flex px-1 py-1.5 rounded-full shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden">
              <input type='email' placeholder='Search Something...' className="w-full outline-none bg-white pl-4" />
              <button 
  type="button" 
  style={{ backgroundColor: currentColor }}
  className="hover:bg-blue-700 transition-all text-white rounded-full px-5 py-2.5"
>
  Search
</button>

            </div>
      
            {/* <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
              <img src="https://readymadeui.com/google-logo.svg" className="w-28 mx-auto" alt="google-logo" />
              <img src="https://readymadeui.com/facebook-logo.svg" className="w-28 mx-auto" alt="facebook-logo" />
              <img src="https://readymadeui.com/linkedin-logo.svg" className="w-28 mx-auto" alt="linkedin-logo" />
              <img src="https://readymadeui.com/pinterest-logo.svg" className="w-28 mx-auto" alt="pinterest-logo" />
            </div> */}
          </div>
          <div className="max-md:mt-12 h-full relative">
  <img src="ecc_team.jpg" alt="banner img" className="w-full h-full object-cover" />
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-opacity-30">
    <h1 className="text-4xl md:text-5xl font-bold mb-4">
      Welcome to ECC Alumni, Ethiopia
    </h1>
    <Link  style={{ backgroundColor: currentColor }}
  to={"/membership"} className="px-6 py-3 mt-4 text-lg font-semibold  hover:bg-blue-700 rounded-lg shadow-lg">
      Join Community
    </Link>
  </div>
</div>

        </div>
      </div>

      <div className=" dark:text-gray-50 px-4 sm:px-10 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="md:text-center max-w-2xl mx-auto">
            <h2 className="md:text-4xl text-3xl font-bold mb-6">Our Purpose of Alumni Association </h2>
            <p className="mt-4 text-base leading-relaxed">
  Our purpose is to foster lifelong connections, empower employees to contribute to the growth of the Ethiopian Customs Commission, and create opportunities for knowledge sharing, mentorship, and collaboration within our community.
</p>

          </div>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-10 mt-14">
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block" viewBox="0 0 32 32">
  <path d="M12 4.5c-5.05 0-9.27 3.11-10.73 7.5 1.46 4.39 5.68 7.5 10.73 7.5s9.27-3.11 10.73-7.5c-1.46-4.39-5.68-7.5-10.73-7.5zm0 12c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5-1.57-3.5-3.5-3.5z" />
</svg>

              <h3 className="text-xl font-semibold mb-2">Vision</h3>
              <p>ECC Vision</p>
              <a href="javascript:void(0);" className="text-blue-600 font-semibold inline-block mt-2 hover:underline">Learn
                more</a>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block"
                viewBox="0 0 682.667 682.667">
                <defs>
                  <clipPath id="a" clipPathUnits="userSpaceOnUse">
                    <path d="M0 512h512V0H0Z" data-original="#000000" />
                  </clipPath>
                </defs>
                <g fill="none" className="stroke-blue-600" stroke-linecap="round" stroke-linejoin="round"
                  stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)"
                  transform="matrix(1.33 0 0 -1.33 0 682.667)">
                  <path
                    d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z"
                    data-original="#000000" />
                  <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
                </g>
              </svg>
              <h3 className="text-xl font-semibold mb-2">Mission</h3>
              <p>ECC mission</p>
              <a href="javascript:void(0);" className="text-blue-600 font-semibold inline-block mt-2 hover:underline">Learn
                more</a>
            </div>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-8 fill-blue-600 mb-4 inline-block"
                viewBox="0 0 512.001 512.001">
                <path
                  d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z"
                  data-original="#000000" />
              </svg>
              <h3 className="text-xl font-semibold mb-2">Objective</h3>
              <p>ECC Objective here.</p>
              <a href="javascript:void(0);" className="text-blue-600 font-semibold inline-block mt-2 hover:underline">Learn
                more</a>
            </div>
   
          </div>
        </div>
      </div>

      <div className="mt-4 ">
        <div className="mt-2">
          <div className="grid md:grid-cols-2 items-center gap-16">
            <div>
              <img src="mission-vission.jpg"
                className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" />
            </div>
            <div className="max-w-lg">
              <h3 className="text-xl font-semibold mb-4">Our Vision and Mission.</h3>
              <p className="text-base  dark:text-gray-300 mb-2">
                <strong>Vision:</strong> To be a dynamic network of ECC alumni in Ethiopia, fostering a community of lifelong connections, professional growth, and impactful contributions to society.</p>
                    <p className="text-base text-gray-900 dark:text-gray-300">
                      <strong>Mission:</strong> To support ECC alumni by creating opportunities for collaboration, knowledge-sharing, and career development, while promoting the values and vision of ECC to contribute to national and global progress.
                    </p>  <button type="button"
                                style={{ backgroundColor: currentColor }}
                  
                                  className=" hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all">
                                  Learn More
                                </button>
            </div>
            {/* <div className="max-md:order-1 max-w-lg">
              <h3 className="text-xl font-semibold mb-4">Optimized Performance</h3>
              <p>Unlock top-notch performance with our advanced optimization techniques. We prioritize speed,
                efficiency, and reliability to ensure a seamless experience, no matter the complexity of your tasks.</p>
              <button type="button"
               style={{ backgroundColor: currentColor }}
 
                className=" hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-8 transition-all">
                Learn More
              </button>
            </div>
            <div>
              <img src="https://readymadeui.com/contact.webp"
                className="w-full object-contain rounded-md shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)]" />
            </div> */}
          </div>
        </div>
      </div>

    <News />
      {/* <div className="mt-28">
        <div className="grid md:grid-cols-2 justify-center items-center gap-10">
          <div>
            <h2 className="md:text-4xl text-3xl font-bold mb-6">Unlock Premium Features</h2>
            <p>Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit
              occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>
            <button type="button"
             style={{ backgroundColor: currentColor }}
 
              className=" hover:bg-blue-700 text-white rounded-full px-5 py-2.5 mt-6 transition-all">
              Upgrade Now
            </button>
          </div>
          <div className="text-center">
            <img src="https://readymadeui.com/login-image.webp" alt="Premium Benefits" className="w-full mx-auto" />
          </div>
        </div>
      </div>

      <div className="mt-28 bg-gray-50 px-4 sm:px-10 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="space-y-6 bg-gray-100 rounded-md p-6 max-w-md max-md:order-1">
              <div className="flex sm:items-center max-sm:flex-col-reverse">
                <div className="mr-3">
                  <h4 className="text-base font-semibold">John Doe</h4>
                  <p className="mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim
                    aute sit.</p>
                </div>
                <img src='https://readymadeui.com/profile_2.webp' className="w-16 h-16 rounded-full max-sm:mb-2" />
              </div>
              <div
                className="flex sm:items-center max-sm:flex-col-reverse p-6 relative lg:left-12 bg-white shadow-[0_2px_20px_-4px_rgba(93,96,127,0.2)] rounded-md">
                <div className="mr-3">
                  <h4 className="text-base font-semibold">Mark Adair</h4>
                  <p className="mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim
                    aute sit.</p>
                </div>
                <img src='https://readymadeui.com/profile_3.webp' className="w-16 h-16 rounded-full max-sm:mb-2" />
              </div>
              <div className="flex sm:items-center max-sm:flex-col-reverse">
                <div className="mr-3">
                  <h4 className="text-base font-semibold">Simon Konecki</h4>
                  <p className="mt-2">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim
                    aute sit.</p>
                </div>
                <img src='https://readymadeui.com/profile_4.webp' className="w-16 h-16 rounded-full max-sm:mb-2" />
              </div>
            </div>
            <div>
              <h6 className="text-xl font-bold text-gray-300 mb-4">Testimonials</h6>
              <h2 className="md:text-4xl text-3xl font-bold">We are loyal with our customer</h2>
              <div className="mt-4">
                <p>Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Elit
                  occaecat officia et laboris Lorem minim. Officia do aliqua adipisicing ullamco in.</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

    
      <div className="mt-10 bg-white px-4 sm:px-10 py-12 space-y-6">
      <div className="md:text-center max-w-2xl mx-auto mb-14">
        <h2 className="md:text-4xl text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <p>
          Explore common questions and find answers to help you make the most out of our services. 
          If you don't see your question here, feel free to contact us for assistance.
        </p>
      </div>

      {[{
        question: "What items are exempt from customs duties in Ethiopia?",
        answer:
          "Certain goods, such as items for diplomatic missions, humanitarian aid, and personal effects of travelers (within specified limits), may be exempt from customs duties. Detailed information on exemptions is outlined in the customs regulations.",
      },
      {
        question: "How can I calculate the customs duties for imported goods?",
        answer:
          "Customs duties are calculated based on the item's value, classification under the Harmonized System (HS) code, and applicable duty rates. Importers can contact the Ethiopian Customs Commission or use online tools for accurate estimations.",
      },
      {
        question: "What is the procedure for reporting suspected customs violations?",
        answer:
          "To report suspected customs violations, such as smuggling or undervaluation, you can contact the Ethiopian Customs Commission hotline or submit an online complaint through the commission's official website. All reports are treated confidentially.",
      },
      {
        question: "What are the required documents for customs clearance in Ethiopia?",
        answer:
          "The key documents include: Commercial Invoice, Bill of Lading or Air Waybill, Packing List, Certificate of Origin, and Import Permit or License (if applicable). Ensure all documents are accurate to avoid delays or penalties during clearance.",
      }].map((faq, index) => (
        <div
          key={index}
          className={`shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] border-2 ${
            activeQuestion === index ? "border-blue-600" : "border-transparent"
          } rounded-md transition-all`}
          role="accordion"
        >
          <button
            type="button"
            onClick={() => toggleQuestion(index)}
            className="w-full font-semibold text-left py-5 px-6 flex items-center"
          >
            <span className="text-base mr-4">{faq.question}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-4 fill-current ml-auto shrink-0 ${
                activeQuestion === index ? "rotate-180" : "-rotate-90"
              }`}
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                d="M11.99997 18.1669a2.38 2.38 0 0 1-1.68266-.69733l-9.52-9.52a2.38 2.38 0 1 1 3.36532-3.36532l7.83734 7.83734 7.83734-7.83734a2.38 2.38 0 1 1 3.36532 3.36532l-9.52 9.52a2.38 2.38 0 0 1-1.68266.69734z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          {activeQuestion === index && (
            <div className="pb-5 px-6">
              <p>{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
      
    </div>
    
    </div>


  </div>

      <div class="bg-gradient-to-r from-blue-700 to-[#B06AB3] font-sans px-6 py-12">
      <div class="container mx-auto flex flex-col justify-center items-center text-center">
        <h2 class="text-white sm:text-4xl text-3xl font-bold mb-4">Join Our Community! </h2>
        <p class="text-white text-base text-center mb-8">Welcome to our ECC Alumni community—where opportunities and meaningful connections thrive.</p>

        <Link to="/register"  class="bg-white text-sm text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-slate-100">
        Join Our Community
        </Link>
      </div>
    </div>
</div>
 

  );
};

export default Home;
