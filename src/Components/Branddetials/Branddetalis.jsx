import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { wishcounter } from '../../Context/Wishcontext';

import Prouduct from '../Prouduct/Prouduct';
import Loading from '../Loading/Loading';
export default function Branddetalis() {

     let {id}=useParams();
     let {Allproducts}=useContext(wishcounter);
     let [products,setproducts]=useState([])
     let[loading,setloading]=useState(true)

     function getAllProductsIncategory(){
          axios.get(`https://ecommerce.routemisr.com/api/v1/products?brand=${id}`).then(({data})=>{
               console.log(data);
               setproducts(data.data)
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
     if(loading)return <Loading/>
     if(products.length==0){
          console.log(products);
          return <h1 className=' vh-100 my-5 text-center text-main'> NO Items In Stock</h1>
     }
     
     return (
          <div className=" container">
          <div className="row">
          {products?.map((val)=>{
              return <Prouduct val={val} key={val.id} isin={isin(val.id)}/>
          })}
          </div>
          </div>
        )
}

