import React, { useState,useEffect} from 'react';

const TrackStateChangesComponent = () => {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);

    useEffect(() => {
        console.log("Handle expensive calculation");

    }, [count, count1])

    console.log(count);

    return (
        <div>
        <p>Count {count}</p>
        <p>Count1 {count1}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount1(count1 + 1)}>Increment Another</button>
        {/* <button onClick={() => setCount((prev) => prev + 1)}></button> */}
        </div>
    )

}

export default TrackStateChangesComponent;