import React, { useContext, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from'yup'
import { Link, useNavigate } from 'react-router-dom';

import Aos from 'aos';
export default function Signin() {
  let [error,seterror]=useState('');
  let [sp,setsp]=useState(false);
  let Navigate=useNavigate()
  async function onSubmit(values){  
    setsp(true);
     axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values).then(({data})=>{
        if(data.message=="success"){
          localStorage.setItem('token',data?.token);
          localStorage.setItem('username',data?.user.name)
          localStorage.setItem('useremail',data?.user.email)
          Navigate('/');
        }
      }).catch((err)=>{
  
        if(err.response.data.message!="success"){
          setsp(false);
          seterror(err?.response.data.message)
        }
      
     })
  }

  const passregex=/[A-za-z][a-zA-Z0-9!@#$%^&*]{7,}$/gm;
  let validationSchema=Yup.object({
    email:Yup.string().email().required(),
    password:Yup.string().matches(passregex).required(),
    
  })
  let register=useFormik({
    initialValues:{
      email:'',
      password:'',
    },validationSchema,
    onSubmit,
  })
  useEffect(()=>{
    Aos.init();
  },[])
  return (
    <div className='container vh-100'>
      <h2 className='my-5'>Register Now:</h2>
      <form  onSubmit={register.handleSubmit}>
          <label  data-aos="fade-up" data-aos-duration={600} htmlFor="useremail" className='my-2'>Emal:</label>
          <input data-aos="fade-up" data-aos-duration={800} onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="email" name="email"  placeholder='UserEmail...' id="useremail"  className=' form-control mb-2'/>
          {(register.errors.email && register.touched.email)?<div className="alert alert-danger">{register.errors.email}</div>:''}
      
          <label data-aos="fade-up" data-aos-duration={1000} htmlFor="userpass" className='my-2'>Password:</label>
          <input data-aos="fade-up" data-aos-duration={1200} onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="password" name="password"  placeholder='UserPassword...' id="userpass"  className=' form-control mb-2'/>
          {(register.errors.password && register.touched.password)?<div className="alert alert-danger">{register.errors.password}</div>:''}        
        <Link data-aos="fade-up" data-aos-duration={1400} className=" text-main text-decoration-underline d-block" to="/ForgetPass">Forget Password?</Link>
        <button data-aos="fade-up" data-aos-duration={1600} type="submit"  disabled={!(register.dirty&&register.isValid)} className=' btn bg-main my-3'>{sp?<i className="fa-solid fa-spinner fa-spin"></i>:"sumbit"}</button>
      </form>
      {error?<div data-aos="fade-up" data-aos-duration={1700} className=" alert alert-danger">{error}</div>:''}
    </div>
  )
}
