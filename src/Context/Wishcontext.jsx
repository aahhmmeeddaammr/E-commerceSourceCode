import axios from "axios";
import { createContext, useState } from "react";

export let wishcounter = createContext(0);

function addItem(productId){
     return axios.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{productId},{headers:{token:localStorage.getItem('token')}})
     .then(({data})=>data)
     .catch((err)=>err)
}

function RemoveWishListItem(id){
     return axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,{headers:{token:localStorage.getItem('token')}})
     .then(({data})=>data)
     .catch((err)=>err)
}

export default function Wish_counter_Provider({children}){
     let [WCounter,setWCounter]=useState(0);
     let [Allproducts,setAllproducts]=useState([])
     return<wishcounter.Provider value={{
          WCounter,
          setWCounter,
          addItem,
          RemoveWishListItem ,
          Allproducts,
          setAllproducts}}>
          {children}
          </wishcounter.Provider>
}