import React from 'react'
import img1 from '../assets/startship/Starhip_website-crop20230126_dji_0199_MOBILE_01.jpg'
import img2 from '../assets/startship/Starbase_Mobile.jpg'
import vid from '../assets/startship/QuickTok - Starship _ Third Flight Test.mp4'
import vid2 from '../assets/startship/WebsiteStarshipStack_Anim_Render_Desktop_7.mp4'
function Starship() {
  return (
   <>
   <div className=' relative inset-0'>
    <img className="w-full object-cover h-screen" src={img1}  />
      <div class="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 class="text-4xl md:text-7xl font-bold mb-4">STARSHIP</h1>
        <p class="text-lg md:text-xl mb-8">SERVICE TO EARTH ORBIT, MOON, MARS AND BEYOND</p>
      </div>
    </div>


    <div className="relative  inset-0">
    <div className="absolute top-52 left-0 sm:left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white ">
    STARSHIP OVERVIEW
    </p></div>
    <div className='mt-5 w-auto'>
      <p className="text-white text-lg md:text-xl text-justify">SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond. Starship is the world’s most powerful launch vehicle ever developed, capable of carrying up to 150 metric tonnes fully reusable and 250 metric tonnes expendable.</p>
    </div>
    <table className='table-fixed mt-10 text-white' >
      <tbody className='flex gap-40'>
        <tr>HEIGHT</tr>
        <tr>121 m / 397 ft</tr>
      </tbody>
      <tbody className='flex gap-40'>
        <tr>DIAMETER</tr>
        <tr>9 m / 29.5 ft</tr>
      </tbody>
      <tbody className='flex gap-10'>
        <tr>PAYLOAD CAPACITY</tr>
        <tr>100 – 150 t (fully reusable)</tr>
      </tbody>
    </table>
    </div>
    <video
      className="object-cover object-center w-full md:h-screen "
      autoPlay
      loop
      muted
    >
      <source src={vid2} type="video/mp4" />
    </video>
  </div>

    <div className="relative  inset-0">
    <div className="absolute top-52 left-0 sm:left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
    
    <div className='w-min'> 
    <p className="text-2xl w-max md:text-4xl font-bold text-white ">
    ON-ORBIT REFILLING
    </p></div>
    <div className='mt-5 container w-auto'>
      <p className="text-white text-lg md:text-xl text-justify">Starship leverages tanker vehicles (essentially the Starship spacecraft minus the windows) to refill the Starship spacecraft in low-Earth orbit prior to departing for Mars. Refilling on-orbit enables the transport of up to 100 tons all the way to Mars. And if the tanker ship has high reuse capability, the primary cost is just that of the oxygen and methane, which is extremely low.</p>
    </div>
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
  <img className="w-full h-full object-cover md:h-screen sm:h-screen" src={img2}  />
   </>
  )
}

export default Starship