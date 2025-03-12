import { useContext, useState } from 'react';
import registerLeftImg from '../../assets/chat-left.png'
import SocialLogin from '../shared/SocialLogin';
import AuthContext from '../../providers/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const Register = () => {
    const [error, setError] = useState("");
    const { setUser, createNewUser } = useContext(AuthContext)


    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password)
        // const newUser = { name, email, password }

        // Password Validation
        if (password.length < 8) {
            setError("Password must be at least 8 characters long.");
            return;
        } else if (!/(?=.*\d)/.test(password)) {
            setError("Password must contain at least one number.");
            return;
        } else if (!/(?=.*[a-z])/.test(password)) {
            setError("Password must contain at least one lowercase letter.");
            return;
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setError("Password must contain at least one uppercase letter.");
            return;
        } else {
            setError(""); // No error

        }

        createNewUser(email, password)
            .then(result => {
                setUser(result.user)
                Swal.fire({
                    title: "success!",
                    text: "User Registration successfull!",
                    icon: "success"
                });
            })
            .catch(error => {
                console.log(error)
            })

        form.reset();
    }
    return (
        <div className="my-32 lg:flex items-center flex-row-reverse gap-10 space-y-20 justify-between">
            <div className='flex-2/5 p-16 rounded-2xl shadow-2xl'>
                <h2 className='text-3xl font-bold'>Please create an a Acoount</h2>
                <SocialLogin></SocialLogin>
                <form onSubmit={handleRegister} className="space-y-10">
                    <label className="floating-label">
                        <span>Your Name</span>
                        <input type="text" name='name' placeholder="Your Name" className="validator input w-full input-xl focus:outline-none" required />
                    </label>
                    <label className="floating-label">
                        <span>Your Email</span>
                        <input type="email" name='email' placeholder="Your Email" className="validator input w-full input-xl focus:outline-none" required />
                    </label>
                    <label className="floating-label">
                        <span>Your Password</span>
                        <input
                            type="password"
                            name="password"
                            className="input w-full input-xl validator focus:outline-none rounded-md"
                            required
                            placeholder="Your Password"
                            onKeyDown={(e) => e.key === " " && e.preventDefault()} // Prevent space
                        />
                        {error && <p className="text-red-500 text-lg mt-3">{error}</p>}
                    </label>
                    <input className='btn btn-soft hover:btn-primary w-full btn-xl' type="submit" value="Create a Account" />
                    <p className='text-xl'>Already have an account? Please
                        <Link to='/auth/login' className='px-2 font-bold hover:underline hover:text-primary'>Login</Link>
                    </p>
                </form>
            </div>
            <div className='flex-3/5 space-y-5'>
                <h3 className='text-xl text-center font-medium'>Complete set of digital forms</h3>
                <img src={registerLeftImg} alt="" />
            </div>
        </div>
    );
};

export default Register;