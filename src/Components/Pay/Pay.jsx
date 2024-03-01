import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import {useParams } from 'react-router-dom';
import Aos from 'aos';
export default function Pay(){

     let [seterror]=useState('');
     let [sp,setsp]=useState(false);
     let {id}=useParams();

     async function onSubmit(values){  

      setsp(true);

      axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=https://aahhmmeeddaammr.github.io/Ecommerce/%23`,{"shippingAddress":values},{headers:{token:localStorage.getItem('token')}}).then(({data})=>{
          window.location.href=(data.session.url)
        }).catch((err)=>{
          if(err.response.data.message!="success"){
            setsp(false);
            seterror(err?.response.data.message)
          }
        })
      }
      let register=useFormik({
        initialValues:{
          details:'',
          phone:'',
          city:'',
        },onSubmit,})
     useEffect(()=>{
      Aos.init();
    },[])
    return (
    <div className='container vh-100'>
    
         <h2 className='my-5'>Pay Now:</h2>
    
         <form  onSubmit={register.handleSubmit}>


    
             <label  data-aos="fade-up" data-aos-duration={600} htmlFor="useremail" className='my-2'>details:</label>
    
             <textarea data-aos="fade-up" data-aos-duration={800} onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="text" name="details"  placeholder='details...' id="useremail"  className=' form-control mb-2'/>
     

             <label data-aos="fade-up" data-aos-duration={1000} htmlFor="userpass" className='my-2'>Phone:</label>

             <input data-aos="fade-up" data-aos-duration={1200}  onBlur={register.handleBlur} onChange={register.handleChange}  type="text" name="phone"  placeholder='Phone...' id="userpass"  className=' form-control mb-2'/>
            
            

             <label data-aos="fade-up" data-aos-duration={1000} htmlFor="city" className='my-2'>City:</label>

             <input data-aos="fade-up" data-aos-duration={1200} onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="text" name="city"  placeholder='City...' id="city"  className=' form-control mb-2'/>
           
           <button data-aos="fade-up"  type="submit"  onClick={register.handleSubmit} className=' btn bg-main text-light my-3'>{sp?<i className="fa-solid fa-spinner fa-spin"></i>:"Pay"}</button>

         </form>

       </div>

)

}
