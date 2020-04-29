import {useState} from 'react';

const useCounter = (initialCount = 0) => {

    const [count, setCount] = useState(initialCount);

    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }

    const decrementCount = () => {
        setCount(prevCount => prevCount - 1);
    }

    const resetCount = () => {
        setCount(initialCount);
    }

    return [count, incrementCount, decrementCount, resetCount]
    
}

export default useCounter