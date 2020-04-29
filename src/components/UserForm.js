import React, { useState } from 'react';
import useInput from '../hooks/CustomHook/useInput';

const UserForm = () => {

    //const [firstName, setFirstName] = useState('');
    //const [lastName, setLastName] = useState('');

    const [firstName, bindFirstName, resetFirstName] = useInput('');
    const [lastName, bindLastName, resetLastName] = useInput('');

    const submitHandler = e => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }
    debugger;
    return (
        <div>
            <h4>User Form using Custom Hook</h4>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" {...bindFirstName}></input>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" {...bindLastName}></input>
                </div>
                <div>
                    <button>Submit</button>
                </div>
            </form>
        </div>
    )

}

export default UserForm