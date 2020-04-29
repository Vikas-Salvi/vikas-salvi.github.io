import React, { useState, useReducer } from 'react';
import ContextComponentB from './ContextComponentB';

export const NameContext = React.createContext(0);

const ContextComponentA = () => {

    const initialState = {
        firstname: 'Vikas',
        lastname: 'Salvi'
    };

    const reducer = (state, action) => {
        switch (action) {
            case 'setcount':
                return state
            default:
                return state
        }
    }

    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <NameContext.Provider value={{nameState: state, nameDispatch: dispatch}}>
            <div>
                <h3>Component A</h3>
                <p>{state.firstname}</p>
                <ContextComponentB></ContextComponentB>
            </div>
        </NameContext.Provider>
    )
}

export default ContextComponentA