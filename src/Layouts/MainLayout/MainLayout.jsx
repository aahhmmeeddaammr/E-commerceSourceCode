import React,{useContext, useEffect} from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import { cartcounter } from '../../Context/Context';
import { wishcounter } from '../../Context/Wishcontext';
import axios from 'axios';
import Footer from '../../Components/Footer/Footer'
export default function MainLayout() {
  let {getCart}=useContext(cartcounter)
  let {setCounter}=useContext(cartcounter);
  let {setWCounter}=useContext(wishcounter);
  let {setAllproducts}=useContext(wishcounter);
  async function getuserscart(){
    let {data}=await getCart();
    setCounter(data?.products.length);
  }
  async function getWishlist(){
    axios.get('https://ecommerce.routemisr.com/api/v1/wishlist',{headers:{token:localStorage.getItem("token")}}).then(({data})=>{setAllproducts(data.data);setWCounter(data.count)}).catch((err)=>console.log(err))
  }
  useEffect(()=>{if(localStorage.getItem('token')){getuserscart();getWishlist()}else{setCounter(0);setWCounter(0)}},[])
  return (
    <>
    
      <Navbar/>
      <Outlet/>
      <div className=" bg-main-light">
      <Footer/>
      </div>
    
    </>
  )
}
