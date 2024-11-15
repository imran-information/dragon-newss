import React from 'react';

const LoginWith = () => {
    return (
        <div className='flex flex-col gap-3'>
            <h3 className='text-xl font-semibold mb-5'>Login With</h3>
            <button className='btn'>Google With Login</button>
            <button className='btn'>Github With login</button>
        </div>
    );
};

export default LoginWith;