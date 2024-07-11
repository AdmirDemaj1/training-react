import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  const [todoList, setTodoList] = useState<{id: number, text: string, isCompleted: boolean}[]>([]);
  
  const addTodo = (text: string) => {
    const newTodo = {id: Date.now(), text, isCompleted: false};
    setTodoList([...todoList, newTodo]);
  }

 

  return (
    <div className="App">
     <Header/>
     <TodoForm addTodo={addTodo} />
     <TodoList todoList={todoList}/>
    </div>
  );
}

export default App;
