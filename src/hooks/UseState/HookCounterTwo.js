import React, { useState } from 'react';

const HookCounterTwo = () => {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const handleResetCount = () => {
        setCount(initialCount);
    }
    const handleIncrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }
    const handleDecrementCount = () => {
        setCount(prevCount => prevCount - 1);
    }
    const handleIncrementByFive = () => {
        debugger;
        for (let i = 0; i < 5; i++) {
            setCount(prevCount => prevCount + 1);
        }
    }

    return (
        <div>
            <h3>Hook Use State - Counter - {count}</h3>
            <button onClick={handleResetCount}>Reset</button>
            <button onClick={handleIncrementCount}>Increment</button>
            <button onClick={handleDecrementCount}>Decrement</button>
            <button onClick={handleIncrementByFive}>Increment by 5</button>
        </div>
    )
}

export default HookCounterTwo