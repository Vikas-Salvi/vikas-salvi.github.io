import React, { useState, useMemo, useCallback } from 'react';
import CounterOne from './UseReducer/CounterOne';

const CounterMemo = () => {
    const [counterOne, setCounterOne] = useState(0);
    const [counterTwo, setCounterTwo] = useState(0);

    const incrementOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incrementTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        alert('isEven'); 
        let i = 0
        while(i < 2000000000) i++
        return counterOne % 2 === 0
    }, [counterOne])
    
    return (
        <div>
            <h2>Memo Hook</h2>
            <button onClick={incrementOne}>Count One - {counterOne}</button>
            <span>{isEven ? ' Even ' : ' Odd '}</span>
            <button onClick={incrementTwo}>Count Two - {counterTwo}</button>
        </div>
    )

}

export default CounterMemo