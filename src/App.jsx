import './App.css' 
import { useState } from "react"  
import { useEffect } from "react"
import {NewTodoForm} from './NewTodoForm.jsx'  
import {TodoList} from './TodoList.jsx'

export default function App() { 
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS") 
    if (localValue == null) return []  
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    
  }, [todos])
  
  function toggleTodo(id, completed){ 
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return { ...todo, completed}
        } 
        return todo
        
      })
    })
    
  }  

  function addTodo(title){
      setTodos(currentTodos => {
      return [
        ...currentTodos, {id: crypto.randomUUID(), title, completed: false},
            ]})  
}

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  
  return (
    <> 
      <NewTodoForm addTodoprop ={addTodo}/>
    <h1 className ="header"> To-do List</h1>   
    <TodoList todos = {todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
    )
}