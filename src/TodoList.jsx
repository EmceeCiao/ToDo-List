import {TodoItem} from './TodoItem.jsx'
export function TodoList({todos, toggleTodo, deleteTodo}){
  return (
    <ul className ="list"> 
      {todos.length === 0 && "There are no tasks currently! Try adding one!"}
      {todos.map(todo => {
    return (
      <TodoItem  
        {...todo}
        key = {todo.id}
        toggleTodo={toggleTodo} 
        deleteTodo={deleteTodo} /> 
      )
      })}
    </ul> 
  )
}