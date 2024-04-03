import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h1 className="text-3xl">All Categories</h1>
            {
                categories.map(categori => <Link
                    className="flex px-14 py-4"
                    key={categori.id}>
                    {categori.name} </Link>)
            }
        </div>
    );
};

export default LeftSideNav;