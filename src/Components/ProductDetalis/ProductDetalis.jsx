import axios from 'axios';
import { cartcounter } from '../../Context/Context';
import React, { useEffect, useState , useContext} from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';
import AOs from"aos"
import { toast } from 'react-toastify';
export default function ProductDetalis() {
     let {setCounter}=useContext(cartcounter);
     let [details,setdetails]=useState({});
     let[loading,setloading]=useState(true)
     let {AddToCart}=useContext(cartcounter)  
     async function addproduct(id){
          let data= await AddToCart(id)
          setCounter(data.data.products.length)
          toast.dark('product added successfully')
     }
     let {id}=useParams()
     async function getdetials(){
          let {data}=await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
          setdetails(data.data)
          setloading(false);
     }
useEffect(()=>{getdetials();AOs.init();window.scrollTo(0, 0)},[])
     if(loading)return <Loading/>
  return (
    <div className=' container  py-5'>
     <div className="row d-flex justify-content-center  align-items-center">
          <div className="col-md-3">
               <img data-aos="flip-right" data-aos-duration={10000} src={details?.imageCover} className='w-100' alt="" />
          </div>
          <div className="col-md-9">
               <h4 data-aos="fade-left">{details.title}</h4>
               <p data-aos="fade-left" className=' text-muted'>{details.description}</p>
               <span data-aos="fade-left" className=' text-main fs-5'>{details.category?.name}</span>
               <div data-aos="fade-up" className=" d-flex justify-content-between">
                              <div className="">
                                   {details.price}EGP
                              </div>
                              <div className="">
                                  {details.ratingsAverage} <i className="fa-solid fa-star rating-color"></i>
                              </div>
               </div>
               <button onClick={()=>{addproduct(details._id)}} className='btn bg-main w-100 my-5 text-light'>+ Add To Cart</button>
          </div>
     </div>
      
    </div>
  )
}
