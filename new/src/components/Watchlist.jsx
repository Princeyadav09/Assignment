import React, { useState } from 'react'
import Dropdown from './Dropdown/Dropdown'
import img from '../Assets/etc.png';
import { PiDotsThreeOutlineVerticalDuotone } from "react-icons/pi";


const Watchlist = () => {
  return (
    <div className=' h-screen m-5'>
    <div className='h-[50px]'>
      <Dropdown/>
    </div>
      <div className='flex my-5'>
      <div className='grid h-[80px] w-[25%] content-center'>
            <div><center><h6 className=''>Collection</h6></center></div>
      </div>
      <div className='grid grid-cols-6 h-[80px] w-[75%] content-center me-6'>
            <div><center><h6 className=''>Floor Price</h6></center></div>
            <div><center><h6 className=''>7d Volume</h6></center></div>
            <div><center><h6 className=''>24 H%</h6></center></div>
            <div><center><h6 className=''>7d %</h6></center></div>
            <div><center><h6 className=''>Owners</h6></center></div>
            <div className=''><center><h6 className=''>Items</h6></center></div>
      </div>
      </div>
      <div className='flex my-5 border border-slate-600 rounded-xl'>
      <div className='grid h-[80px] w-[25%] content-end'>
            <div><center><h6 className=''>Fluffy Bear</h6></center></div>
      </div>
      <div className='grid grid-cols-6 h-[80px] w-[75%] content-center'>
            <div className='flex justify-center'>
            <div className='me-1'><img src={img} className='h-[25px]' alt="" /></div>
            <div className='ms-1'><h6 className=''>
                0.08
            </h6></div>
            </div>

            <div className='flex justify-center'>

            <div className='me-1'><img src={img} className='h-[25px]' alt="" /></div>
            <div className='ms-1'><h6 className=''>
                463,45
            </h6></div>
            </div>

            <div><center><h6 className='text-red-600'>-22.07%</h6></center></div>
            <div><center><h6 className='text-green-600'>+8898.01%</h6></center></div>
            <div><center><h6 className=''>4.3k</h6></center></div>
            <div><center><h6>9.4k</h6></center></div>
      </div>
        <div className='mt-2 me-2'>
            <PiDotsThreeOutlineVerticalDuotone/>
        </div>
      </div>
      <div className='flex my-5 border border-slate-600 rounded-xl'>
      <div className='grid h-[80px] w-[25%] content-end'>
            <div><center><h6 className=''>Apes 3d</h6></center></div>
      </div>
      <div className='grid grid-cols-6 h-[80px] w-[75%] content-center'>
            <div className='flex justify-center  '>

            <div className='me-1'><img src={img} className='h-[25px]' alt="" /></div>
            <div className='ms-1'><h6 className=''>
                0.15
            </h6></div>
            </div>
            <div className='flex justify-center  '>

            <div className='me-1'><img src={img} className='h-[25px]' alt="" /></div>
            <div className='ms-1'><h6 className=''>
                463,45
            </h6></div>
            </div>
            <div><center><h6 className='text-red-600'>-22.07%</h6></center></div>
            <div><center><h6 className='text-red-600'>+22.07%</h6></center></div>
            <div><center><h6 className=''>4.3k</h6></center></div>
            <div><center><h6 className=''>9.4k</h6></center></div>
      </div>
      <div className='mt-2 me-2'>
            <PiDotsThreeOutlineVerticalDuotone/>
        </div>
      </div>
      <div className='flex my-5 border border-slate-600 rounded-xl'>
      <div className='grid h-[80px] w-[25%] content-end'>
            <div><center><h6 className=''>Sandbox</h6></center></div>
      </div>
      <div className='grid grid-cols-6 h-[80px] w-[75%] content-center'>
            <div className='flex justify-center  '>

            <div className='me-1'><img src={img} className='h-[25px]' alt="" /></div>
            <div className='ms-1'><h6 className=''>
                0.65
            </h6></div>
            </div>
            <div className='flex justify-center  '>

            <div className='me-1'><img src={img} className='h-[25px]' alt="" /></div>
            <div className='ms-1'><h6 className=''>
                463,45
            </h6></div>
            </div>
            <div><center><h6 className='text-green-600'>+0.11%</h6></center></div>
            <div><center><h6 className='text-green-600'>+0.11%</h6></center></div>
            <div><center><h6 className=''>4.3k</h6></center></div>
            <div><center><h6 className=''>9.4k</h6></center></div>
      </div>
      <div className='mt-2 me-2'>
            <PiDotsThreeOutlineVerticalDuotone/>
        </div>
      </div>
      
    </div>
  )
}

export default Watchlist
