import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import Categories2 from './Categories2';
export default function Categories() {
     let [alldata,setalldata]=useState(new Array());
     let[loading,setloading]=useState(true)
     useEffect(()=>{
          axios.get('https://ecommerce.routemisr.com/api/v1/categories').then(({data})=>{setalldata(data.data);setloading(false)})
     },[])
     window.scrollTo(0, 0)
     if(loading) return <Loading/>
  return (
    <div className='   overflow-hidden p-5 '>
     <h1>Categories</h1>
     <div className=" row gy-2 ">
          {
               alldata.map((val)=>{
                    return <Categories2 key={val._id} val={val}/>
               })
          }
     </div>
    </div>
  )
}
