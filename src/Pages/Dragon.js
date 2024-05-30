import React from 'react'
import dg1 from '../assets/dragon/dragon_feature_mobile.jpg'
import dg2 from '../assets/dragon/DragonTrunk_Render_Mobile.png'
import dg3 from '../assets/dragon/Draco.jpg'
import dg4 from '../assets/dragon/DRAGON_DRAGON+F9_800x1200_Mobile.jpg'
import img3 from '../assets/home/img3.jpg';

function Dragon() {
  return (
    <>
    <div className=' relative inset-0'>
    <img className="w-full  object-cover h-screen" src={dg1}  />
      <div class="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 class="text-4xl md:text-7xl font-bold mb-4">DRAGON</h1>
        <p class="text-lg md:text-xl mb-8">SENDING HUMANS AND CARGO INTO SPACE</p>
      </div>
    </div>

<div className="relative inset-0">
<img className="w-full object-cover h-screen" src={dg2} alt="Falcon Heavy Launch" />
<div className="absolute top-52 left-0 sm:left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
  <p className="text-white">
  DRAGON
  </p>
  <div className='w-min'>
    <p className="text-2xl md:text-4xl font-bold text-white">
      OVERVIEW
    </p>
  </div>
  <table className="table-fixed text-white mt-10 w-max">
    <tbody>
      <tr>
        <td>HEIGHT</td>
        <td>8.1 m / 26.7 ft</td>
      </tr>
      <tr>
        <td>DIAMETER</td>
        <td>4 m / 13 ft</td>
      </tr>
      <tr>
        <td>SPACECRAFT VOLUME</td>
        <td>9.3 m³ / 328 ft³</td>
      </tr>
      <tr>
        <td>TRUNK VOLUME</td>
        <td>37 m³ / 1300 ft³</td>
      </tr>
      <tr>
        <td>LAUNCH PAYLOAD MASS</td>
        <td>6,000 kg / 13,228 lbs</td>
      </tr>
      <tr>
        <td>RETURN PAYLOAD MASS</td>
        <td>3,000 kg / 6,614 lbs</td>
      </tr>
    </tbody>
  </table>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-black text-white">
      <div className="sm:w-1/2 flex justify-center">
        <img 
          src={img3} 
          alt="Falcon Heavy Launch" 
          className="w-full max-w-sm sm:max-w-md"
        />
      </div>
      <div className="sm:w-1/2 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">TAKING HUMANS TO SPACE</h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base">
        In 2020, SpaceX returned America’s ability to fly NASA astronauts to and from the International Space Station on American vehicles for the first time since 2011. In addition to flying astronauts to space for NASA, SpaceX’s Dragon spacecraft can also carry commercial astronauts to Earth orbit, the ISS or beyond.
        </p>
        <button className="text-white py-2 px-4 mt-4 border-2 focus:outline-none font-semibold">
        LEARN MORE
      </button>
      </div>
    </div>

    <div className="relative inset-0">
  <img className="w-full h-screen object-cover " src={dg3} alt="Corporate Team" />
  <div className="absolute top-52 left-8 right-0 w-max  text-start p-4 md:px-0">
    <p className=" text-white ">
    ENGINES
    </p>
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white ">
    DRACO
    </p></div>
    <div className='mt-5 container w-auto'>
      <p className="text-white text-lg md:text-xl text-justify">The Dragon spacecraft is equipped with 16 Draco thrusters used to orient the spacecraft during the mission, including apogee/perigee maneuvers, orbit adjustment and attitude control. Each Draco thruster is capable of generating 90 pounds of force in the vacuum of space.</p>
    </div>
    <table className='table-fixed mt-10 text-white' >
      <tbody className='flex gap-40'>
        <tr>NUMBER OF ENGINES</tr>
        <tr>16</tr>
      </tbody>
      <tbody className='flex gap-40'>
        <tr>THRUST IN VACUUM</tr>
        <tr>400 N / 90 lbf</tr>
      </tbody>
    </table>
    </div></div>

    <img className="w-full h-screen object-cover " src={dg4}  />

</>
  )
}

export default Dragon