import React from 'react';

const MobileBanking = () => {
  return (
    <div className="w-100% mt-35 font-sans">
      {/* Hero Banner */}
      <div className="w-100%">
        <img 
          className="w-[100vw] h-auto object-cover" 
          src="https://i.ytimg.com/vi/CT8JDs3UOds/maxresdefault.jpg" 
          alt="Mobile Banking Banner" 
        />
      </div>
      
      {/* App Showcase Section */}
      <div className="bg-[#A20A3A]  py-6 md:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <h1 className="text-white font-bold text-2xl md:text-3xl lg:text-4xl">
            Mobile Banking <br className="hidden md:block" /> Apps
          </h1>
          
          <button className="w-40 h-12 bg-[#FDBD30] rounded-lg border-none hover:bg-[#e0c17e] transition-colors duration-300 font-medium text-[#A20A3A] shadow-md">
            Explore now
          </button>
        </div>

        <div className="flex w-100% flex-wrap justify-center gap-4 md:gap-6">
          {[
            "https://play-lh.googleusercontent.com/MEwq5qTUC69E9Y5_PmEPm0I54UPnIY6p-GhOvmLRYaWjj2QWEGwC_KxtoxU-cp4X0M8=w600-h300-pc0xffffff-pd",
            "https://play-lh.googleusercontent.com/E9h1qxsL8tYMnAKDODFg-Qhvp41Q1InGDf6CcCl9gZixy1kZb0aXou_5yrIEKgg9gA",
            "https://play-lh.googleusercontent.com/O69d4U5xBTm4iC-oWns0IXr5e4LZ2v3fHaUuGEx9i6CB0tGc6me9rWZ4h9wDDq-PSg",
            "https://play-lh.googleusercontent.com/MEwq5qTUC69E9Y5_PmEPm0I54UPnIY6p-GhOvmLRYaWjj2QWEGwC_KxtoxU-cp4X0M8=w600-h300-pc0xffffff-pd"
          ].map((src, index) => (
            <div 
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-lg p-2 flex items-center justify-center shadow-md hover:scale-105 transition-transform"
            >
              <img 
                className="w-full h-full object-contain" 
                src={src} 
                alt={`Bank app ${index + 1}`} 
              />
            </div>
          ))}
        </div>
      </div>
      
      {/* Features Grid */}
      <div className="bg-[#f5f2f3] w-100% py-8 px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {[
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoOt_vPtQB5n84lyvUVbmvw1_zJdveHAs0wA&s",
          "https://www.presentations.gov.in/wp-content/uploads/2020/06/Aadhaar_Preview.png",
          "https://www.presentations.gov.in/wp-content/uploads/2020/06/2.png",
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxcZnIn-Vjc4w_BlWJJx3R6AZqe_vNbxjKDg&s",
          "https://static.mygov.in/media/blog/2022/11/CaptureG20.png"
        ].map((src, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img 
              className="w-full h-32 md:h-40 object-cover" 
              src={src} 
              alt={`Feature ${index + 1}`} 
            />
            <div className="p-3">
              <h3 className="text-sm md:text-base font-medium text-gray-800">
                {["Quick Transfer", "Aadhaar Link", "Bill Pay", "Investments", "G20 Offers"][index]}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileBanking;