import React from 'react'
import falconfeacture from '../assets/falcon9/f9_feature.jpg'
import falconimg from '../assets/falcon9/falconimg.jpg'
import merlin from '../assets/falcon9/Merlin.jpg'
import vid1 from '../assets/falcon9/falcon.mp4'
function Falcon9() {
  return (
    <>
    <div className=' relative inset-0'>
    <img className="w-full  object-cover h-screen" src={falconfeacture}  />
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 class="text-4xl md:text-7xl font-bold mb-4">FALCON 9</h1>
        <p class="text-lg md:text-xl mb-8">FIRST ORBITAL CLASS ROCKET CAPABLE OF REFLIGHT</p>
      </div>
    </div>

    <div className="relative inset-0">
  <img className="w-full  object-cover h-screen " src={falconimg} alt="Corporate Team" />
  <div >
    <p className=" text-white ">
    FALCON 9
    </p>
    <div className='w-min'> 
    <p className="text-2xl md:text-4xl font-bold text-white ">
    OVERVIEW
    </p></div> 
    {/* table */}

    <table class="table-fixed text-white mt-10">
  <thead>
    {/* <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr> */}
  </thead>
  <tbody>
    <tr >
      <td>HEIGHT</td>
      <td>70 m / 229.6 ft</td>
    </tr>
    <tr>
      <td>DIAMETER</td>
      <td>3.7 m / 12 f</td>
    </tr>
    <tr>
      <td>MASS</td>
      <td>549,054 kg / 1,207,920 lb</td>
    </tr>
    <tr>
      <td>PAYLOAD TO LEO</td>
      <td>22,800 kg / 50,265 lb</td>
    </tr>
    <tr>
      <td>PAYLOAD TO GTO</td>
      <td>8,300 kg / 18,300 lb</td>
    </tr>
    <tr>
      <td>PAYLOAD TO MARS</td>
      <td>4,020 kg / 8,860 lb</td>
    </tr>
  </tbody>
</table>
      </div>
</div>
        {/* engines-merlin */}

        <div className="relative inset-0">
  <img className="w-full  object-cover h-screen " src={merlin} alt="Corporate Team" />
  <div className="absolute top-0 sm:top-44 left-0 sm:left-8  right-0 w-4/5 text-start p-4 md:px-0">
    <p className=" text-white ">
    ENGINES
    </p>
    <div > 
    <p className="text-2xl md:text-4xl font-bold text-white ">
    MERLIN
    </p></div>
    <div className='mt-5 container w-auto'>
      <p className="text-white text-lg md:text-xl text-justify">Merlin is a family of rocket engines developed by SpaceX for use on its Falcon 1, Falcon 9 and Falcon Heavy launch vehicles. Merlin engines use a rocket grade kerosene (RP-1) and liquid oxygen as rocket propellants in a gas-generator power cycle. The Merlin engine was originally designed for recovery and reuse.</p>
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
    <div>
    <video
      className="object-cover object-center w-full h-screen"
      autoPlay
      loop
      muted
    >
      <source src={vid1} type="video/mp4" />
    </video>
  </div>
    
    </>
  )
}

export default Falcon9