import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from'yup'
import { useNavigate } from 'react-router-dom';
export default function Updatedata() {
     let [error,seterror]=useState('');
     let [sp,setsp]=useState(false);
     let navigate=useNavigate()
  async function onSubmit(values){  
    setsp(false);
     axios.put('https://ecommerce.routemisr.com/api/v1/users/updateMe/',values,{headers:{token:localStorage.getItem('token')}}).then(({data})=>{ console.log(data); navigate('/Signin')}).catch((error)=>{
          console.log(error);
      seterror(error.response.data.errors.msg);
     })
  }
  const phoneregex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  let validationSchema=Yup.object({
    name:Yup.string().min(3).max(20).required(),
    email:Yup.string().email().required(),
    phone:Yup.string().matches(phoneregex)
  })
  let register=useFormik({
    initialValues:{
      name:'',
      email:'',
      phone:''
    },validationSchema,
    onSubmit,
  })
  return (
     <div className='container'>
      <h2 className='my-5'>Update Data:</h2>
      <form  onSubmit={register.handleSubmit}>
          <label htmlFor="username" className='my-2'>Name:</label>
          <input onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="text" name="name"  placeholder='UserName...' id="username"  className=' form-control mb-2'/>
          {(register.errors.name && register.touched.name)?<div className="alert alert-danger">{register.errors.name}</div>:''}
          <label htmlFor="useremail" className='my-2'>Emal:</label>
          <input onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="email" name="email"  placeholder='UserEmail...' id="useremail"  className=' form-control mb-2'/>
          {(register.errors.email && register.touched.email)?<div className="alert alert-danger">{register.errors.email}</div>:''}
          <label htmlFor="userPhone" className='my-2'>Phone:</label>
          <input onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="text" name="phone"  placeholder='Phone...' id="userPhone"  className=' form-control mb-2'/>        
          {(register.errors.phone && register.touched.phone)?<div className="alert alert-danger">{register.errors.phone}</div>:''}
        <button type="submit"  disabled={!(register.dirty&&register.isValid)} className=' btn bg-main my-3'>{sp?<i class="fa-solid fa-spinner fa-spin"></i>:"sumbit"}</button>
      </form>

      {error?<div className=" alert alert-danger">{error}</div>:''}
      
    </div>
  )
}
