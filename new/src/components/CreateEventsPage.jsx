import React, { useState } from 'react'
import Details from './CreateEventsPages/Details'
import Timing from './CreateEventsPages/Timing'
import Tickets from './CreateEventsPages/Tickets'
import Seo from './CreateEventsPages/Seo'
import Location from './CreateEventsPages/Location'
import Publish from './CreateEventsPages/Publish'
import Media from './CreateEventsPages/Media'

const CreateEventsPage = () => {
  const [active,setActive] = useState(1)
  return (
    <>

      <div className='bg-pink-600 grid grid-cols-3 md:m-20 h-[700px] rounded-r-xl'>

        <div className='border border-red-600 rounded-l-xl m-auto w-full h-full bg-pink-200'>
                <div className={`mt-10 p-5  rounded-xl cursor-pointer ${active === 1 ? "bg-pink-400": null}`} onClick={()=>setActive(1)}><center><p>DETAILS</p></center></div>
                <div className={` p-5  rounded-xl cursor-pointer ${active === 2 ? "bg-pink-400": null}`} onClick={()=>setActive(2)}><center><p>TIMING</p></center></div>
                <div className={` p-5  rounded-xl cursor-pointer ${active === 3 ? "bg-pink-400": null}`} onClick={()=>setActive(3)}><center><p>TICKETS</p></center></div>
                <div className={` p-5  rounded-xl cursor-pointer ${active === 4 ? "bg-pink-400": null}`} onClick={()=>setActive(4)}><center><p>LOCATION</p></center></div>
                <div className={` p-5  rounded-xl cursor-pointer ${active === 5 ? "bg-pink-400": null}`} onClick={()=>setActive(5)}><center><p>MEDIA</p></center></div>
                <div className={` p-5  rounded-xl cursor-pointer ${active === 6 ? "bg-pink-400": null}`} onClick={()=>setActive(6)}><center><p>SEO</p></center></div>
                <div className={`mb-10 p-5 rounded-xl cursor-pointer ${active === 7 ? "bg-pink-400": null}`} onClick={()=>setActive(7)}><center><p>PUBLISH</p></center></div>
        </div>
         <div className=' border border-red-600 col-span-2 rounded-r-xl bg-white '>

              {active === 1 && (
                  <Details/>
              )}
              {active === 2 && (
                  <Timing/>
              )}
              {active === 3 && (
                 <Tickets/>
              )}
              {active === 4 && (
                  <Location/>
              )}
              {active === 5 && (
                   <Media/>
              )}
              {active === 6 && (
                  <Seo/>
              )}
              {active === 7 && (
                   <Publish/>
              )}

         </div>

      </div>
      
    </>
  )
}

export default CreateEventsPage
