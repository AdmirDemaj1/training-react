import React, { useState } from "react";
interface SingleItemProps {
    id: number; text: string; isCompleted: boolean;
}

interface FinalProps {
    todo: SingleItemProps,
    deleteTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
    editTodo: (id: number, updatedText: string) => void
}

const TodoItem: React.FC<FinalProps> = ({todo, deleteTodo, toggleTodo, editTodo}) => {
  const [isEditing , setIsEditing] = useState(false);
  const [newText , setNewText] = useState(todo.text);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    editTodo(todo.id,newText);
    setIsEditing(false);
  };

    return (
        <li >
          {isEditing ? (
            <form onSubmit={handleEditSubmit}>
              <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
        <button type="submit">Save</button>
            </form>
          ) : ( <span
            style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
            onClick={() => toggleTodo(todo.id)}
          >
            {todo.text}
          </span>)}
       
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </li>
    )
}

export default TodoItem;