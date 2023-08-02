import React from 'react'
import Dropdown from '../Dropdown/Dropdown'

const NewBids = () => {
  return (
    <div className='mt-10'>

    <div className='grid md:grid-cols-3  gap-10 justify-center  mt-10 mx-10'>
            <div className='w-full m-auto border shadow rounded-xl hover:border-green-400 p-5'><center>Submission Form</center></div>
            <div className='flex justify-around border shadow rounded-xl hover:border-green-400 '>
                <div className='w-full border-e m-auto'><center>Time <br />00:00</center></div>
                <div className='w-full border-s m-auto'><center>Date <br />DD/MM/YEAR</center></div>
            </div>
            <div className='w-full m-auto border shadow rounded-xl hover:border-green-400 p-5'><center>Highest Bid US $ 91.8M</center></div>
    </div>
    <div className='grid md:grid-cols-3 gap-10 mt-10 mx-10'>
            <div className='col-span-2 flex justify-around border shadow rounded-xl hover:border-green-400'>
                <div>
                    <p className='text-xl m-5'>Minimum Bid Limit</p>
                </div>
                <div>
                   <p className='text-bold text-xl m-5'>1ETH</p>
                </div>
                <div className=''>
                    <Dropdown/>
                </div>
            </div>
            <div className='border shadow rounded-xl hover:border-green-400 p-3'>
                <center><p className='text-bold text-xl m-5'>Biding Rules & Regulation</p></center>
            </div>
           
    </div>
            <p className='ms-20 text-2xl text-bold mt-5'>Notification Settings</p>
            <div className='grid md:grid-cols-2 mx-10 mt-5'>
                <div className='flex justify-between border shadow rounded hover:border-green-400 p-3'>
                        <div><p>New Listing, Price Changes, Auction Endings</p></div>
                        <div className='me-5'>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                        </div>
                </div>
                <div className='flex justify-between border shadow rounded hover:border-green-400 p-3'>
                        <div><p>Get Emails & Messages when your favorite NFT is available</p></div>
                        <div className='me-5'>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                        </div>
                </div>
            </div>
            <div className='grid md:grid-cols-2 mx-10 mt-3'>
                <div className='flex justify-between border shadow rounded hover:border-green-400 p-3'>
                        <div><p>Real Time Updates</p></div>
                        <div className='me-5'>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                        </div>
                </div>
                <div className='flex justify-between border shadow rounded hover:border-green-400 p-3'>
                        <div><p>Get notified about the upcoming events</p></div>
                        <div className='me-5'>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                        </div>
                </div>
            </div>
    </div>
   
  )
}

export default NewBids
