import React, { useState } from 'react';
import useCounter from './useCounter';

const CustomHookCounterOne = () => {
    
    const [count, incrementCount, decrementCount, resetCount] = useCounter(0);

    return (
        <div>
            <h4>Custom Counter Hook 1 - {count}</h4>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )

}

export default CustomHookCounterOne