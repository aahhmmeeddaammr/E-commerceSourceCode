import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from'yup'
import { useNavigate } from 'react-router-dom';
export default function Changepassword() {
     let [error,seterror]=useState('');
     let [sp,setsp]=useState(false);
     let navigate=useNavigate()
     async function onSubmit(values){  
       setsp(false);
        axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',values).then(()=>{navigate('/Signin')}).catch((err)=>{
          console.log(err);
         seterror('Enter Valied Data');
        })
     }
     const passregex=/[A-za-z][a-zA-Z0-9!@#$%^&*]{7,}$/gm;
     let validationSchema=Yup.object({
       email:Yup.string().email().required(),
       newPassword:Yup.string().matches(passregex).required(),
     })
     let register=useFormik({
       initialValues:{
         email:'',
         newPassword:'',
       },validationSchema,
       onSubmit,
     })
     return (
          <div className='container'>
            <h2 className='my-5'>Change Password:</h2>
            <form  onSubmit={register.handleSubmit}>
                <label htmlFor="useremail" className='my-2'>Emal:</label>
                <input onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="email" name="email"  placeholder='UserEmail...' id="useremail"  className=' form-control mb-2'/>
                {(register.errors.email && register.touched.email)?<div className="alert alert-danger">{register.errors.email}</div>:''}
                <label htmlFor="userpass" className='my-2'>Password:</label>
                <input onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="password" name="newPassword"  placeholder='UserPassword...' id="userpass"  className=' form-control mb-2'/>
                {(register.errors.newPassword && register.touched.newPassword)?<div className="alert alert-danger">{register.errors.newPassword}</div>:''}
              <button type="submit"  disabled={!(register.dirty&&register.isValid)} className=' btn bg-main my-3'>{sp?<i class="fa-solid fa-spinner fa-spin"></i>:"Change"}</button>
            </form>
            {error?<div className=" alert alert-danger">{error}</div>:''}
          </div>
        )
}
