import React, { useState, useRef, useEffect } from 'react';

const RefHook = () => {
    const inputRef = useRef(null)
    const intervalRef = useRef()
    const [timer, setTimer] = useState(0)

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <div>
            <h4>Hook Timer - {timer}</h4>
            <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
            <input type="text" ref={inputRef}></input>
        </div>
    )

}

export default RefHook