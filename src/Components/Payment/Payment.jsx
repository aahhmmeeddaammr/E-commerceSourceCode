
import React from 'react'
import { useFormik } from 'formik'
import axios from 'axios';
export default function Payment() {
     async function onSubmit(values){  
          setsp(true);
           axios.post('https://ecommerce.routemisr.com/api/v1/auth/signin',values).then(({data})=>{
              if(data.message=="success"){
                localStorage.setItem('token',data.token);
                Navigate('/Home');
              }
            }).catch((err)=>{
        
              if(err.response.data.message!="success"){
                setsp(false);
                seterror(err.response.data.message)
              }
            
           })
        }
     let register=useFormik({
          initialValues:{
            email:'',
            password:'',
          },
          onSubmit,
     })
     return (
          <div className='container'>
            <h2 className='my-5'>Pay:</h2>
            <form  onSubmit={register.handleSubmit}>
               <label htmlFor="useremail" className='my-2'>Name:</label>
               <input onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="email" name="email"  placeholder='UserEmail...' id="useremail"  className=' form-control mb-2'/>
          
               <label htmlFor="userpass" className='my-2'>Password:</label>
               <input onKeyDown={register.handleBlur} onBlur={register.handleBlur} onChange={register.handleChange}  type="password" name="password"  placeholder='UserPassword...' id="userpass"  className=' form-control mb-2'/>
               
              <button type="submit"   className=' btn bg-main my-3'>{sp?<i class="fa-solid fa-spinner fa-spin"></i>:"sumbit"}</button>
            </form>
          </div>
        )
}
