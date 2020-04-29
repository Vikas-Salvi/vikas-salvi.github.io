import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value }
        case 'decrement':
            return { ...state, firstCounter: state.firstCounter - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

const CounterThree = () => {

    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

    return (
        <div>
            <h3>Hook - User Resucer - Multiple Reducer</h3>
            <div>
                <strong>Counter: {count.firstCounter}</strong>
                <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
                <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
                <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
            </div>
            <div>
                <strong>Counter: {countTwo.firstCounter}</strong>
                <button onClick={() => dispatchTwo({ type: 'increment', value: 1 })}>Increment 2</button>
                <button onClick={() => dispatchTwo({ type: 'decrement', value: 1 })}>Decrement 2</button>
                <button onClick={() => dispatchTwo({ type: 'reset' })}>Reset 2</button>
            </div>
        </div>
    )
}

export default CounterThree