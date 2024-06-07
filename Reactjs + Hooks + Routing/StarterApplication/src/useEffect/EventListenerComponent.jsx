import React, { useState,useEffect} from 'react';

const EventListenerComponent = () => {
const [windowsSize, setWindowsSize]= useState({width: window.innerWidth ,height: window.innerHeight} )

console.log(windowsSize)
    useEffect(() => {
        // handleAnimationForCard();
        const handleResize = () => {
            console.log("heyyy resizing")
            setWindowsSize({width: window.innerWidth, height: window.innerHeight})
        }
        window.addEventListener('resize', handleResize);

        // removeEventListner

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    // console.log(count);

    return (
        <div>
        <p>Windows width {windowsSize.width}</p>
        <p>Windows height {windowsSize.height}</p>
        <p>{windowsSize.width > 1376 ? 'heyyy Im hereeee': 'Im not hereee' }</p>
        {/* <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount1(count1 + 1)}>Increment Another</button> */}
        {/* <button onClick={() => setCount((prev) => prev + 1)}></button> */}
        </div>
    )

}

export default EventListenerComponent;