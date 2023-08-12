import React from 'react'

const Timing = () => {
  return (
    <div>
        <form action="">
         <div className='flex justify-center mt-20'>
         <div className='me-3'>
                <center> 
                <label htmlFor="" className='block'>START DATE</label>
                </center>
                <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
            </div>
            <div className='ms-3'>
                <center>
                <label htmlFor="" className='block'>START TIME</label>
                </center>
                <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
            </div>
         </div>
         <div className='flex justify-center'>
         <div className='me-3'>
                <center> 
                <label htmlFor="" className='block'>END DATE</label>
                </center>
                <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
            </div>
            <div className='ms-3'>
                <center>
                <label htmlFor="" className='block'>END TIME</label>
                </center>
                <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
            </div>
         </div>
         <div className='mt-5'>
            <center>
            <input type="checkbox" className='me-3'/>
            <label htmlFor="">ADD REPETITIVE SCHEDULES</label>
            </center>
         </div>
         <div className=' md:mt-32'>
         <center><button className="bg-pink-500 hover:bg-pink-700 text-white mt-3 font-bold py-2 px-4 rounded-xl">
              SAVE INFO
            </button></center>
        </div>
         </form>
    </div>
  )
}

export default Timing
