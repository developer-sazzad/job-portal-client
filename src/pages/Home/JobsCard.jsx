
const JobsCard = ({ job }) => {
    const { title, category, jobType, company_logo, description, location, salaryRange, requirements } = job;
    return (
        <div className="card bg-base-100 shadow-2xs border border-gray-200">
            <div className="card-body">
                <div className="flex items-center space-x-4">
                    <img
                        src={company_logo}
                        alt="Company Logo"
                        className="w-12 h-12 rounded-full"
                    />
                    <div>
                        <h2 className="text-xl font-semibold">{category}</h2>
                        <p className="text-md text-gray-500">{location}</p>
                    </div>
                </div>
                <h3 className="text-2xl pt-2 font-bold">{title}</h3>
                <p className="text-sm text-gray-500 flex items-center">
                    <span className="mr-2">📌 {jobType}</span> • <span className="ml-2">🕒 Posted 2 years ago</span>
                </p>
                <p className="text-gray-600">
                    {description}
                </p>
                <div className="flex flex-wrap space-x-3 space-y-3 mt-2">
                    {
                        requirements.map((requirement, index) => <span key={index}
                            className="badge badge-outline cursor-pointer p-4 hover:bg-primary hover:text-white">{requirement}</span>)
                    }
                </div>
                <div className="card-actions justify-between items-center mt-4">
                    <p className="text-xl font-bold text-blue-600">
                        {salaryRange.min}K - {salaryRange.max}K {salaryRange.currency}
                    </p>
                    <button className="btn btn-soft btn-primary">Apply Now</button>
                </div>
            </div>
        </div>
    );
};

export default JobsCard;