import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {

    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    } ,[])


    return (
        <div className="text-center">
            <h2 className="text-4xl font-semibold">Featured Jobs</h2>
            <p className="">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid grid-cols-2 gap-5 rounded-xl p-10">
                {
                    jobs.map(job => <FeaturedCard key={job.id} job={job} />)
                }
            </div>
        </div>
    );
};

export default Featured;