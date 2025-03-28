import { useEffect, useState } from "react";
import JobsCard from "./JobsCard";
import Loading from "../shared/Loading";

const JobsHome = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true)


    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => {
                setJobs(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="container mx-auto p-5 md:p-0">
            <div className="text-center p-5 space-y-3 mb-10">
                <h3 className="text-4xl font-bold">Jobs of the day</h3>
                <p>Search and connect with the right candidates faster</p>
            </div>
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