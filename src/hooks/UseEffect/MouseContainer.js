import React, { Component, useEffect, useState } from 'react';
import HookMouse from './HookMouse';

const MouseContainer = () => {
    const [display, setDisplay] = useState(true);

    const handleClick = e => {
        setDisplay(!display);
    }

    //runs after every render
    useEffect(() => {
        console.log('use effect call...');
    });

    return (
        <div>
            <h3>Use Effect - Run Effect with cleanup</h3>
            <button onClick={handleClick} >Toggle Display</button>
            {display && <HookMouse></HookMouse>}
        </div>
    )

}

export default MouseContainer