import React from 'react';

const ChildComponent = (props) => {
    return (
        <div>
            <h4>Child Component</h4>
            <button onClick={() => props.greetHandler('Child')} >Greed Parent</button>
        </div>
    )
}

export default ChildComponent