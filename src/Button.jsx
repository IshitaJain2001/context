import React, { useContext } from 'react'
import { context } from './ProductContext'

export default function Button() {
  const {count,setCount}=  useContext(context)


  return (
    <div>
       {count} 
  <button onClick={()=>setCount(count+1)}>inc</button>

      </div>
  )
}
