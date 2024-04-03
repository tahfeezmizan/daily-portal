
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreackingNews = () => {
    return (
        <div className="flex gap-5 bg-gray-100 py-6 pl-6 pr-10">
            <button className="btn btn-secondary">Latest</button>
            <Marquee direction="righ" className="font-semibold">
                <Link className="text-lg mr-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam commodi quis cupiditate</Link>
                <Link className="text-lg mr-5">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>
                <Link className="text-lg mr-5">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</Link>

            </Marquee>

        </div>
    );
};

export default BreackingNews;