import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthNavbar from '../../Auth/AuthNavbar/AuthNavbar'


export default function AuthLayOut() {
  return (
  <>
     <AuthNavbar/>
    <Outlet/>           
  </>  
       
  
  )
}
