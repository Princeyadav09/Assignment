import React from 'react'
import { BiTime } from "react-icons/bi";
import { IoIosArrowDown } from 'react-icons/io';
import etc from '../../Assets/etc.png'
import doge from '../../Assets/doge.png'
import Group from '../../Assets/Group.png'

const HighestBid = () => {
  return (
    <div className=' mt-10'>

        <div className='flex justify-between border shadow rounded-xl hover:border-green-400 p-5 mx-10 mt-5'>
                <div><center><p className='text-bold text-xl '>Highest Bid of the week</p></center></div>
                <div><center><p className=''>38542 ETH</p></center></div>
                <div className=''><center><p className='flex'>
                    <BiTime className='m-auto me-1' />
                    First 50000 days</p></center></div>
        </div>
        <div className='flex justify-normal border shadow rounded-xl hover:border-green-400 p-5 mx-10 mt-5'>
                <div><p className='text-bold text-xl'>
                    Highest Currency
                    <p className='text-xs mt-2'>Currency which was highest & popular</p>
                </p></div>
                <div className='me-5 flex justify-around w-[75%]'>
                    <div className=''><center><img className='h-[25px]'  src={etc}></img></center> Ethereum</div>
                    <div className=''><center><img className='h-[25px]' src={Group}></img></center>Chainlink</div>
                    <div className=''><center><img className='h-[25px]' src={doge}></img></center>Dogecoin</div>
                
                </div>
        </div>
        <div className='flex justify-between border shadow rounded-xl hover:border-green-400 p-5 mx-10 mt-5'>
                <div>
                <p className='text-bold text-xl '>Bidding History
                <p className='text-xs mt-2'>Check the list of previous bid placed for NFT</p>
                </p>
                </div>
                <div className='me-5 mt-5 '>
                   <IoIosArrowDown className='m-auto cursor-pointer' />
                </div>
        </div>
    </div>
  )
}

export default HighestBid
