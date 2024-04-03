import React from 'react';
import Header from '../Shred/Header/Header';
import Navbar from '../Shred/Navbar/Navbar';
import LeftSideNav from '../Shred/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shred/RightSideNav/RightSideNav';
import BreackingNews from './BreackingNews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreackingNews></BreackingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 pt-10">
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h1 className="text-5xl">Main News Section</h1>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;