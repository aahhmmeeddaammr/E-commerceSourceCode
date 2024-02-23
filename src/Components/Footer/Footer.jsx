import React from 'react'

export default function Footer() {
  return (
    <div className=' container py-5 bg-main-light '>
     <h3>Get The FreshCart App</h3>
     <p>we Will Send You a Link, Open It In Your Phone to Download App</p>
          <div className=" d-flex justify-content-around my-2">
               <input type="email" placeholder='Email...' className=' form-control w-75' />
               <button className='btn bg-main text-light'>Share App Link</button>
          </div>
    </div>
  )
}
