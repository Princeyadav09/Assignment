import React from 'react'
import AdminPanelBoilerplate from '../../AdminPanelBoilerplate'

const Id_Card = () => {
  return (
    <AdminPanelBoilerplate>
    <div className='m-10 p-10 border-2 rounded-lg  border-green-900'>
         <div className=''>
            <p className='m-2 font-bold'>ID Card Title</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className=''>
            <p className='m-2 font-bold'>Applicable User</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className=''>
            <p className='m-2 font-bold'>Background Image</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className=''>
            <p className='m-2 font-bold'>Profile Image</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className=''>
            <p className='m-2 font-bold'>Logo</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>
         <div className=''>
            <p className='m-2 font-bold'>Signature</p>
            <input className='border-2 rounded-lg p-2 border-green-700 w-full' type="text" />
         </div>

        <div>
            <input type="radio" />
            <label className='p-1' htmlFor="">Name</label>
        </div>
        <div>
            <input type="radio" />
            <label className='p-1' htmlFor="">Admission No</label>
        </div>
        <div>
            <input type="radio" />
            <label className='p-1' htmlFor="">Class</label>
        </div>
        <div>
            <input type="radio" />
            <label className='p-1' htmlFor="">Father’s Name</label>
        </div>
        <div>
            <input type="radio" />
            <label className='p-1' htmlFor="">Mother’s Name</label>
        </div>
        <div>
            <input type="radio" />
            <label className='p-1' htmlFor="">Blood Group</label>
        </div>
        <div>
            <input type="radio" />
            <label className='p-1' htmlFor="">Address</label>
        </div>
        <div>
            <input type="radio" />
            <label className='p-1' htmlFor="">DOB</label>
        </div>

         <div className='m-2 flex justify-center '>
            <div className='bg-green-900 rounded-xl '>
                <p className='px-4 p-2 text-white'>Save</p>
            </div>
         </div>
    </div>
    </AdminPanelBoilerplate>
  )
}

export default Id_Card
