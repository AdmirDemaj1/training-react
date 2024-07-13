import React, { useState } from "react";

interface Props{
    setFilter: (filter: 'all' | 'completed' | 'uncompleted') => void
}

const TodoFilter: React.FC<Props> = ({setFilter}) => {

    return (
        <div>
            <button onClick={() => setFilter("all")}>All</button>
            <button onClick={() => setFilter("completed")}>Completed</button>
            <button onClick={() => setFilter("uncompleted")}>Incompleted</button>
        </div>
    )
}

export default TodoFilter;