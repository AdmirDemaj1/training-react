// useState() = Re-renders the component when the state changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
// When you want a component to "remember" some information 
// vut you dont want that info to trigger a rerender.

// 1. Accessing/Interaction with DOM elements
// Optimisng performance in case of autocomplete example
// 2. Animation, Focus, Transitions
// 3. Managing Timer and Intervals

import React, {useRef, useState} from 'react';

function MyComponent() {
    // let [number ,setNumber] = useState(0);
    const buttonRef = useRef(0);
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);


    // function handleClick() {
    //     // setNumber((n) => n+1);
    //     buttonRef.current = buttonRef.current + 1;
    //     console.log( buttonRef.current);
    // }

    function handleClick() {
        console.log(inputRef1.current)
      inputRef1.current.focus();
      inputRef1.current.style.backgroundColor = 'yellow';
      inputRef2.current.style.backgroundColor = 'green';
    }

    console.log("renderingggggggggggg");

    return (
        <>
        <button onClick={handleClick}>Increment Meeee {buttonRef.current}</button>
        <button onClick={handleClick}>Focuss on input</button>
        <input ref={inputRef1} type="text"  />
        <input ref={inputRef2} type="text"  />
        </>
    )
}
export default MyComponent;