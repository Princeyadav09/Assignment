import React from 'react'
import AdminPanelBoilerplate from '../../AdminPanelBoilerplate'

const Admission = () => {
  return (
    <AdminPanelBoilerplate>
    <div className='m-10'>
      <div className=' p-10 border-2 rounded-lg  border-green-900'>
         <div className=''>
            <p className='m-2 font-bold'>Date From*</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className=''>
            <p className='m-2 font-bold'>Date To*</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className=''>
            <p className='m-2 font-bold'>Source</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className=''>
            <p className='m-2 font-bold'>Status</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className='m-2 flex justify-center '>
            <div className='bg-green-900 rounded-xl '>
                <p className='px-4 p-2 text-white'>Save</p>
            </div>
         </div>
    </div>
        <div className="bg-green-900 rounded my-5">
          <p className="p-3 text-white">Query List</p>
        </div>
  
    <div className="border-2 rounded-xl border-green-900 my-5">
          <div className="bg-green-900 grid md:grid-cols-5 text-white justify-center rounded-lg p-3">
            <div> Name</div>
            <div>Phone</div>
            <div>Source</div>
            <div>Query date</div>
            <div>Action</div>
          </div>
          <div className="border p-2">
            <div className=" flex justify-end ">
              <div className="bg-green-900 rounded ">
                <p className="px-4 p-2 text-white">Select</p>
              </div>
            </div>
          </div>
          <div className="border p-2">
            <div className=" flex justify-end ">
              <div className="bg-green-900 rounded ">
                <p className="px-4 p-2 text-white">Select</p>
              </div>
            </div>
          </div>
          <div className="border p-2">
            <div className=" flex justify-end ">
              <div className="bg-green-900 rounded ">
                <p className="px-4 p-2 text-white">Select</p>
              </div>
            </div>
          </div>
          <div className="border p-2">
            <div className=" flex justify-end ">
              <div className="bg-green-900 rounded ">
                <p className="px-4 p-2 text-white">Select</p>
              </div>
            </div>
          </div>
          
        </div>
        </div>
    </AdminPanelBoilerplate>
  )
}

export default Admission
