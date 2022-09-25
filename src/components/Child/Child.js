import React from 'react';
import Grandchild from '../Grandchild/Grandchild';
import './Child.css';

const Child = (props) => {
    return (
        <div className='Child'>
            <h2>Child</h2>
            <button onClick={props.countFunc}>Click Me</button>
            <Grandchild countFunc={props.countFunc}></Grandchild>
        </div>
    );
};

export default Child;