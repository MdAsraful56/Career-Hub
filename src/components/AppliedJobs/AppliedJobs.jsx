import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { getStroagedJob } from "../../utlity/LocalStroage";
import AppliedJobCard from "./AppliedJobCard";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    const [Applyed, setApplyed] = useState([]);
    useEffect(() => {
        const stroedJobIds = getStroagedJob()
        if (jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => stroedJobIds.includes(job.id));
            const jobsApplied = [];
            for (const id of stroedJobIds) {
                const job = jobs.find(job => job.id == id);
                if (job) {
                    jobsApplied.push(job);
                }
            }
            setApplyed(jobsApplied);
        }
    }, [jobs]);
    
    console.log(Applyed);

    return (
        <div className="lg:px-40 px-5 mt-10 space-y-5">
            {
                Applyed.map(job => <AppliedJobCard key={job.id} job={job} /> )
            }
        </div>
    );
};

export default AppliedJobs;