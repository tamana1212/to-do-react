import React from 'react'
import Todo from './Todo'

export default function TodoList({todos,setTodos}) {
  return (
      <div className='todo-list'>
          <ul>
              {
                   todos.map(todo => (
                    <Todo
                    todo = {todo}
                    todos = {todos}
                    setTodos = {setTodos}
                    text={todo.text} 
                    key={todo.id} />
                ))
              }
          </ul>
      </div>
  )
}
