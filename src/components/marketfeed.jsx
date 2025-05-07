import React, { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const Marketfeed = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('TC BANK');

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="bg-gray-200">
      {/* Top Navigation Bar */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center py-3">
            <div className="flex items-center justify-between w-full md:w-auto">
              <h1 className="text-[#A20A3A] font-bold text-xl md:text-2xl">
                Market Feed
              </h1>
              <button
                className="md:hidden text-[#A20A3A]"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? (
                  <FiChevronUp size={24} />
                ) : (
                  <FiChevronDown size={24} />
                )}
              </button>
            </div>

            <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} md:block w-full md:w-auto mt-2 md:mt-0`}>
              <ul className="flex flex-col md:flex-row gap-4 md:gap-6 font-medium">
                {['TC BANK', 'NSE', 'BSE', 'Daily Forex Rates'].map((item) => (
                  <li key={item}>
                    <button
                      className={`py-2 px-1 ${activeTab === item ? 'text-[#A20A3A] border-b-2 border-[#A20A3A]' : 'text-gray-600 hover:text-[#A20A3A]'}`}
                      onClick={() => setActiveTab(item)}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Secondary Navigation */}
      <div className="bg-blue-300 py-3 overflow-x-auto shadow-2xl">
        <div className="container mx-auto px-4">
          <div className="flex space-x-6 md:space-x-8 whitespace-nowrap">
            {[
              'Calculate',
              'Auctions',
              'Tenders / Empanelment',
              'Public Notices',
              'Recruitments',
              'Economic Scenario',
              'Bank Holidays',
              'Digital Calendar',
              'Regulatory Disclosure'
            ].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm md:text-base font-medium text-[#A20A3A] hover:text-[#820a2e] whitespace-nowrap"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {/* Personal */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-[#A20A3A] font-bold text-lg mb-3">Personal</h2>
            <ul className="space-y-2">
              {[
                'Deposit',
                'Loans',
                'Approved Housing Projects',
                'Apply Credit Card'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-[#A20A3A] text-sm block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-[#A20A3A] font-bold text-lg mb-3">Corporate</h2>
            <ul className="space-y-2">
              {[
                'Corporate Loan',
                'Forex Services offer',
                'Exporter and Importer',
                'Cash Management Services',
                'Gold Card scheme'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-[#A20A3A] text-sm block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* International */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-[#A20A3A] font-bold text-lg mb-3">International</h2>
            <ul className="space-y-2">
              {[
                'FX Retail Platform',
                'Libor Transition',
                'Schemes/Products',
                'NRI Services',
                'World Travel Card'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-[#A20A3A] text-sm block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Capital Services */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-[#A20A3A] font-bold text-lg mb-3">Capital Services</h2>
            <ul className="space-y-2">
              {[
                'Depository Services',
                'Mutual Funds',
                'Merchant Banker',
                'Banker To an Issue',
                'Debenture Trustee'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-[#A20A3A] text-sm block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-[#A20A3A] font-bold text-lg mb-3">About Us</h2>
            <ul className="space-y-2">
              {[
                'Screen Reader Accessibility',
                'Disclaimer',
                'Privacy & Policy',
                'Contact us',
                'Site Map'
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-[#A20A3A] text-sm block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-[#A20A3A] font-bold text-lg mb-3">Important Links</h2>
            <ul className="space-y-2">
              {['RBI', 'SEBI', 'Policy', 'V-KYC', 'UDGAM'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-700 hover:text-[#A20A3A] text-sm block py-1"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketfeed;