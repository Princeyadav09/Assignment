import React from 'react'
import img from './image/300 (1).png'


const Payroll_Hero = () => {
  return (
 <div className='h-[1200px]'>
 
    <div className='border grid grid-cols-2'>
        <div className='border mx-auto mt-10'>
            <p className='text-green-900 font-bold text-2xl'>
                    Payroll
            </p>
        </div>
        <div className='mt-20'>
            <img src={img} alt="" />
        </div>
    </div>

  
          
 </div>
  )
}

export default Payroll_Hero
