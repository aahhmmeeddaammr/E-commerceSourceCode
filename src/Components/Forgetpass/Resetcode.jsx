import React, { useState } from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
import * as Yup from'yup'
import { Navigate, useNavigate } from 'react-router-dom';
export default function Resetcode() {
     let [error,seterror]=useState('');
     let [sp,setsp]=useState(false);
     let navigate=useNavigate()
     async function onSubmit(values){  
          setsp(true)
          axios.post('https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode',values).then(()=>{navigate('/changepassword')}).catch((err)=>{
          seterror(err?.response.data.message)
               setsp(false)
          })
     }
     let resetcode=useFormik({
          initialValues:{
               resetCode:'',
          },
          onSubmit,
     })
     if (!localStorage.getItem('rest')) {
          return <Navigate to={'/signin'}/>
     }else{
        
          return (
               <div className=' container'>
                  <form  onSubmit={resetcode.handleSubmit}>
                        <label htmlFor="resetcode" className='my-2'>resetCode:</label>
                        <input onKeyDown={resetcode.handleBlur} onBlur={resetcode.handleBlur}  onChange={resetcode.handleChange}  type="text" name="resetCode"  placeholder='reset..' id="resetcode"  className=' form-control mb-2'/>
                      <button type="submit"  disabled={!(resetcode.dirty&&resetcode.isValid)} className=' btn bg-main my-3'>{sp?<i class="fa-solid fa-spinner fa-spin"></i>:"sumbit"}</button>
                    </form>
                    <div className="">
                     {error?<div className=" alert alert-danger">{error}</div>:''}
                    </div>
               </div>
             )
     }
  
}
