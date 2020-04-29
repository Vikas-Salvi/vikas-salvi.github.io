import React, { useState } from 'react';

const HookCounterThree = () => {

    const [name, setName] = useState({ firstName: '', lastName: '' });

    //console.log(name);

    return (
        <form>
            <input type="text"
                value={name.firstName}
                onChange={e => setName({ ...name, firstName: e.target.value })}
            ></input>
            <input type="text"
                value={name.lastName}
                onChange={e => setName({ ...name, lastName: e.target.value })}
            ></input>
            <h3>Your first Name: {name.firstName}</h3>
            <h3>Your first Name: {name.lastName}</h3>
            <h3>{JSON.stringify(name)}</h3>
        </form>
    )
}

export default HookCounterThree