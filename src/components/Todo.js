import React from 'react'

export default function Todo({ todo, todos, setTodos, text, key }) {

  // const completeHandler = () => {
  //   setTodos(todos.map((item) => {
  //     if (item.id === todo.id) {
  //       return {
  //         ...item,
  //         completed: !item.completed,
  //       }
  //     }
  //     return item
  //   }))
  // }

  const deleteHandler = () =>{
    setTodos(todos.filter((item => item.id !== todo.id)));
  }

  return (
    <div className='btn-contain'>

      <button onClick={deleteHandler} className='add-btn'>Completed</button>
      <li className="todo-list-item">
        <h4 className={`todo ${todo.completed ? "completed" : ''}`}>
          {text}
        </h4>
      </li>
    </div>
  )
}
