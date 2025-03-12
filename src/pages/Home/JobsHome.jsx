import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";

const JobsHome = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                console.log(data)
            })
    }, [])
    return (
        <div className="container mx-auto p-5 md:p-0">
            
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {
                    jobs.map(job => <JobsCard key={job._id}
                        job={job}
                    ></JobsCard>)
                }
            </div>

        </div>
    );
};

export default JobsHome;