import React from 'react';
import CoustomLink from '../CoustomLink/CoustomLink';

const Header = () => {
    return (
        <div className='flex justify-center container mx-auto  text-white py-2'>
            <CoustomLink className='mr-4 text-2xl font-bold px-2 my-1 rounded ' to='/'>Home</CoustomLink>
            <CoustomLink className='mr-4 text-2xl font-bold px-2 my-1 rounded ' to='/meals'>Meals</CoustomLink>
        </div>
    );
};

export default Header;