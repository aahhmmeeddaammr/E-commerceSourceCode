import axios from "axios";
import { createContext, useState } from "react";
export let cartcounter = createContext(0);


function AddToCart(productId){
     return axios.post(`https://ecommerce.routemisr.com/api/v1/cart`,{productId},{headers:{token:(localStorage.getItem('token'))}}).then(({data})=>data).catch((err)=>err)
}


function getCart(){
     return axios.get(`https://ecommerce.routemisr.com/api/v1/cart`,{headers:{token:(localStorage.getItem('token'))}}).then(({data})=>data).catch((err)=>err)
}

function removeItem(id){
     return axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{headers:{token:(localStorage.getItem('token'))}}).then(({data})=>data).catch((err)=>err)
}

function removeOne(id,count){
     return axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{"count":--count},{headers:{token:(localStorage.getItem('token'))}}).then(({data})=>data).catch((err)=>err)
}
export default function Cart_counter_Provider({children}){
     let [Counter,setCounter]=useState(0);
     return <cartcounter.Provider value={{Counter,setCounter,AddToCart,getCart,removeOne,removeItem}}>
          {children}
     </cartcounter.Provider>
}



