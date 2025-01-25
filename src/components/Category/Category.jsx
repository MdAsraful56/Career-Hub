import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const Category = () => {

    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setLists(data));
    } ,[])

    return (
        <div className="text-center lg:mt-20 mt-10">
            <h2 className="lg:text-4xl text-2xl font-semibold">Job Category List</h2>
            <p className="lg:text-base text-sm px-10">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid lg:grid-cols-4 grid-cols-2 gap-5 rounded-xl lg:px-40 pt-5 px-5">
                {
                    lists.map(list => <CategoryCard key={list.id} list={list} />)
                }
            </div>
            
        </div>
    );
};

export default Category;