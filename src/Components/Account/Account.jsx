import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Account() {
  let navigate=useNavigate()
  return (
    <div className=' container vh-100 my-5'>
           <h1>Account</h1>
           <p className=' my-2'>User Name:</p><div className=" form-control  w-auto"> {localStorage.getItem('username')}</div>
           <p className='my-2'>User Email:</p> <div className=" form-control w-auto"> {localStorage.getItem('useremail')}</div>
           <div className=" d-flex justify-content-around">
               <button onClick={()=>navigate('/updatedata')} className=' btn bg-main text-light my-5 '>Update Data</button>
           </div>

    </div>
  )
}
