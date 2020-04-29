import React, { useContext } from 'react';
import { CountContext } from '../../../App';

const ComponentA = () => {
    const countContext = useContext(CountContext)
    debugger;
    return (
        <div>
            <h3>Component A - {countContext.countState}</h3>
            <button onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('reset')}>Reset</button>
        </div>
    )

}

export default ComponentA