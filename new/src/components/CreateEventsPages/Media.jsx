import React from 'react'
import { CiImageOn } from "react-icons/ci";

const Media = () => {
  return (
    <div className='m-10'>
          <div>
            <p>THUMBNAIL IMAGE</p>
            <div className='flex items-center justify-center mt-4 w-full h-[120px] rounded-xl border border-gray-600 '>
                <div>
                    <CiImageOn className='text-4xl my-auto cursor-pointer'/>
                </div>
            </div>
          </div>
          <div className='mt-3'>
            <p>POSTER IMAGE</p>
            <div className='flex items-center justify-center mt-4 w-full h-[120px] rounded-xl border border-gray-600 '>
                <div>
                    <CiImageOn className='text-4xl my-auto cursor-pointer'/>
                </div>
            </div>
          </div>
          <div className='grid md:grid-cols-3 md:m-3'>
            <div><p className='text-gray-400 text-sm font-bold md:ms-5'>image <br /> gallery</p></div>
             <div>
             <label
                  htmlFor="file-input"
                  className="flex items-center justify-center px-4 py-2 border border-pink-600 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <span>CHOOSE FILE</span>
                  <input
                    type="file"
                    name="avatar"
                    id="file-input"
                    accept=".jpg,.jpeg,.png"
                    className="sr-only"
                  />
                </label>
             </div>
            <div><p className='text-gray-400 text-sm font-bold md:ms-5'>UPLOAD IMAGES RELATED <br /> TO YOUR EVENTS</p></div>
         </div>
          <div className=''>
                <label htmlFor="" className='block'>YOUTUBE URL</label>
                <input className='p-3 rounded-xl w-full my-3 border border-red-500' type="text" />
                <p className='text-gray-400 text-sm font-bold'>Enter video url only</p>
            </div>
          <center><button className="bg-pink-500 hover:bg-pink-700 text-white mt-3 font-bold py-2 px-4 rounded-xl">
              SAVE INFO
        </button></center>
    </div>
  )
}

export default Media
