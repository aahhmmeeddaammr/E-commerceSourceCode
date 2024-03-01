import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'

export default function Order() {
     let {id}=useParams();
     function getdata(){
          axios.get()
     }
  return (
    <div>
      
    </div>
  )
}
