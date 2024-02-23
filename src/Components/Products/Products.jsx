import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import Prouduct from '../Prouduct/Prouduct';
import { wishcounter } from '../../Context/Wishcontext';
import Loading from '../Loading/Loading';

export default function Products({ pagination }) {
     let { Allproducts } = useContext(wishcounter);
     let [bg, setbg] = useState(true)
     let [aproducts,setaproducts]=useState(new Array());
     let[loading,setisloading]=useState(true);
     function getAllproducts(page) {
         axios.get(`https://ecommerce.routemisr.com/api/v1/products?page=${page}`)
         .then(({data})=>{
          setisloading(false);
          setaproducts(data.data);
         })
     }
   
     function isin(id) {
          for (let i = 0; i < Allproducts.length; i++) {
               if (id == Allproducts[i]._id) {
                    return (true);
               }
          }
          return false
     }
     useEffect(()=>{getAllproducts(1)},[])

     if (loading) { return <Loading /> }
     return (
         
          <div className=' overflow-hidden p-5 '>
               <div className="row">
                    {aproducts?.map((val) => {
                         return<Prouduct val={val} key={val._id} isin={isin(val._id)} />

                    })}
                    {pagination ? <div className='text-center'>
                         <button onClick={() => {
                              setbg(true);
                              window.scrollTo(0, 0)
                              getAllproducts(1)
                         }} className={`btn ${bg ? "bg-main text-light" : ""}`}>1</button>
                         <button onClick={() => {
                              setbg(false);
                              window.scrollTo(0, 0)
                              getAllproducts(2)
                             
                         }} className={`btn  ${!bg ? "bg-main text-light" : ""}`}>2</button>
                    </div> : ''}
               </div>
          </div>
     )
}
