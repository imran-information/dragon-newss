import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
    return (
        <div className='flex justify-center items-center bg-[#F3F3F3] p-3'>
            <p className='bg-[#D72050] text-white px-5 font-semibold py-3'>Latest</p>
            <Marquee speed={100} pauseOnHover={true} >
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi aspernatur magni non aliquid totam nisi laboriosam illo eveniet dolorem?</Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi aspernatur magni non aliquid totam nisi laboriosam illo eveniet dolorem?</Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi aspernatur magni non aliquid totam nisi laboriosam illo eveniet dolorem?</Link>
                <Link>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi excepturi aspernatur magni non aliquid totam nisi laboriosam illo eveniet dolorem?</Link>
            </Marquee>
        </div >
    );
};

export default LatestNews;