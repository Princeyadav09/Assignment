import React, { useState } from 'react'
import SetPrice from './Auction_Update_pages/SetPrice';
import HighestBid from './Auction_Update_pages/HighestBid';
import NewBids from './Auction_Update_pages/NewBids';
import AskingPrice from './Auction_Update_pages/AskingPrice';

const Auction_update_page = () => {

    const [active,setActive] = useState(1);

  return (
    <>
    <div className=' mt-10'>
        <p className='ms-20 text-2xl text-bold'>Select</p>
        <div className='grid md:grid-cols-4 gap-10 mt-3 mx-10 h-full content-center'>
            <div className={`border-2 shadow rounded-xl hover:border-green-400 p-5 cursor-pointer ${ active === 1 ? "border-green-600" : null }`} onClick={()=>setActive(1)}>
                <center><p className='text-bold text-2xl mb-3'>Set Price</p></center>
                <center><p className='mt-3 text-sm'>Set a fixed or declining price</p></center>
            </div>
            <div className={`border-2 shadow rounded-xl hover:border-green-400 p-5 cursor-pointer ${ active === 2 ? "border-green-600" : null }`} onClick={()=>setActive(2)}>
                <center><p className='text-bold text-2xl mb-3'>Highest Bid</p></center>
                <center><p className='mt-3 text-sm'>Auction to the highest bidder</p></center>
            </div>
            <div className={`border-2 shadow rounded-xl hover:border-green-400 p-5 cursor-pointer ${ active === 3 ? "border-green-600" : null }`} onClick={()=>setActive(3)}>
                <center><p className='text-bold text-2xl mb-3'>New Bids</p></center>
                <center><p className='mt-3 text-sm'>Popular or newest bid</p></center>
            </div>
            <div className={`border-2 shadow rounded-xl hover:border-green-400 p-5 cursor-pointer ${ active === 4 ? "border-green-600" : null }`} onClick={()=>setActive(4)}>
                <center><p className='text-bold text-2xl mb-3'>Asking Price</p></center>
                <center><p className='mt-3 text-sm'>Current asking price</p></center>
            </div>
        </div>
        </div>

        {active === 1 && (
            <SetPrice/>
        )}
        {active === 2 && (
            <HighestBid/>
        )}
        {active === 3 && (
            <NewBids/>
        )}
        {active === 4 && (
            <AskingPrice/>
        )}

     </>
  )
}

export default Auction_update_page
