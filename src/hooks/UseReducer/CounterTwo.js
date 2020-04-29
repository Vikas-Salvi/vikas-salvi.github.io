import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value }
        case 'decrement2':
            return { ...state, secondCounter: state.secondCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterTwo = () => {

    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Hook - User Resucer - with Object</h3>
            <strong>First Counter: {count.firstCounter}</strong><br></br>
            <strong>Second Counter: {count.secondCounter}</strong>
            <div>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment by 5</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement 2</button>
            </div>
        </div>
    )
}

export default CounterTwo