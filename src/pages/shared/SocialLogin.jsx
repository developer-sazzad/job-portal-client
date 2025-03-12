import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div className="py-7">
            <button className="btn btn-soft btn-xl w-full">
            <FcGoogle /> Sign up with Google</button>
            <div className="divider py-5 font-bold">OR</div>
        </div>
    );
};

export default SocialLogin;