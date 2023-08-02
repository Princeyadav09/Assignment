import React from 'react'
import Dropdown from '../Dropdown/Dropdown'
import pic from '../../Assets/Ellipse 109.png'

const AskingPrice = () => {
  return (
    <div className='mt-10'>
    <div className='grid md:grid-cols-3  gap-10 justify-center  mt-10 mx-10'>
        <div>
            <p>Current Asking Price</p>
            <div className='flex justify-between border shadow rounded-xl hover:border-green-400 '>
                <Dropdown/>
                <p className='m-auto'>326784ETH</p>
            </div>
        </div>
        <div>
            <p>Remaining Time</p>
            <div className='border shadow rounded-xl hover:border-green-400 p-6'>
                <center><p>5 Days, 2 hours, 45 minutes</p></center>
            </div>
        </div>
        <div>
            <p>Buy your currency</p>
            <div className='flex justify-around border shadow rounded-xl hover:border-green-400 p-6'>
                <p className='m-auto'>467673BTC</p>
                <div className='border rounded-2xl border-green-400 cursor-pointer px-6'>
                    <p>BUY</p>
                </div>
            </div>
        </div>
    </div>
    <p className='ms-20 mt-5 text-2xl text-bold'>Highest Bidder</p>
    <div className='grid md:grid-cols-2  gap-10  mt-10 mx-10'>
        <div className='flex justify-center border shadow rounded hover:border-green-400'>
            <div className='mt-10 m-3 '>
                <img src={pic} className='h-[50px] rounded-full' alt="" />
            </div>
            <div className='my-auto '>
                <p>Hazen Audel</p>
                <p>Wallet Address</p>
                <p>adghgsh563578jhjakakj</p>
            </div>
        </div>
        <div>
        <p className=' text-2xl text-bold'>Outbid Alerts</p>
        <div className='flex justify-between border shadow rounded hover:border-green-400 p-3'>
                        <div><p>Get notified about the upcoming events</p></div>
                        <div className='me-5'>
                        <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" value="" class="sr-only peer"/>
                        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-white-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
                        </label>
                        </div>
                        </div>
        <p className=' text-2xl text-bold'>Call To Action</p>
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
    </div>
  )
}

export default AskingPrice
