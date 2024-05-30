import React from 'react'
import vid from '../assets/home/vid1.mp4';
import img1 from '../assets/home/img1.jpg';
import img2 from '../assets/home/img2.jpg';
import img3 from '../assets/home/img3.jpg';
import img4 from '../assets/home/img4.jpg';

function Herosection() {
  return (
    <>
    <div className="relative  inset-0">
    <div className="absolute top-36 left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
    <p className=" text-white">
    UPCOMING LAUNCH
    </p>
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white mt-4">
    STARSHIP'S FOURTH FLIGHT TEST
    </p></div> 
    {/* Buttons */}
    
      <button className="text-white py-2 px-4 mt-4 border-2 focus:outline-none font-semibold">
        Get Started Now
      </button>
  </div>
    <video
      className="object-cover object-center w-full md:h-screen "
      autoPlay
      loop
      muted
    >
      <source src={vid} type="video/mp4" />
    </video>
  </div>

  {/* herosection2 */}
  <div className="relative inset-0">
  <img className="w-full  object-cover object-center h-screen" src={img1} alt="Corporate Team" />
  <div className="absolute top-52 left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
    <p className=" text-white ">
    RECENT LAUNCH
    </p>
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white mt-4">
    STARLINK MISSION
    </p></div> 
    {/* Buttons */}
    
      <button className="text-white py-2 px-4 mt-4 border-2 focus:outline-none font-semibold">
        REWATCH
      </button>
      </div>
</div>

    {/* herosection3 */}
    <div className="relative inset-0">
  <img className="w-full  object-cover h-screen " src={img2} alt="Corporate Team" />
  <div className="absolute top-52 left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
    <p className=" text-white ">
    RECENT LAUNCH
    </p>
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white mt-4">
    NROL-146 MISSION
    </p></div> 
    {/* Buttons */}
    
      <button className="text-white py-2 px-4 mt-4 border-2 focus:outline-none font-semibold">
        REWATCH
      </button>
      </div>
</div>

{/* herosection4 */}
<div className="relative inset-0">
  <img className="w-full  object-cover h-screen" src={img3} alt="Corporate Team" />
  <div className="absolute top-52 left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white mt-4">
    ADVANCING HUMAN SPACEFLIGHT
    </p></div> 
    {/* Buttons */}
    
      <button className="text-white py-2 px-4 mt-4 border-2 focus:outline-none font-semibold">
       LEARN MORE
      </button>
      </div>
</div>
{/* herosection5 */}
<div className="relative inset-0">
  <img className="w-full  object-cover h-screen" src={img4} alt="Corporate Team" />
  <div className="absolute top-52 left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white mt-4">
    TO MAKE LIFE MULTIPLANETARY
    </p></div> 
    {/* Buttons */}
    
      <button className="text-white py-2 px-4 mt-4 border-2 focus:outline-none font-semibold">
       LEARN MORE
      </button>
      </div>
</div>

  </>
  )
}

export default Herosection