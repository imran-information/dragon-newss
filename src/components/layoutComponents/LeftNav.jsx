import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNav = () => {
    const [category, setCategory] = useState([])


    useEffect(() => {
        fetch("https://openapi.programming-hero.com/api/news/categories")
            .then(res => res.json())
            .then(data => setCategory(data.data.news_category))
    }, [])
    return (
        <div className=''>
            <h2 className='text-xl font-semibold mb-5'>All Category</h2>
            <div className='bg-[#F3F3F3] p-3 rounded'>

                {
                    category.map(sinCategory => <div className='mb-3' key={sinCategory.category_id}>
                        <NavLink to={`category/${sinCategory.category_id}`} className='btn w-full'>{sinCategory.category_name}</NavLink>
                    </div>)


                }
            </div>
        </div>
    );
};

export default LeftNav;