import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
export default function Allorders() {
     let navigate=useNavigate();
     let [AllOrders,setAllOrders]=useState([])
      function GetOrders(){
          axios.get(`https://ecommerce.routemisr.com/api/v1/orders/user/${jwtDecode(localStorage.getItem('token')).id}`)
          .then(({data})=>{
               setAllOrders(data)
               console.log(data);
          }).catch((err)=>console.log("err",err))
     }
     useEffect(()=>{GetOrders()},[])
  return (
    <div className=' container vh-100 py-3 my-5 bg-main-light'>
     <h1 className=' pb-3'>Orders</h1>
      <table className=' fs-5  table-bordered table-striped   w-100 text-center'>
          <thead>
               <tr>
               <th>#</th>
               <th>Price</th>
               <th>Status</th>
               <th>Date</th>
               </tr>
          </thead>
          <tbody>
               {AllOrders?.map((val)=>{
                    return<tr key={val._id}>
                    <td>#{val.id}</td>
                    <td>{val.totalOrderPrice}</td>
                    <td className='  d-flex justify-content-center flex-column align-items-center'>
                         <div className={` text-light rounded-3  my-2 px-2 text-center bg-${val.isPaid?"success":"danger"} `}>Paid</div> 
                         <div className={` text-light rounded-3  my-2 px-2 text-center bg-${val.isDelivered?"success":"danger"} `}>Delivered</div> 
                    </td>
                    <td>
                         {val.updatedAt}
                    </td>
                    </tr>
               })}
               
          </tbody>
      </table>
    </div>
  )
}
