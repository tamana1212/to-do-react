import React from 'react'

export default function Form({todos,setTodos,inputText, setInputText}) {

  const inputTexthandler = (e) =>{
    console.log(e.target.value)
    setInputText(e.target.value)
  }

  const submitHandler = () => {
    setTodos([
      ...todos,
      {
        id : Math.random() * 1000,
        text : inputText,
        completed : false,
      }
    ])
    setInputText("")
  }

  return (
      <div className='input-form'>
          <input value={inputText} onChange={inputTexthandler} type="text" className="todo-input" />
          <button onClick={submitHandler} id='submit-btn' type='submit'>Submit</button>
      </div>
  )
}
