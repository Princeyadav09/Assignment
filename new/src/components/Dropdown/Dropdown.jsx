import React, { useState } from 'react'
import img from '../../Assets/etc.png';
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";


const Dropdown = () => {
    const [dropDown, setDropDown] = useState(false);

  return (
    <div className='m-5'>
   
   <button type="button" onClick={() => setDropDown(!dropDown)} class=" flex border border-green-300 rounded-xl p-1 content-center">
    <img src={img} className='h-[25px]' alt="" />
    <p className='mx-2 m-auto'>Ethereum</p>
    <IoIosArrowDown className='m-auto' />
    </button>
    {dropDown ? (
        <div className='border border-gray-500 w-[200px]'>
            Dropdowm
        </div>
    ) : null }
     
    </div>
  )
}

export default Dropdown

