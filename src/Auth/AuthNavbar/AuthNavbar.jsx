import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../images/freshcart-logo.svg"
export default function AuthNavbar() {
  return (
    <>
          <nav  className="navbar navbar-expand-lg navbar-light bg-light ">
               <div className="container">
               <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
               <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
               </button>
               <div className="collapse navbar-collapse" id="navbarSupportedContent"> 
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                         
                         <li className="nav-item mx-1">
                         <NavLink type="button" className=" nav-link position-relative"  to="/Signup">
                              Signup 
                         </NavLink>
                         </li>
                         <li className="nav-item mx-1">
                         <NavLink type="button" to="/Signin" className=" nav-link position-relative">
                              Signin 
                         </NavLink>
                         </li>
                    </ul>
               </div>
               </div>
     </nav>
    </>
  )
}
