import React from 'react';
import './MyTitle.css';

const MyTitle = ({ children, ...props }) => {
    return (
        <div {...props} className='my-title'>
            {children}
        </div>
    );
};

export default MyTitle;