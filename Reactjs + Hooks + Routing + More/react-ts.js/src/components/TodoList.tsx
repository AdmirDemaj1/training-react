import React from "react";
import TodoItem from "./TodoItem";

interface Todo {
    id: number;
    text: string;
    isCompleted: boolean;
}

interface TodoFinalProp {
    todoList: Todo[]
}

const TodoList: React.FC<TodoFinalProp> = ({todoList}) => {
    return (
        <ul>
            {todoList.map((todo: Todo) => (
               <TodoItem key={todo.id} todo={todo} foo="" bar={(name) => console.log(name)}/>
            ))

}

        </ul>
    )
}

export default TodoList;