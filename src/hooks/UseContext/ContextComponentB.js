import React, { useContext } from 'react';
import ContextComponentC from './ContextComponentC';

const ContextComponentB = () => {
    //const nameContext = React.useContext(NameContext);
    debugger;
    return (
        <div>
            <h3>Component B</h3>
            <p></p>
            <ContextComponentC></ContextComponentC>
        </div>
    )
}

export default ContextComponentB