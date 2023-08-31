import React from 'react'
import AdminPanelBoilerplate from '../../AdminPanelBoilerplate'

const Postal = () => {
  return (
    <AdminPanelBoilerplate>
    <div className='m-10'>
         <div className='bg-green-900 rounded'>
            <p className='p-3 text-white'>Add Postal Recieve</p>
         </div>

         <div className='border-2 border-green-900 rounded-lg p-10 mt-5'>

         <div className='grid md:grid-cols-4 '>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="From Title *" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="Reference No *" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="Address" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="Note" />
                </div>
         </div>
         <div className='grid md:grid-cols-4 mt-5'>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="To Title *" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="Date" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="file"  />
                </div>      
         </div>
         <div className='m-2 flex justify-end '>
            <div className='bg-green-900 rounded '>
                <p className='px-4 p-2 text-white'>Action</p>
            </div>
         </div>
         </div>

         <div className='bg-green-900 rounded mt-5'>
            <p className='p-3 text-white'>Postal Receive List</p>
         </div>

         <div className='border-2 rounded-xl border-green-900 my-5'>
                <div className='bg-green-900 grid md:grid-cols-5 text-white justify-center rounded-lg p-3'>
                    <div>Form Title</div>
                    <div>Reference No</div>
                    <div>Address</div>
                    <div>To Title</div>
                    <div>Date</div>
                </div>
                <div className='border p-4'>

                </div>
                <div className='border p-4'>

                </div>
                <div className='border p-4'>

                </div>
                <div className='border p-4'>

                </div>
         </div>

         <div className='bg-green-900 rounded mt-5'>
            <p className='p-3 text-white'>Add Postal Dispatch</p>
         </div>
         <div className='border-2 border-green-900 rounded-lg p-10 mt-5'>

         <div className='grid md:grid-cols-4 '>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="From Title *" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="Reference No *" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="Address" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="Note" />
                </div>
         </div>
         <div className='grid md:grid-cols-4 mt-5'>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="To Title *" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" value="Date" />
                </div>
                <div>
                <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="file"  />
                </div>      
         </div>
         <div className='m-2 flex justify-end '>
            <div className='bg-green-900 rounded '>
                <p className='px-4 p-2 text-white'>Save</p>
            </div>
         </div>
         </div>

         <div className='bg-green-900 rounded mt-5'>
            <p className='p-3 text-white'>Postal Dispatch List</p>
         </div>

         <div className='border-2 rounded-xl border-green-900 my-5'>
                <div className='bg-green-900 grid md:grid-cols-5 text-white justify-center rounded-lg p-3'>
                    <div>Form Title</div>
                    <div>Reference No</div>
                    <div>Address</div>
                    <div>To Title</div>
                    <div>Date</div>
                </div>
                <div className='border p-4'>

                </div>
                <div className='border p-4'>

                </div>
                <div className='border p-4'>

                </div>
                <div className='border p-4'>

                </div>
         </div>

    </div>
    </AdminPanelBoilerplate>
  )
}

export default Postal
