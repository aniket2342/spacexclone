import React from 'react'
import fh1 from '../assets//falconheavy/fh_feature-mobile.jpg'
import fh2 from '../assets//falconheavy/WebsiteFHFairings_Render_Mobile.jpg'
import fh3 from '../assets//falconheavy/FH_1_mobile.jpg'
import merlin from '../assets/falcon9/Merlin.jpg'

function Falconheavy() {
  return (
   <>
   <div className=' relative inset-0'>
    <img className="w-full object-cover h-screen" src={fh1}  />
      <div class="absolute w-max top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 class="text-4xl md:text-7xl font-bold mb-4">FALCON HEAVY</h1>
        <p class="text-lg md:text-xl mb-8">OVER 5 MILLION LBS OF THRUST</p>
      </div>
    </div>
    
    <div className="relative inset-0">
      <img className="w-full  object-cover h-screen" src={fh2} alt="Falcon Heavy Launch" />
      <div className="absolute top-52 left-0 sm:left-8 right-0 w-max md:w-1/2 text-start p-4 md:px-0">
        <p className="text-white">
          FALCON HEAVY
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
              <td>70 m / 229.6 ft</td>
            </tr>
            <tr>
              <td>WIDTH</td>
              <td>12.2 m / 39.9 ft</td>
            </tr>
            <tr>
              <td>MASS</td>
              <td>1,420,788 kg / 3,125,735 lb</td>
            </tr>
            <tr>
              <td>PAYLOAD TO LEO</td>
              <td>63,800 kg / 140,660 lb</td>
            </tr>
            <tr>
              <td>PAYLOAD TO GTO</td>
              <td>26,700 kg / 58,860 lb</td>
            </tr>
            <tr>
              <td>PAYLOAD TO MARS</td>
              <td>16,800 kg / 37,040 lb</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div className="flex flex-col sm:flex-row items-center sm:items-start p-4 sm:p-6 bg-black text-white">
      <div className="sm:w-1/2 flex justify-center">
        <img 
          src={fh3} 
          alt="Falcon Heavy Launch" 
          className="w-full max-w-sm sm:max-w-md"
        />
      </div>
      <div className="sm:w-1/2 mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">UNMATCHED PERFORMANCE</h2>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base">
          With more than 5 million pounds of thrust at liftoff, Falcon Heavy is one of the most capable rockets flying. By comparison, the liftoff thrust of the Falcon Heavy equals approximately eighteen 747 aircraft at full power. Falcon Heavy can lift the equivalent of a fully loaded 737 jetliner—complete with passengers, luggage and fuel—to orbit.
        </p>
      </div>
    </div>

    {/* engines-merlin */}

    <div className="relative inset-0">
  <img className="w-full object-cover h-screen " src={merlin} alt="Corporate Team" />
  <div className="absolute top-52 left-8 right-0 w-full md:w-1/2 text-start p-4 md:px-0">
    <p className=" text-white ">
    ENGINES
    </p>
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white ">
    MERLIN
    </p></div>
    <div className="mt-5 w-full sm:w-auto md:w-3/4 lg:w-1/2">
      <p className="text-white text-lg md:text-xl text-justify">
        Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.
      </p>
    </div>
    <table className='table-fixed mt-10 text-white' >
      <tbody className='flex gap-40'>
        <tr>PROPELLANT</tr>
        <tr>LOX / RP-1</tr>
      </tbody>
      <tbody className='flex gap-40'>
        <tr>THRUST</tr>
        <tr>845 kN / 190,000 lbf</tr>
      </tbody>
    </table>
    </div></div>

    <img className="w-full h-full object-cover md:h-screen sm:h-screen" src={fh3}  />
   </>
  )
}

export default Falconheavy