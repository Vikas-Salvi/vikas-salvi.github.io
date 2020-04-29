import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import ComponentF from './ComponentF';

const ComponentE = () => {

    const user = useContext(UserContext)
    debugger;
    return (
        <div>
            <h3>Component E - User from App - {user}</h3>
            <ComponentF></ComponentF>
        </div>
    )

}

export default ComponentE