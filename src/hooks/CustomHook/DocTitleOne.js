import React, { useState, useRef } from 'react';
import useDocTitle from './useDocTitle';

const DocTitleOne = () => {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(prevCount => prevCount + 1);
    }

    useDocTitle(count);

    return (
        <div>
            <h4>Custom Hook 1 - {count}</h4>
            <button onClick={handleClick}>Increment Count</button>
        </div>
    )

}

export default DocTitleOne