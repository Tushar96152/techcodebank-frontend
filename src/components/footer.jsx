import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 ">
      <div className="container mx-auto px-[4rem] py-12 sm:px-20">
        {/* Main footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Details</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-[#A20A3A]" />
                <div>
                  <p className="font-medium">Corporate Office</p>
                  <p className="text-sm">Plot No 4, Sector -10 Dwarka, New Delhi -110075</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-[#A20A3A]" />
                <p className="text-sm">+91 11 4567 8910</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#A20A3A]" />
                <p className="text-sm">info@techcodebank.com</p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-[#A20A3A]" />
                <p className="text-sm">Mon-Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Services', 'Contact', 'Careers'].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#A20A3A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Our Services</h3>
            <ul className="space-y-2">
              {[
                'Personal Banking',
                'Corporate Accounts',
                'Loans & Credit',
                'Investment Services',
                'Digital Banking'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-[#A20A3A] transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Stay Updated</h3>
            <p className="text-sm">Subscribe to our newsletter for the latest updates</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#A20A3A]"
                required
              />
              <button
                type="submit"
                className="bg-[#A20A3A] hover:bg-[#820a2e] text-white py-2 px-4 rounded transition-colors"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 pt-2">
              {['Facebook', 'Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-gray-400 hover:text-[#A20A3A] transition-colors"
                  aria-label={social}
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center">
                    {social.charAt(0)}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-500">
              Application Development and Maintenance by <span className="text-[#A20A3A]">cyfuture.cloud</span>
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Alok Nangia- Sr. Manager- IT / Ramesh Krishnan- Manager- IT
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6">
            <p className="text-sm text-gray-500">
              Copyright © 2025 Tech Code Bank. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Last Updated: 10-04-2025
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;