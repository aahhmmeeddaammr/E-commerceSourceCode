import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from'yup'
import { useNavigate } from 'react-router-dom';
import aos from"aos"
export default function Signup() {
  let [error,seterror]=useState('');
  let [sp,setsp]=useState(false);
  let navigate=useNavigate()
  async function onSubmit(values){  
    setsp(false);
     axios.post('https://ecommerce.routemisr.com/api/v1/auth/signup',values).then(()=>{navigate('/Signin')}).catch(()=>{
      seterror('Enter Valied Data')
     })
  }
  const passregex=/[A-za-z][a-zA-Z0-9!@#$%^&*]{7,}$/gm;
  const phoneregex=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
  let validationSchema=Yup.object({
    name:Yup.string().min(3).max(20).required(),
    email:Yup.string().email().required(),
    password:Yup.string().matches(passregex).required(),
    rePassword:Yup.string().oneOf([Yup.ref("password")]).required(),
    phone:Yup.string().matches(phoneregex)
  })
  let register=useFormik({
    initialValues:{
      name:'',
      email:'',
      password:'',
      rePassword:'',
      phone:''
    },validationSchema,
    onSubmit,
  })
  useEffect(()=>{
    aos.init()
  },[])
  return (
    <div className='container overflow-hidden'>
      <h2 className='mt-5 mb-1'>Register Now:</h2>
      <form  onSubmit={register.handleSubmit}>
          <label htmlFor="username" data-aos="fade-up" data-aos-duration={600} className='my-2'>Name:</label>
          <input onKeyDown={register.handleBlur} data-aos="fade-up" data-aos-duration={900} onBlur={register.handleBlur} onChange={register.handleChange}  type="text" name="name"  placeholder='UserName...' id="username"  className=' form-control mb-2'/>
          {(register.errors.name && register.touched.name)?<div className="alert alert-danger">{register.errors.name}</div>:''}
          <label htmlFor="useremail" data-aos="fade-up" data-aos-duration={1200} className='my-2'>Emal:</label>
          <input onKeyDown={register.handleBlur} data-aos="fade-up" data-aos-duration={1500} onBlur={register.handleBlur} onChange={register.handleChange}  type="email" name="email"  placeholder='UserEmail...' id="useremail"  className=' form-control mb-2'/>
          {(register.errors.email && register.touched.email)?<div className="alert alert-danger">{register.errors.email}</div>:''}
      
          <label data-aos="fade-up" data-aos-duration={1800} htmlFor="userpass" className='my-2'>Password:</label>
          <input data-aos="fade-up" data-aos-duration={2100} onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="password" name="password"  placeholder='UserPassword...' id="userpass"  className=' form-control mb-2'/>
          {(register.errors.password && register.touched.password)?<div className="alert alert-danger">{register.errors.password}</div>:''}
        
          <label htmlFor="userrepass" data-aos="fade-up" data-aos-duration={2400} className='my-2'>rePassword:</label>
          <input onKeyDown={register.handleBlur} data-aos="fade-up" data-aos-duration={2700} onBlur={register.handleBlur} onChange={register.handleChange}  type="text" name="rePassword"  placeholder='rePassword...' id="userrepass"  className=' form-control mb-2'/>  
          {(register.errors.rePassword && register.touched.rePassword)?<div className="alert alert-danger">{register.errors.rePassword}</div>:''}

          <label htmlFor="userPhone" data-aos="fade-up" data-aos-duration={3000} className='my-2'>Phone:</label>
          <input onKeyDown={register.handleBlur} data-aos="fade-up" data-aos-duration={330000} onBlur={register.handleBlur} onChange={register.handleChange}  type="text" name="phone"  placeholder='Phone...' id="userPhone"  className=' form-control mb-2'/>        
          {(register.errors.phone && register.touched.phone)?<div className="alert alert-danger">{register.errors.phone}</div>:''}
        
        <button type="submit"  disabled={!(register.dirty&&register.isValid)} className=' btn bg-main my-3'>{sp?<i className="fa-solid fa-spinner fa-spin"></i>:"sumbit"}</button>
      </form>
      {error?<div className=" alert alert-danger">{error}</div>:''}
    </div>
  )
}
