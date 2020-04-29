import React from 'react';
import Person from './Person';

const NameList = () => {
    const names = ['Vikas', 'Priyanka', 'Poonam', 'Sangeeta'];
    const persons = [
        {
            id: 1,
            name: 'Vikas',
            age: 35
        },
        {
            id: 1,
            name: 'Priyanka',
            age: 34
        },
        {
            id: 1,
            name: 'Sangeeta',
            age: 34
        },
        {
            id: 1,
            name: 'Poonam',
            age: 32
        }
    ]
    //const personList = persons.map(person => (
    //    <h5>I am {person.name}, may age is {person.age}</h5>
    //));
    const personList = persons.map(person => <Person person={person}></Person>)
    const nameList = names.map((name, index) => <h5 key={index}>{index} - {name}</h5>);

    return (
        //<div>
        //    <h4>List Rendering</h4>
        //    {personList}
        //</div>
        <div>
            <h4>List Rendering</h4>
            {nameList}
        </div>
    )
}

export default NameList