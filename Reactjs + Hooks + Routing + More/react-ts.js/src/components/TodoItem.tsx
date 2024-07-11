import React from "react";
interface SingleItemProps {
    id: number; text: string; isCompleted: boolean;
}

interface FinalProps {
    todo: SingleItemProps,
    foo: string,
    bar: (name: string) => void
}

const TodoItem: React.FC<FinalProps> = ({todo, foo, bar}) => {
    return (
        <li >
        <span
          style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}
        //   onClick={() => toggleTodo(todo.id)}
        >
          {todo.text}
        </span>
        <button>Delete</button>
        {/* <button onClick={() => deleteTodo(todo.id)}>Delete</button> */}
      </li>
    )
}

export default TodoItem;