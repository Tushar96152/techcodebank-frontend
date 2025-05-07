import React from 'react';
import NetBank from '../assets/netbank.jpg' 

const MobileBanking = () => {
  return (
    <div className="w-100% mt-35 font-sans">
      {/* Hero Banner */}
      <div className="w-100%">
        <h1 className='absolute text-5xl px-10 py-48 text-gray-800'> Tech Code Bank </h1>
        <img 
          className="w-[100vw] h-auto object-cover" 
          src={NetBank}
          alt="Mobile Banking Banner" 
        />
      </div>
      
      {/* App Showcase Section */}
      <div className="bg-[#003459] opacity-90  py-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
            Mobile Banking <br className="hidden md:block" /> Apps
          </h1>
          
          <button className="w-40 h-12 bg-[#FDBD30] rounded-lg border-none hover:bg-[#e0c17e] transition-colors duration-300 font-medium text-[#A20A3A] shadow-md">
            Explore now
          </button>
        </div>

      
      </div>
    {/* Features Grid */}
<div className="bg-[#f5f2f3] w-100% py-8 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
  {[
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOt_vPtQB5n84lyvUVbmvw1_zJdveHAs0wA&s",
      title: "DigiLoker",
      link: "https://www.digilocker.gov.in/" // Replace with actual link
    },
    {
      src: "https://www.presentations.gov.in/wp-content/uploads/2020/06/Aadhaar_Preview.png",
      title: "Aadhaar Link",
      link: "https://uidai.gov.in/en/" // Replace with actual link
    },
    {
      src: "https://www.presentations.gov.in/wp-content/uploads/2020/06/2.png",
      title: "Bill Pay",
      link: "https://www.mygov.in/" // Replace with actual link
    },
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcZnIn-Vjc4w_BlWJJx3R6AZqe_vNbxjKDg&s",
      title: "Investments",
      link: "https://meripehchaan.gov.in/" // Replace with actual link
    },
    {
      src: "https://static.mygov.in/media/blog/2022/11/CaptureG20.png",
      title: "G20 Offers",
      link: "https://www.india.gov.in/spotlight/group-twenty-g20" // Replace with actual link
    }
  ].map((item, index) => (
    <a 
      key={index}
      href={item.link}
      className="block bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <img 
        className="w-full h-32 md:h-40 object-cover" 
        src={item.src} 
        alt={`Feature ${item.title}`} 
      />
      <div className="p-3">
        <h3 className="text-sm md:text-base font-medium text-gray-800">
          {item.title}
        </h3>
      </div>
    </a>
  ))}
</div>
    </div>
  );
};

export default MobileBanking;