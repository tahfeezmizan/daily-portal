import React from 'react';
import Header from '../Shred/Header/Header';
import Navbar from '../Shred/Navbar/Navbar';
import LeftSideNav from '../Shred/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shred/RightSideNav/RightSideNav';
import BreackingNews from './BreackingNews';
import { useLoaderData } from 'react-router-dom';
import NewsCart from './NewsCart';

const Home = () => {
    const news = useLoaderData();
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BreackingNews></BreackingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 pt-10">
                <div className="col-span-1">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="col-span-2">
                    {
                        news.map(aNews => <NewsCart
                            key={aNews._id}
                            news={aNews}
                        ></NewsCart>)
                    }
                </div>

                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;