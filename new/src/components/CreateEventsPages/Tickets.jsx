import React from 'react'

const Tickets = () => {
  return (
    <div className='m-10'>
      
        <div className='flex justify-around m-10'>
            <div>TITLE</div>
            <div>PRICE</div>
            <div>QUANTITY</div>
            <div>ACTION</div>
        </div>
       
        <hr className='bg-pink-600'/>

        <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
        <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
        <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
        <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
        <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
        <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />

        <center><button className="bg-pink-500 hover:bg-pink-700 text-white mt-3 font-bold py-2 px-4 rounded-xl">
              SAVE INFO
        </button></center>

    </div>
  )
}

export default Tickets
