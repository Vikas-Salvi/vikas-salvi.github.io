import React from 'react';
import ReactDOM from 'react-dom';

const Hero = ({ heroName }) => {
    if(heroName === 'Joker'){
        throw new Error('Not a Hero!');
    }
    return (
        <div>
            <h2>{heroName}</h2>
        </div>
    )
}

export default Hero