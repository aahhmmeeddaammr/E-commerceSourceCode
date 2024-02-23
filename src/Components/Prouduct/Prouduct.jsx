import React, { useContext, useEffect, useState } from 'react'
import { cartcounter } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';
import { wishcounter } from '../../Context/Wishcontext';
import Aos from 'aos';
import { toast } from 'react-toastify';
export default function Prouduct({val,isin}) {
     let {setCounter}=useContext(cartcounter);
     let [wish,setwish]=useState(isin)
     let {setWCounter}=useContext(wishcounter);
     let navegate=useNavigate()
     let {AddToCart}=useContext(cartcounter)  
     let {addItem}=useContext(wishcounter);
     let {RemoveWishListItem}=useContext(wishcounter);
     let {setAllproducts}=useContext(wishcounter);
     let [x,setx]=useState(false)
     async function addProductToWishlist(id){
          toast.success('product added successfully 🥰 🥰')
          let data=await addItem(id);
          setAllproducts(data.data);
          setWCounter(data.data.length)
     }
     async function removeItemToWL(id){
          toast.warning("Item  Removed 💔 💔")
          let data=await RemoveWishListItem(id);
          setAllproducts(data.data);
          setWCounter(data.data.length)
     }
     async function addproduct(id){
          setx(true)
          let data= await AddToCart(id)
          setCounter(data.data.products.length)
          toast.dark('product added successfully')
          setx(false)
     }
     useEffect(()=>{
          Aos.init()
     })
  return (
    <>
      <div data-aos="fade-up-left" className="col-md-6   col-lg-2 cursor-pointer product rounded-2 my-2 overflow-hidden py-1" key={val._id}>
          <div className="" onClick={()=>{navegate('/ProductDetalis/'+val.id)}}>
          <img data-aos="flip-right" src={val?.imageCover} className=' w-100' alt="" />
                         <h5>{val?.title.split(' ').slice(0,2).join(' ')}</h5>
                       <span  className=' fs-6 text-main '>{val?.category.name}</span>
                         <div   className=" d-flex justify-content-between">
                              <div className="">
                                   {val.price} EGP
                              </div>
                              <div className="">
                                   {val.ratingsAverage}<i className="fa-solid fa-star rating-color"></i>
                              </div>
                         </div> 
          </div>
          <i onClick={()=>{
               if(localStorage.getItem('token')){

                    setwish(!wish);
                    if(!wish){
                         
                         addProductToWishlist(val._id)
                    }else{
                         removeItemToWL(val._id)
                    }
               }
          }} className={`fa-${wish?"solid":"regular"}  fa-xl fa-heart d-block my-3 text-main`}></i>
               
               <button onClick={()=>{
                    if(localStorage.getItem('token')){
                         
                         let id=val._id;
                         addproduct(id)
                    }
               }} className='btn bg-main my-2 text-light' disabled={x}>Add To Cart</button>
                    </div>
    </>
  )
}
