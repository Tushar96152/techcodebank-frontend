import React from 'react';
import Aditya from '../assets/people/aditya.jpg'
import Tushar from '../assets/people/tushar.jpeg' 
import Ramesh from '../assets/people/ramesh.jpeg'

const FounderPage = () => {
  const founders = [
    {
      id: 1,
      name: 'Tushar',
      title: 'CEO & Co-Founder',
      image: Tushar,
      bio: 'Visionary leader with 15+ years of experience in tech entrepreneurship.'
    },
    {
      id: 2,
      name: 'Aditya Vijay',
      title: 'CTO',
      image:  Aditya,
      bio: 'Technical expert specializing in scalable architecture and AI solutions.'
    },
    {
      id: 3,
      name: 'Remash Kumar',
      title: 'Chief Product Officer',
      image: Ramesh,
      bio: 'Product development guru with a passion for user-centric design.'
    },

  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Meet Our Founders
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            The visionary team behind our success
          </p>
        </div>

        <div className="grid grid-cols-3 gap-10  sm:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3">
          {founders.map((founder) => (
            <div 
              key={founder.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-4">
                <img
                  className="w-42 h-42 mx-auto rounded-full object-cover border-4 border-indigo-100"
                  src={founder.image}
                  alt={founder.name}
                />
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">{founder.name}</h3>
                  <p className="text-indigo-600">{founder.title}</p>
                  <p className="mt-2 text-sm text-gray-500">{founder.bio}</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-center">
                <div className="flex justify-center space-x-4">
                  <a href="#" className="text-gray-400 hover:text-indigo-500">
                    <span className="sr-only">Twitter</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-indigo-500">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FounderPage;