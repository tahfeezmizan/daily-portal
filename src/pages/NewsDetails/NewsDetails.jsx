import { useParams } from "react-router-dom";
import Header from "../Shred/Header/Header";
import RightSideNav from "../Shred/RightSideNav/RightSideNav";
import Navbar from "../Shred/Navbar/Navbar";

const NewsDetails = ( ) => {

    const { id } = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2>Dragon News</h2>

            <div className="grid grid-cols-4 gap-5">
                <div className="col-span-3">
                    <h1>News Details</h1>
                    <h2 className="text-4xl">{id}</h2>
                </div>
                <div className="col-span-1">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;