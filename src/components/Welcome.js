import React from 'react';

const Welcome = ({match}) => {   
      
    return(
        <h4>Hello! {match.url}, you are inside Class Component</h4>
    )
}

export default Welcome