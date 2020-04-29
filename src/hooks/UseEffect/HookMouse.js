import React, { Component, useEffect, useState } from 'react';

const HookMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const logMousePosition = e => {
        console.log('Mouse event...');
        setX(e.clientX);
        setY(e.clientY);
    }

    //runs after every render
    useEffect(() => {
        console.log('use effect call...');
        window.addEventListener('mousemove', logMousePosition);

        //useEffect cleanup
        return () => {
            console.log('Component unmounting...');
            window.removeEventListener('mousemove', logMousePosition);
        }
    },[]);

    return (
        <div>
            <h3>Use Effect - Run Effect only once</h3>
            <h4>Hooks - X - {x} and Y - {y}</h4>
        </div>
    )

}

export default HookMouse