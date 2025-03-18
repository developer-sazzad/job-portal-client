import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";


const JobApply = () => {
    const id = useParams();
    const {user} = useAuth();
    // console.log(id, user)
    const navigate = useNavigate();
    const applicationSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const linkdin = form.linkdin.value;
        const github = form.github.value;
        const resume = form.resume.value;
        // console.log(linkdin, github)

        const jobApplication= {
            job_id : id,
            applicant_email: user.email,
            linkdin,
            github,
            resume
        }
        fetch('http://localhost:5000/job-applications', {
            method: 'POST',
            headers: {
                'content-type':'application/json'
            },
            body: JSON.stringify(jobApplication)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire({
                    title: "Good job!",
                    text: "Your application has been success.",
                    icon: "success"
                  });
                navigate('/my-applications')
            }
        })
    }
    return (
        <div className="rounded-2xl shadow-2xl p-16">
            <h1 className="text-4xl text-center font-bold pb-10">Job Apply</h1>
            <form onSubmit={applicationSubmit} className='space-y-10'>
                <label className="floating-label">
                    <span>Linkdin URL</span>
                    <input 
                    type="url" 
                    name='linkdin' 
                    placeholder="Linkdin URL" 
                    className="validator input w-full input-xl focus:outline-none" 
                    required />
                </label>
                <label className="floating-label">
                    <span>GitHub URL</span>
                    <input
                        type="url"
                        name="github"
                        placeholder="GitHub URL"
                        className="input w-full input-xl validator focus:outline-none rounded-md"
                        required
                    />
                </label>
                <label className="floating-label">
                    <span>Resume URL</span>
                    <input
                        type="url"
                        name="resume"
                        placeholder="Resume URL"
                        className="input w-full input-xl validator focus:outline-none rounded-md"
                        required
                    />
                </label>
                <input className='btn btn-soft hover:btn-primary w-full btn-xl' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default JobApply;