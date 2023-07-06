import { useState } from "react"
export function NewTodoForm({addTodoprop}) {
  
  const [newItem, setNewItem] = useState("")   
  
  function handleSubmit(e){
    e.preventDefault() 
    if (newItem === "") return

    addTodoprop(newItem)

    setNewItem("")
  } 
  
 return(
  <form onSubmit={ handleSubmit }
      className = "new-item-form">
      <div className = "form-row"> 
        <label htmlFor="item"> New Task </label> 
        <input value = {newItem} 
        onChange={e => setNewItem(e.target.value)} 
        type = "text" 
        id = "item" /> 
    </div> 
      <button className = "btn">Add Task</button> 
    </form> 
  )




  
}