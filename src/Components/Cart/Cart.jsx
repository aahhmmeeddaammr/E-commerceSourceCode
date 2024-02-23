import React,{useContext, useEffect, useState} from 'react'
import { cartcounter } from '../../Context/Context';
import Loading from '../Loading/Loading';
import Aos from 'aos';
import {  useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function Cart() {
     let {getCart}=useContext(cartcounter)
     let {setCounter}=useContext(cartcounter);
     let [products,setproducts]=useState([]);
     let [totalprice,settotalprice]=useState(0);
     let[loading,setloading]=useState(true)
     let navigate=useNavigate()
     let [cartid,setcartid]=useState(0);
     async function getuserscart(){
       let {data}=await getCart();
       setcartid(data?._id);
       setproducts(data?.products)
       settotalprice(data?.totalCartPrice)
       setloading(false)
     }
     let {removeOne}=useContext(cartcounter)  
     let {removeItem}=useContext(cartcounter)  
     let {AddToCart}=useContext(cartcounter)  
     async function removeitem(id){
         let {data}= await removeItem(id)
         toast.warning("Item  Removed")
         setproducts(data.products)
         settotalprice(data.totalCartPrice)
         setCounter(data.products.length)
     }
     async function removeone(id,count){
          if(count<=1){
               removeitem(id);
          }else{
               toast.warning("One Item Removed")
               let {data}=await removeOne(id,count);
   
               setproducts(data.products)
               settotalprice(data.totalCartPrice)
               setCounter(data.products.length)
          }
          
     }
     async function addproduct(id){
          let data= await AddToCart(id)
          toast.success("One Item added")
          getuserscart()
     }
     useEffect(()=>{getuserscart();Aos.init({duration:1000});window.scrollTo(0, 0)},[])
     if(loading)return <Loading/>
     if(!products?.length)return <h1 className=' text-main text-center pt-5 vh-100'>NO ITEMS IN CART 👀</h1>
  return (
    <div className=' p-5  my-5 bg-main-light'>
     <div className="">
          <h3>Shop Cart</h3>
          <h5 className=' text-main '>Total Price: {totalprice}  EGP</h5>
     </div>

     {products?.map((val)=>{
          
          return<div key={val.product._id} className=" container " data-aos="fade-up">

          <div className="row my-3 py-3  border-bottom d-flex justify-content-center align-items-center">
               <div className="col-md-1">
                    <img src={val.product.imageCover} className='w-100' alt="" />
               </div>
               <div className="col-md-9">
                    <h3>{val.product.title}</h3>
                    <span className='  text-main d-block'>{val.price} EGP</span>
                    <span onClick={()=>{removeitem(val.product._id);}} className=' cursor-pointer'><i className="fa-solid fa-trash-can text-main my-3"></i> Remove</span>
               </div>
               <div className="col-md-1 d-flex justify-content-around ">
                    <div  onClick={()=>{addproduct(val.product._id)}} className="muns cursor-pointer">
                         <i className="fa-solid fa-plus"></i>
                    </div>
                    <div className=" py-1 mx-2">
                              {val.count}
                    </div>
                    <div  onClick={()=>{removeone(val.product._id,val.count)}} className="plus cursor-pointer">
                         <i className="fa-solid  fa-minus"></i>
                    </div>
               </div>
          </div>
     </div>
     })}
     <div className=" container px-5 text-center">
     {products?.length?<button className='px-5 btn bg-main text-light' onClick={()=>{navigate('/pay/'+cartid)}}>Pay</button>:'' }
     </div>
    </div>
  )
}
