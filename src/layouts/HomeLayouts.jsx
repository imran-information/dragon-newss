import React from 'react';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftNav from '../components/layoutComponents/LeftNav';
import RightNav from '../components/layoutComponents/RightNav';
import { Outlet } from 'react-router-dom';

const HomeLayouts = () => {
    return (
        <div className='w-10/12 mx-auto'>
            <header>
                <Header></Header>
                <LatestNews></LatestNews>
            </header>
            <nav>
                <Navbar></Navbar>
            </nav>
            <main className='grid grid-cols-12'>
                <aside className='col-span-3'>
                    <LeftNav></LeftNav>
                </aside>
                <section className='col-span-6'>
                    <Outlet></Outlet>
                </section>
                <aside className='col-span-3'>
                    <RightNav></RightNav>
                </aside>
            </main>
        </div>
    );
};

export default HomeLayouts;