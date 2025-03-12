import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
    return (
        <div>
            <button className="btn btn-soft btn-xl w-full">
            <FcGoogle />
                Sign up with Google</button>
            <div className="divider">OR</div>
        </div>
    );
};

export default SocialLogin;