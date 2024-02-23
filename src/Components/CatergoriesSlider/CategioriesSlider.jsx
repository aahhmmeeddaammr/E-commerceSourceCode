import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
export default function CategioriesSlider() {
     var settings2 = {
          dots: true,
          infinite: true,
          speed: 1500,
          slidesToShow: 5,
          slidesToScroll: 2,
          responsive: [
               {
                 breakpoint: 1024,
                 settings: {
                   slidesToShow: 3,
                   slidesToScroll: 3,
                   infinite: true,
                   dots: true
                 }
               },
               {
                 breakpoint: 600,
                 settings: {
                   slidesToShow: 2,
                   slidesToScroll: 2,
                   initialSlide: 2
                 }
               },
               {
                 breakpoint: 480,
                 settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                 }
               }
             ],
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            arrows:false
     };
     let [alldata,setalldata]=useState(new Array());
     useEffect(()=>{
          axios.get('https://ecommerce.routemisr.com/api/v1/categories').then(({data})=>{setalldata(data.data);})
     },[])
     let navigate=useNavigate()
  return (
    <>
           <Slider {...settings2}>
               {alldata.map((val)=><div key={val._id} onClick={()=>navigate('/categorydetials/'+val._id)} className='text-center p-2 '>
                    <img src={val.image} className='w-100 cursor-pointer' height="300px" alt="" />
                    <h5 className='  text-center    w-100  bg-main-light  border-bottom rounded-bottom py-3 '>{val.name}</h5>
               </div>
               )}
           </Slider>
    </>
  )
}