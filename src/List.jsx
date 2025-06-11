function List({todos,setTodos}){
    return(
        <>
        {
        todos.length>0?
        todos.map((todo,index)=>{
            return <li key={index}>{todo}
            <button onClick={()=>{
                let newTodo= [...todos]
                newTodo.splice(index,1)
                setTodos(newTodo)
            }}>delete 
            
            </button>
            </li>
        })
        :    <p>nothing to show</p>
        }
        </>
    )
}

export default List