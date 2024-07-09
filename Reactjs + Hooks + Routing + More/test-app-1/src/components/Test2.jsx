import React from 'react';
import { useState } from 'react';

function Test2() {
    const [showFirstContent, setShowFirstContent] = useState(true);
const toogleContent = () => {
    setShowFirstContent(!showFirstContent);
}
console.log(showFirstContent)
    return (
        <div>
            <button onClick={toogleContent}>Toogle Content</button>
            {showFirstContent ? <h2>Hello Foo!</h2> : <p>Goodbye Foo!</p>}
        </div>
    )
}

export default Test2;