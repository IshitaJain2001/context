import { createContext, useState } from "react"

 export const context=   createContext()

 export const ContextProvider= (props)=>{
    const [count,setCount]=useState(0)
   return(
<context.Provider value={{count,setCount}}>
{props.children}
    </context.Provider>
   ) 
 }

