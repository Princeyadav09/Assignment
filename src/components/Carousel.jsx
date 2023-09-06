import React from 'react'
import Calendar from '../assets/calendar.svg'
import Hour from '../assets/hour.svg'
import Location from '../assets/location.svg'

const Carousel = ({ events }) => {

  return (
    <>
      <div className="flex flex-col md:flex-row flex-wrap md:m-8">
        { events.map((event, index) => (
          <div className="m-4" key={ index } >
            <div className='bg-white  w-[70vw] sm:w-max md:w-[20vw] items-center m-auto text-black font-bold rounded-b-xl pb-4'>
              <img src={ event.i } alt="" className='mb-7' />
              <div className="mb-8">
                <h3 className='inline  '>{ event.e }</h3>
                <p className='inline'>| Instructor Joe</p>

              </div>
              <div className="">
                <div className="flex justify-start my-4">
                  <img src={ Calendar } alt="" className='mx-4 w-7' />
                  <p>20th Sept 2023</p>
                </div>
                <div className="flex justify-start my-4">
                  <img src={ Location } alt="" className='mx-4 w-7' />
                  <p>Star Stadium, Kolkata</p>
                </div>
                <div className="flex justify-start my-4">
                  <img src={ Hour } alt="" className='mx-4 w-7' />
                  <p>1 hours</p>
                </div>
              </div>
            </div>
          </div>
        )) }
      </div>
    </>
  )
}

export default Carousel