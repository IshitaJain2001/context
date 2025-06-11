import { useState } from "react"

function Input({todos,setTodos}){
    const [in_todo, setIn_Todo]= useState("")
    return(
        <>
             <input type="text" name="" id="" onChange={(e)=>{
                setIn_Todo(e.target.value)
               
             }}  value={in_todo} />
             <button onClick={()=>{
                setTodos([...todos,in_todo ])
                setIn_Todo("")
             }}>add Todo</button>
        </>
    )
}

export default Input