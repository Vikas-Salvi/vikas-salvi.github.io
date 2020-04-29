import React from 'react';

//function Greet(){
//return <h4>Hello! Vikas Salvi, you are in Greet - Functional component</h4>
//}

const Greet = props => {
    console.log(props);
    return <h4>Hello! {props.name}, you are in Greet - Functional component</h4>
}

export default Greet