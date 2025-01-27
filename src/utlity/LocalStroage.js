const getStroagedJob = () => {
    const stroagedJob = localStorage.getItem('job-applications');
    if (stroagedJob) {
        return JSON.parse(stroagedJob); 
    }
    return [];
}

const saveJob = id => {
    const stroagedJobs = getStroagedJob();
    const exists = stroagedJobs.find(jobId => jobId === id);
    if (!exists) {
        stroagedJobs.push(id);
        localStorage.setItem('job-applications', JSON.stringify(stroagedJobs));
    }
}

export { getStroagedJob, saveJob };