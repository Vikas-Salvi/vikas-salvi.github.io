import React, { Component, useEffect, useState } from 'react';
import HookMouse from './HookMouse';

const IntervalHookCounter = () => {
    const [count, setCount] = useState(0);

    const tick = () => {
       setCount(prevCount => prevCount + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    },[count])

    return (
        <div>
            <h3>Interval Hook Counter - Use Effect - with incorrect dependency</h3>
            <h4>{count}</h4>
        </div>
    )

}

export default IntervalHookCounter