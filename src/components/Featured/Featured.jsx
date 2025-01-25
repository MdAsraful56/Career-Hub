import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";


const Featured = () => {

    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    } ,[])


    return (
        <div className="text-center lg:mt-20 mt-10">
            <h2 className="lg:text-4xl text-2xl font-semibold">Featured Jobs</h2>
            <p className="lg:text-base text-sm px-10">Explore thousands of job opportunities with all the information you need. Its your future</p>

            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 rounded-xl lg:px-40 pt-5 px-5 ">
                {
                    jobs.slice(0, dataLength).map(job => <FeaturedCard key={job.id} job={job} />)
                }
            </div>
            <div className={ dataLength === jobs.length ? 'hidden' : ''}>
                <button onClick={()=> setDataLength(jobs.length)} className="btn text-white text-base bg-[#9873FF] mt-2 rounded-lg ">See All Jobs</button>
            </div>
        </div>
    );
};

export default Featured;