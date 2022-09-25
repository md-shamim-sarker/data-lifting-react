import React from 'react';
import Child from '../Child/Child';
import './Parent.css';

const Parent = (props) => {
    return (
        <div className='Parent'>
            <h2>Parent</h2>
            <button onClick={props.countFunc}>Click Me</button>
            <Child countFunc={props.countFunc}></Child>
        </div>
    );
};

export default Parent;