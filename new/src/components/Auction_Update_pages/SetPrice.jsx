import React from 'react'
import { BiTime } from "react-icons/bi";

const SetPrice = () => {
  return (
    <div className=' mt-10'>
       
        <div className='flex justify-between border shadow rounded-xl hover:border-green-400 p-5 mx-10 mt-5'>
                <div><center><p className='text-bold text-xl '>Your Current Bid Amount</p></center></div>
                <div><center><p className=''>$10000 each</p></center></div>
                <div className=''><center><p className='flex'>
                    <BiTime className='m-auto me-1' />
                    2days, 1 Hours left</p></center></div>
        </div>
        <div className='flex justify-between border shadow rounded-xl hover:border-green-400 p-5 mx-10 mt-5'>
                <div><p className='text-bold text-xl '>
                    Include ending price 
                    <p className='text-xs mt-2'>Adding an ending price will allow the listing to expire</p>
                </p></div>
                <div className='me-5'>
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
                </div>
        </div>
        <div className='flex justify-between border shadow rounded-xl hover:border-green-400 p-5 mx-10 mt-5'>
                <div>
                <p className='text-bold text-xl '>Schedule for future
                <p className='text-xs mt-2'>Adding an ending price will allow the listing to expire</p>
                </p>
                </div>
                <div className='me-5'>
                <label class="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" class="sr-only peer"/>
                <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                </label>
                </div>
        </div>
    </div>
  )
}

export default SetPrice
