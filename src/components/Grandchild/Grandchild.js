import React from 'react';
import './Grandchild.css';

const Grandchild = (props) => {
    return (
        <div className='Grandchild'>
            <h2>Grandchild</h2>
            <button onClick={props.countFunc}>Click Me</button>
        </div>
    );
};

export default Grandchild;