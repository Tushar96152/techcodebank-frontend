import React from 'react'
import Sliders from './slides'



const Main = () => {

  return  (
    <>
    <div className="bg-[#aa9ca1] w-100% h-110 relative top-34 w-100% "> 
      <Sliders />
      <div className="bg-blue-200 w-full py-2 md:py-3 px-4 shadow-2xl">
  <p className="text-[#CD2159] font-bold text-xs sm:text-sm md:text-base text-center leading-tight md:leading-normal">
    Please note: Charges for transactions beyond free limits on other banks' ATMs have been revised to ₹23 per transaction.
  </p>
</div>
     </div>
    <hr />
    </>
  ) 
}

export default Main