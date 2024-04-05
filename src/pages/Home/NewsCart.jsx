import React from 'react';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { author, title,image_url, thumbnail_url, details, rating, total_view, _id } = news;
    return (
        <div className='border mb-8'>
            <div className="">
                {

                }
            </div>
            <div className="p-5">
                <h1 className="mb-5">{title}</h1>
                <img src={image_url} className='mb-8' alt="" />
                {
                    details.length > 200 ?
                        <p>{details.slice(0, 200)} <Link
                            to={`/news/${_id}`}
                            className='text-red-400'
                        >Read More</Link></p>
                        : <p>{details}</p>
                }

                <div className="">
                    <p>{ }</p>
                    <p>{total_view}</p>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;