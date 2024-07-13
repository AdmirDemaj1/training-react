import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

interface TodoFinalProp {
    todoList: Todo[],
    deleteTodo: (id: number) => void,
    toggleTodo: (id: number) => void,
    editTodo: (id: number, updatedText: string) => void
}

const TodoList: React.FC<TodoFinalProp> = ({todoList, deleteTodo, toggleTodo, editTodo}) => {
    return (
        <ul>
            {todoList.map((todo: Todo) => (
               <TodoItem editTodo={editTodo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} key={todo.id} todo={todo}/>
            ))
}
        </ul>
    )
}

export default TodoList;