import React from 'react';

const Person = ({person}) => {
    function clickHandler(eve){
        alert('Button clicked: ' + eve);
        console.log('Button clicked' + eve);
    }

    return (
        <div>
            <h5>I am {person.name}, may age is {person.age}</h5>
        </div>
    )
}

export default Person