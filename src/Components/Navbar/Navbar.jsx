import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from "../../images/freshcart-logo.svg"
import { cartcounter } from '../../Context/Context'
import { wishcounter } from '../../Context/Wishcontext'
import { user } from '../../Context/User'
export default function Navbar() {
  let{WCounter,setWCounter}=useContext(wishcounter);
  let {Counter}=useContext(cartcounter);
  let {userName,setuserName}=useContext(user);
  let un=localStorage.getItem('username')
  return <>
          <nav className="navbar navbar-expand-lg navbar-light bg-light " >
      <div className="container">
        <Link className="navbar-brand" to="/"><img src={logo} alt="" /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="Brands">Brands</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="Categories">Categories</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs-5" to="Products">Products</NavLink>
            </li>
          </ul>
          <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
              <li className="nav-item mx-1">
              <NavLink type="button" className=" nav-link position-relative fs-5" to="Cart">
                  Cart <i className="fa-solid fa-cart-shopping"></i>
              {Counter?<span data-aos="fade-up" className="position-absolute MYBADGE start-100 translate-middle badge rounded-pill  bg-main">
              {Counter}
              </span>:''}
              </NavLink>
              </li>
              <li className="nav-item mx-1 ">
              <NavLink type="button" className=" nav-link position-relative fs-5" to="Wishlist">
                Wishlist <i className={`fa-${WCounter?"solid":"regular"} fa-heart`}></i>
              {WCounter?<span data-aos="flip-left" className="position-absolute MYBADGE start-100 translate-middle badge rounded-pill bg-main">
              {WCounter}
              </span>:""}
              </NavLink>
              </li>
              {localStorage.getItem('token')?
              <li className="nav-item ms-3 dropdown">
                  <a className="nav-link "  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className=' bg-main text-light  rounded-circle d-flex justify-content-center align-items-center' style={{height:'35px',width:'35px'}}>
                      {un[0]}
                    </div>
                  </a>
                  <ul className="dropdown-menu w-auto  position-absolute end-50 start-50"   aria-labelledby="navbarDropdown">
                    <li><NavLink className="dropdown-item" to="/Account">Account</NavLink></li>
                    <li><NavLink  className="dropdown-item" onClick={()=>{
                    localStorage.removeItem('token')
                    localStorage.removeItem('username')
                    localStorage.removeItem('useremail')
                    setWCounter(0)
                  }} to="/Signup" >LogOut</NavLink></li>
                  </ul>
                </li>:<li className="nav-item mx-1">
              <NavLink type="button" className=" nav-link position-relative" to="/Signin">
                  SignIn 
              </NavLink>
             
              </li>}
            
          </ul>
        </div>
      </div>
    </nav>
    </>
  
}

                    