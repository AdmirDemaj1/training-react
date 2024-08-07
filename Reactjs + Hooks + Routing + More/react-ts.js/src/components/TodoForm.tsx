import React, {useState} from "react";

interface Props {
    addTodo: (text: string) => void
}

const TodoForm: React.FC<Props> = ({addTodo}) => {

    const [input, setInput] = useState('');
    //Handle Submit function
    const handleSubmit = (e: React.FormEvent ) => {
        e.preventDefault();
        //Add the item to the list
        addTodo(input);
        setInput('');
    }

    return (
    <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
    </form>
    )
};

export default TodoForm;