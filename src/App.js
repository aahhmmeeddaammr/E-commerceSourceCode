import React from 'react'
import {  RouterProvider, createHashRouter} from 'react-router-dom'
import MainLayout from './Layouts/MainLayout/MainLayout'
import Home from './Components/Home/Home'
import Brands from './Components/Brands/Brands'
import AuthLayOut from './Layouts/AuthLayout/AuthLayOut'
import Signup from './Auth/Signup/Signup'
import Signin from './Auth/Signin/Signin'
import ProtectdProvider from './protected/ProtectdProvider'
import Products from './Components/Products/Products'
import Cart_counter_Provider from './Context/Context'
import ProductDetalis from './Components/ProductDetalis/ProductDetalis'
import Wish_counter_Provider from './Context/Wishcontext'
import Cart from './Components/Cart/Cart'
import Categories from './Components/Categories/Categories'
import CategoryDetials from './Components/CatigoryDitials/CategoryDetials'
import Wishlist from './Components/Wishlist/Wishlist'
import Notfound from './Components/Notfound/Notfound'
import Branddetalis from './Components/Branddetials/Branddetalis'
import User from './Context/User' 
import Account from './Components/Account/Account'
import Updatedata from './Components/Account/Updatedata'
import Forgetpassword from './Components/Forgetpass/Forgetpassword'
import Resetcode from './Components/Forgetpass/Resetcode'
import Changepassword from './Components/Forgetpass/Changepassword'
import Pay from './Components/Pay/Pay'
import { ToastContainer } from 'react-toastify';
export default function App() {
  let Router=createHashRouter(
    [{path:'/',element:<MainLayout/>,children:[
      {index:true,element:<Home/>},
      {path:'Brands',element:<ProtectdProvider><Brands/></ProtectdProvider>},
      {path:'Products',element:<ProtectdProvider><Products pagination={true}/></ProtectdProvider>},
      {path:'Cart',element:<ProtectdProvider><Cart/></ProtectdProvider>},
      {path:'Account',element:<ProtectdProvider><Account/></ProtectdProvider>},
      {path:'updatedata',element:<ProtectdProvider><Updatedata/></ProtectdProvider>},
      {path:'Wishlist',element:<ProtectdProvider><Wishlist/></ProtectdProvider>},
      {path:'Categories',element:<ProtectdProvider><Categories/></ProtectdProvider>},
      {path:'ProductDetalis/:id',element:<ProtectdProvider><ProductDetalis/></ProtectdProvider>},
      {path:'categorydetials/:id',element:<ProtectdProvider><CategoryDetials/></ProtectdProvider>},
      {path:'branddetials/:id',element:<ProtectdProvider><Branddetalis/></ProtectdProvider>},
      {path:'pay/:id',element:<ProtectdProvider><Pay/></ProtectdProvider>},
  ]},
  {path:'/',element:<AuthLayOut/>,children:[
    {index:true,element:<Signup/>},
    {path:'Signup',element:<Signup/>},
    {path:'Signin',element:<Signin/>},
    {path:'ForgetPass',element:<Forgetpassword/>},
    {path:'resetcode',element:<Resetcode/>},
    {path:'changepassword',element:<Changepassword/>},
    {path: '*',element:<Notfound/>},
  ]}
])
  return (
    <>
        < >
    <User>
        <Wish_counter_Provider>
          <Cart_counter_Provider>
            <RouterProvider router={Router}/>
            <ToastContainer position="top-right"
              autoClose={500}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              theme="colored"/>
          </Cart_counter_Provider>
        </Wish_counter_Provider>
    </User>
    </>
    </>

  )
  }