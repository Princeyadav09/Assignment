import React from 'react'

const Details = () => {
  return (
    <div className='m-10'>
         <form action="">
            <div className=''>
                <label htmlFor="" className='block'>SELECT CATEGORY</label>
                <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
            </div>
            <div>
                <label htmlFor="" className='block'>EVENT NAME</label>
                <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
            </div>
            <div>
                <label htmlFor="" className='block'>EVENT URL</label>
                <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
            </div>
            <div>
                <label htmlFor="" className='block '>DESCRIPTION</label>
                <textarea className='w-full h-[80px] my-3 rounded-xl p-3 border border-red-500' type="textarea" />
            </div>
            <div>
                <label htmlFor="" className='block '>OFFICE PAYMENT INSTRUCTION</label>
                <textarea className='w-full h-[80px] my-3 rounded-xl p-3 border border-red-500' type="textarea" />
            </div>
            <center><button className="bg-pink-500 hover:bg-pink-700 text-white mt-3 font-bold py-2 px-4 rounded-xl">
              SAVE INFO
            </button></center>
         </form>
    </div>
  )
}

export default Details
