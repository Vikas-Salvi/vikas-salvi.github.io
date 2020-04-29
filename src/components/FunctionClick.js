import React from 'react';

const FunctionClick = () => {
    function clickHandler(eve){
        alert('Button clicked: ' + eve);
        console.log('Button clicked' + eve);
    }

    return (
        <div>
            <h4>Function Click <button onClick={clickHandler} >Event Handling</button></h4>
        </div>
    )
}

export default FunctionClick