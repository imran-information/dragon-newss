import React from 'react';
import facebookIcon from '../assets/fb.png'
import twitterIcon from '../assets/twitter.png'
import insIcon from '../assets/instagram.png'
const FindUs = () => {
    return (
        <div>
            <h3 className='text-xl font-semibold my-5'>Find Us On</h3>
            <div className="join flex  join-vertical">
                <button className="btn join-item"> <img className='w-3' src={facebookIcon} alt="" /> Facebook</button>
                <button className="btn join-item"><img className='w-4' src={twitterIcon} alt="" />Twitter</button>
                <button className="btn join-item"><img className='w-3' src={insIcon} alt="" />Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;