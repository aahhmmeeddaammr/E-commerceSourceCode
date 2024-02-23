import React, { useContext, useEffect, useState } from 'react'
import { wishcounter } from '../../Context/Wishcontext';
import axios from 'axios';
import Loading from '../Loading/Loading';
import { cartcounter } from '../../Context/Context';
import Aos from 'aos';
import { toast } from 'react-toastify';
export default function Wishlist() {
     let {setWCounter}=useContext(wishcounter);
     let {RemoveWishListItem}=useContext(wishcounter);
     let {Allproducts,setAllproducts}=useContext(wishcounter);
     let[loading,setloading]=useState(true)
     let {AddToCart}=useContext(cartcounter)
     let {setCounter}=useContext(cartcounter);
     async function addproduct(id){
          let data= await AddToCart(id)
          setCounter(data?.data?.products?.length)
          toast.dark('product added successfully')
     }
     async function removeItemToWL(id){
          let data=await RemoveWishListItem(id)
          toast.warning("Item  Removed 💔 💔")
          setWCounter(data?.data?.length)
          getWishlist()
     }
     async function getWishlist(){
       axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{headers:{token:localStorage.getItem("token")}}).then(({data})=>{setloading(false); setAllproducts(data.data);}).catch((err)=>console.log(err))
     }
     useEffect(()=>{getWishlist();Aos.init({duration:1200});window.scrollTo(0, 0)    },[])
     if(loading)return <Loading/>
    if(!Allproducts?.length)return <h1 className=' text-main text-center pt-5 vh-100'>NO ITEMS IN WISHLIST 👀 </h1>
  return (
    <div className='  p-5  '>
     <h1 className='pt-4'>Wishlist</h1>
     {Allproducts?.map((val)=>{
               return<div key={val._id} data-aos="fade-left" className="row d-flex  justify-content-center align-items-center border-bottom py-3" >
               <div className="col-md-2">
                    <img data-aos="flip-right" src={val.imageCover} className='w-100' alt="" />
               </div>
               <div  className="col-md-6">
                    <h3>{val?.title}</h3>
                    <p>{val.description}</p>
               </div>
               <div   className="col-md-3 d-flex flex-column align-items-center ">
                    <button onClick={()=>addproduct(val._id)} className='btn bg-main text-light'>Add To Cart</button>
                    <i onClick={()=>{removeItemToWL(val._id)}} className="fa-solid fa-heart d-block my-3 fa-2x cursor-pointer text-main"></i>
               </div>
          </div>
          })}
     
    </div>
  )
}
