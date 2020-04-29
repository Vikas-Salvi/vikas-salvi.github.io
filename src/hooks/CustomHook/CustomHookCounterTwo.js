import React, { useState, useRef } from 'react';
import useCounter from './useCounter';

const CustomHookCounterTwo = () => {

    const [count, incrementCount, decrementCount, resetCount] = useCounter(10);

    return (
        <div>
            <h4>Custom Counter Counter Hook 2 - {count}</h4>
            <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    )

}

export default CustomHookCounterTwo