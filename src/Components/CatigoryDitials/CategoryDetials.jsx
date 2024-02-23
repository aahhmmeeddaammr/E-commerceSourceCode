import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { wishcounter } from '../../Context/Wishcontext';

import Prouduct from '../Prouduct/Prouduct';
import Loading from '../Loading/Loading';
export default function CategoryDetials() {
     let {id}=useParams();
     let {Allproducts}=useContext(wishcounter);
     let [products,setproducts]=useState([])
     let[loading,setloading]=useState(true)
     function getAllProductsIncategory(){
          axios.get(`https://ecommerce.routemisr.com/api/v1/products?category=${id}`).then(({data})=>{
               setproducts(data.data)
               // console.log(data.data);
               setloading(false)
          })
     }
     function isin(id){
          for(let i=0 ;i<Allproducts.length;i++){
               if(id==Allproducts[i]._id){
                    return(true);
               }
          }
          return false
     }
     useEffect(()=>
     {
          getAllProductsIncategory()
     },[])
     let x=0;
     if(loading)return <Loading/>
     if(products.length==0){
          return <h1 className=' my-5 vh-100 text-center text-main'> NO Items In Stock</h1>
     }
  return (
     <>
     <div className=" container">
          <div className="row">
          {products?.map((val)=>{
              return <Prouduct val={val} key={val.id} isin={isin(val.id)}/>
          })}
          </div>
     </div>
            
     </>
  )
}
