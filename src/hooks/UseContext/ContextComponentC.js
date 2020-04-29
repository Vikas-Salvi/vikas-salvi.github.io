import React, { useContext } from 'react';
import { NameContext } from './ContextComponentA';

const ContextComponentC = () => {
    const state = React.useContext(NameContext); 
    debugger;
    return (
        <div>
            <h3>Component C</h3>
            <p>{state.nameState.lastname}</p>
        </div>
    )
}

export default ContextComponentC