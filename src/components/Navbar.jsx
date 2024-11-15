import React from 'react';
import { Link } from 'react-router-dom';
import profileIcon from '../assets/user.png'
const Navbar = () => {
    return (
        <div className='flex justify-between items-center my-5'>
            <div className="font-bold text-2xl">
                <Link to='/'>News</Link>
            </div>
            <div className="">
                <ul className=''>
                    <Link to='/'>Home</Link>
                    <Link to='/about' className='px-8'>About</Link>
                    <Link to='/career'>Career</Link>
                </ul>
            </div>
            <div className="flex items-center gap-2">
                <img src={profileIcon} alt="" />
                <button className="btn text-base bg-black text-white font-semibold">Login</button>
            </div>
        </div>
    );
};

export default Navbar;