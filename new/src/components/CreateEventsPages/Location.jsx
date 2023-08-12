import React, { useState } from 'react'
import { IoIosArrowDown} from "react-icons/io";
import { AiOutlinePlusCircle } from "react-icons/ai";

const Location = () => {
    const [dropDown, setDropDown] = useState(false);
  return (
    <div className='m-10 md:m-20'>
         <div>
            <p>CHOOSE EVENT VENUE</p>
         </div>
         <div className='m-5'>
   
            <button type="button" onClick={() => setDropDown(!dropDown)} className="w-full flex justify-between border border-green-300 rounded-xl p-3 content-center">
            <p className='mx-2 m-auto'>SEARCH VENUES</p>
            <IoIosArrowDown className='mt-1' />
            </button>
            {dropDown ? (
                <div className='border border-gray-500 w-[200px]'>
                    Dropdowm
                </div>
            ) : null }
        </div>
        <button className="flex ms-10 bg-green-500 hover:bg-green-700 text-white mt-3 font-bold py-2 px-4 rounded-xl">
            <AiOutlinePlusCircle className='m-auto me-2 text-2xl'/>  ADD VENUE
        </button>


        <center><button className="md:mt-40 bg-pink-500 hover:bg-pink-700 text-white mt-3 font-bold py-2 px-4 rounded-xl">
              SAVE INFO
        </button></center>
    </div>
  )
}

export default Location
