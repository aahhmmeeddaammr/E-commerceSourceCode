import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';
import Aos from 'aos';
export default function Categories2({val}) {
     useEffect(()=>{
          Aos.init({duration:1000})
     },[])
     let navigate=useNavigate()
  return (
     <div onClick={()=>navigate('/categorydetials/'+val._id)} data-aos="fade-up-left"   className="tttt rounded-3   col-md-3 border-2 border-danger p-2">
          <div className=" overflow-hidden position-relative ">
               <img src={val.image} className='w-100  cursor-pointer' height="300px" alt="" />
               <h5 className='  text-center    w-100  bg-main-light  border-bottom rounded-bottom p-3 '>{val.name}</h5>
          </div>
     </div>
 
  )
}
