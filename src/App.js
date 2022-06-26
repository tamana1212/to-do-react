import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import TodoList from './components/TodoList';
import React, {useState} from 'react';
import Counter from './components/Counter';

function App() {

  const [inputText, setInputText] = useState('');
  const [todos,setTodos] = useState([]);

  return (
    <div className="App">
      <Navbar 
      />
      
      <Counter 
      todos = {todos}
      />
      
      
      <Form 
      inputText = {inputText}
      setInputText = {setInputText}
      todos = {todos}
      setTodos = {setTodos}
      />


      <TodoList 
      todos = {todos}
      setTodos = {setTodos}
      />
    </div>
  );
}

export default App;
