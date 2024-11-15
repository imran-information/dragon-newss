import React from 'react';
import header from '../assets/logo.png'
import moment from 'moment';
const Header = () => {
    return (
        <div className='text-center my-5'>
            <img className='w-[500px] mx-auto' src={header} alt="" />
            <h4 className='text-xl font-semibold my-3 text-[#706F6F]'>Journalism Without Fear or Favour</h4>
            <h3>
                {moment().format('dddd, MMMM MM, y')}
            </h3>
        </div>
    );
};

export default Header;