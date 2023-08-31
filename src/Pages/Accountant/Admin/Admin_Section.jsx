import React from 'react'
import AdminPanelBoilerplate from '../../AdminPanelBoilerplate'

const Admin_Section = () => {
  return (
    <AdminPanelBoilerplate>
    <div className='m-10'>
         <div className='bg-green-900 rounded'>
            <p className='p-3 text-white'>ID Card List</p>
         </div>
         <div className='m-2 flex justify-end '>
            <div className='bg-green-900 rounded '>
                <p className='p-2 text-white'>+ Create an ID Card</p>
            </div>
         </div>
         <div className='m-4 border-2 rounded-xl border-green-900'>

            <div className='grid md:grid-cols-2 m-5'>
                <div className=''>
                    <p className='m-2 font-bold'>Name</p>
                    <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" />
                </div>
                <div>
                <p className='m-2 font-bold'>Role</p>
                    <input className='border-2 rounded-lg p-2 border-green-700 w-[75%]' type="text" />
                </div>
            </div>
         </div>
         <div className='m-2 flex justify-center '>
            <div className='bg-green-900 rounded '>
                <p className='px-4 p-2 text-white'>Action</p>
            </div>
         </div>
    </div>
    </AdminPanelBoilerplate>
  )
}

export default Admin_Section
