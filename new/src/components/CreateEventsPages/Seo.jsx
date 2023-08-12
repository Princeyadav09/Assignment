import React from 'react'

const Seo = () => {
  return (
    <div className='m-10'>
            <div>
                <label htmlFor="" className='block '>META TITLE</label>
                <textarea className='w-full h-[80px] my-3 rounded-xl p-3 border border-red-500' type="textarea" />
            </div>
            <div>
                <label htmlFor="" className='block '>META TAGS</label>
                <textarea className='w-full h-[80px] my-3 rounded-xl p-3 border border-red-500' type="textarea" />
            </div>
            <div>
                <label htmlFor="" className='block '>META DESCRIPTION</label>
                <textarea className='w-full h-[80px] my-3 rounded-xl p-3 border border-red-500' type="textarea" />
            </div>
            <center><button className="bg-pink-500 hover:bg-pink-700 text-white mt-3 font-bold py-2 px-4 rounded-xl">
              SAVE INFO
            </button></center>
    </div>
  )
}

export default Seo
