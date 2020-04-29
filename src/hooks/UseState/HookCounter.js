import React, { useState } from 'react';

const HookCounter = () => {

    const [count, setCount] = useState(0);

    const handleCount = () =>{
        setCount(count + 1);
    }

    return (
        <div>
            <h3>Hook Use State</h3>
            <button onClick={handleCount}>Count {count}</button>
        </div>
    )
}

export default HookCounter