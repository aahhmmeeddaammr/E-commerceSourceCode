import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from'yup'
import { useNavigate } from 'react-router-dom';
export default function Forgetpassword() {
     let [error,seterror]=useState('');
     let [sp,setsp]=useState(false);
     let navigate=useNavigate()
     async function onSubmit(values){  
          setsp(true)
           axios.post('https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords',values).then(()=>{     localStorage.setItem('rest','rest'); navigate('/resetcode')}).catch((err)=>{
          seterror(err?.response.data.message)
     
          setsp(false)
          })
     }
     let validationSchema=Yup.object({
       email:Yup.string().email().required(),

     })
     let register=useFormik({
       initialValues:{
         email:'',
       },validationSchema,
       onSubmit,
     })
     return (
       <div className='container'>
     
         <form  onSubmit={register.handleSubmit}>
             <label htmlFor="useremail" className='my-2'>Emal:</label>
             <input onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="email" name="email"  placeholder='UserEmail...' id="useremail"  className=' form-control mb-2'/>
             {(register.errors.email && register.touched.email)?<div className="alert alert-danger">{register.errors.email}</div>:''}
           <button type="submit"  disabled={!(register.dirty&&register.isValid)} className=' btn bg-main my-3'>{sp?<i class="fa-solid fa-spinner fa-spin"></i>:"sumbit"}</button>
         </form>
         <div className="">
          {error?<div className=" alert alert-danger">{error}</div>:''}
         </div>
       </div>
     )
}
