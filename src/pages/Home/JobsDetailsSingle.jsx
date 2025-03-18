import { Link, useLoaderData } from "react-router-dom";
import themnail from '../../assets/thumb.png'
const JobsDetailsSingle = () => {
    const {_id, title, jobType, company, category, salaryRange, applicationDeadline, location, requirements, responsibilities, hr_email, hr_name } = useLoaderData()

     return (
        <div className="">
            <div className="space-y-5">
                <img className="w-full rounded-2xl" src={themnail} alt="" />
                <h3 className="text-3xl font-bold pt-5">{title}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                    <span className="mr-2">📌 {jobType}</span> • <span className="ml-2">🕒 Posted 2 years ago</span>
                </p>
            </div>
            <div className="divider my-10"></div>
            <section className="md:flex gap-16 justify-between pt-10">
                <div className="flex-9/12">
                    {/* Employment Info */}
                    <div className="border-2 border-gray-300 p-10 rounded-lg">
                        <h3 className="text-3xl font-bold">Employment Info</h3>
                        <div className="divider"></div>
                        <div className="overflow-x-auto">
                            <table className="table border-collapse border-none table-lg">
                                <tbody className="**:border-none **:py-3 **:px-0">
                                    <tr>
                                        <th>Industry</th>
                                        <td>{company}</td>
                                        <th>Job level</th>
                                        <td>{category}</td>
                                    </tr>
                                    <tr>
                                        <th>Salary</th>
                                        <td>$ {`${salaryRange.min} - ${salaryRange.max}`} /Hour</td>
                                        <th>Experience</th>
                                        <td>2-4 Years</td>
                                    </tr>
                                    <tr>
                                        <th>Job type</th>
                                        <td>{jobType}</td>
                                        <th>Deadline</th>
                                        <td>{applicationDeadline}</td>
                                    </tr>
                                    <tr>
                                        <th>Updated</th>
                                        <td>17/02/2025</td>
                                        <th>Location</th>
                                        <td>{location}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* Job Description */}
                    <div className="py-10 space-y-10">
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">Welcome to Job Portal</h3>
                            <p className="text-lg">The AliStudio Design team has a vision to establish a trusted platform that enables productive and healthy enterprises in a world of digital and remote everything, constantly changing work patterns and norms, and the need for organizational resiliency. The ideal candidate will have strong creative skills and a portfolio of work which demonstrates their passion for illustrative design and typography. This candidate will have experiences in working with numerous different design platforms such as digital and print forms.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">Requirements, and Responsibilities</h3>
                            <p className="text-lg"><span className="font-medium text-xl">Requirements</span> - {requirements.map((req, index) => <span className="px-1" key={index}>{req}, </span>)
                            }</p>
                            <p className="text-lg"><span className="font-medium text-xl">Responsibilities</span> - {responsibilities.map((res, index) => <span className="px-1" key={index}>{res}, </span>)
                            }</p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-2xl font-bold">Contact for</h3>
                            <p>HR Name : {hr_name}</p>
                            <p>Email : {hr_email}</p>
                        </div>
                    </div>
                    <Link to={`/jobApply/${_id}`}>
                        <button className="btn btn-lg btn-primary hover:btn-soft">Apply Now</button>
                    </Link>
                </div>
                <aside className="flex-3/12 bg-amber-300">
                    Sidebar
                </aside>
            </section>
        </div>
    );
};

export default JobsDetailsSingle;