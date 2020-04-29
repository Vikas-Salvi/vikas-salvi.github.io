import React, { Component, useEffect, useState } from 'react';

const ClassCounterOne = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    //runs after every render
    useEffect(() => {
        console.log('component render...');
        console.log('updating with use effect');
    }, [count]);
    const handleChange = e => {
        setName(e.target.value);
    }
    const handleClick = () => {
        //debugger;
        setCount(prevCount => {
            return prevCount + 1
        });
    }

    return (
        <div>
            <h3>Use Effect</h3>
            <input type="text" value={name} onChange={handleChange}></input>
            <button onClick={handleClick} >{name} Click {count} times
        </button>
        </div>
    )

}

export default ClassCounterOne