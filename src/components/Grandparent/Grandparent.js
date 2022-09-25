import React from 'react';
import {useState} from 'react';
import Parent from '../Parent/Parent';
import './Grandparent.css';

const Grandparent = () => {
    const [count, setCount] = useState(0);

    const countFunc = () => {
        return setCount(count + 1);
    };

    const resetFunc = () => {
        return setCount(0);
    };

    return (
        <div className='Grandparent'>
            <h2>Grandparent {count}</h2>
            <button onClick={countFunc}>Click Me</button><br /><br />
            <button onClick={resetFunc}>Reset Me</button>
            <Parent countFunc={countFunc} resetFunc={resetFunc}></Parent>
        </div>
    );
};

export default Grandparent;