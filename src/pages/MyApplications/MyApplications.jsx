import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { TbFileCv } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const MyApplications = () => {
    const { user } = useAuth();
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/job-applications?email=${user.email}`)
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [user.email])
    return (
        <div className="bg-gray-100 rounded-2xl p-5 md:p-10 lg:p-16">
            <h1 className="text-2xl text-center font-bold pb-10">My Applications</h1>
            <div className="overflow-x-auto">
                <table className="table table-xs md:table-sm lg:table-xl">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job Requirements</th>
                            <th>Submit URL</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobs.map(job => <tr key={job._id} className="">
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={job.company_logo}
                                                    alt="Company" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{job.company}</div>
                                            <div className="text-sm opacity-50">{job.location}</div>

                                        </div>
                                    </div>

                                </td>
                                <td>
                                    <div>
                                        {
                                            job.requirements.map((req, idx) => <span key={idx}> {req}, </span>)
                                        }
                                    </div>
                                    <span className="badge badge-soft badge-xl mt-3">{job.jobType}</span>
                                </td>
                                <td>
                                    <div className="flex gap-3 text-2xl">
                                        {
                                            job.resume ? <a href={job?.resume} target="_blank">
                                                <TbFileCv />
                                            </a> : ''
                                        }
                                        {
                                            job.github ? <a href={job.github} target="_blank">
                                                <FaGithub />
                                            </a> : ''
                                        }
                                        {
                                            job.linkdin ? <a href={job?.linkdin} target="_blank">
                                                <FaLinkedin />
                                            </a> : ''
                                        }
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-soft">Delete</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyApplications;