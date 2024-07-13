import React, { useEffect, useLayoutEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';

function App() {
  const [todoList, setTodoList] = useState<{id: number, text: string, isCompleted: boolean}[]>(() => {
    const savedItems = localStorage.getItem('todos');
    return savedItems ? JSON.parse(savedItems) : []
  }
  );
  const [filter, setFilter] = useState<'all' | 'completed' | 'uncompleted'>('all');

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todoList))
}, [todoList])
  // Create a new todo
  const addTodo = (text: string) => {
    const newTodo = {id: Date.now(), text, isCompleted: false};
    setTodoList([...todoList, newTodo]);
  }

  // Delete a todo
  const deleteTodo = (id: number) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  }  
  
  //Toggle Todo
  const toggleTodo = (id: number) => {
    let updatedTodos = todoList.map(
      todo => todo.id === id ?
       {...todo, isCompleted: !todo.isCompleted} :
        todo);
    setTodoList(updatedTodos)
  }

// Edit Todo
const editTodo = (id: number, updatedText: string) => {
setTodoList(todoList.map(todo => todo.id === id ? {...todo, text: updatedText }: todo  ))
}

//Handle filtered todos
const filteredTodos = todoList.filter( todo => {
  if(filter === 'completed') return todo.isCompleted;
  if(filter === 'uncompleted') return !todo.isCompleted;
  return true;
})

  return (
    <div className="App">
     <Header/>
     <TodoFilter setFilter={setFilter}/>
     <TodoForm addTodo={addTodo} />
     <TodoList editTodo={editTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} todoList={filteredTodos}/>
     
    </div>
  );
}

export default App;
