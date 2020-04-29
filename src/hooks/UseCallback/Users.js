import React, {useEffect} from 'react';

const Users = (props) => {    
    console.log('Rendering Users');

    function getUsers(){
        console.log('Users list');
        return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    useEffect(()=>{        
        getUsers();
    },[]);

    return (
    <div>
        <h2>Users component</h2>        
    </div>
    )

}

export default Users