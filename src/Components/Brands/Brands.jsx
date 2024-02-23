import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Loading from '../Loading/Loading'
import Aos from 'aos';
export default function Brands() {

  let navigate=useNavigate()
  let[AllBrands,setAllBrands]=useState([])
  let[loading,setloading]=useState(true)

  function GetAllBrands(){
    axios.get('https://ecommerce.routemisr.com/api/v1/brands').then(({data})=>{setAllBrands(data.data);setloading(false)}).catch((error)=>console.log(error))
  }

  window.scrollTo(0, 0);

  useEffect(()=>{
    GetAllBrands();
    Aos.init();
  },[]);
  if (loading) {
    return <Loading/>;
  }
  let x=10
  return (
    <div className=' overflow-hidden p-5 '>
      <h1>Brands</h1>
    <div className=" row gy-2 gx-3 ">
         {
              AllBrands.map((val)=>{
                ++x
                   return <div key={val._id} onClick={()=>navigate('/branddetials/'+val._id)} data-aos-offset={x} data-aos-duration={500*x} data-aos="fade-up-left" className="  tttt cursor-pointer rounded-3 col-md-3 border-2 border-danger pt-2">
                        <div className=" overflow-hidden position-relative ">
                             <img data-aos="flip-left" src={val.image} className='w-100   cursor-pointer' height="300px" alt="" />
                                <h3 className=' text-center   w-100  bg-main-light  border-bottom rounded-bottom p-3 '>{val.name}</h3>
                        </div>
                   </div>
              })
         }
    </div>
   </div>
  )
}
