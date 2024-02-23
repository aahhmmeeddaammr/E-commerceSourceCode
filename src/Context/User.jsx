import React, { createContext, useState } from 'react'

export let user=createContext()
export default function User({children}) {
     let [userName,setuserName]=useState("")
     let [userEmail,setuserEmail]=useState("")
  return (
    <user.Provider value={{userName,setuserName,userEmail,setuserEmail}}>
     {children}
    </user.Provider>
  )
}
