import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo-small.png'
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../../providers/AuthContext';
import Swal from 'sweetalert2';
// import bgbanner from '../../assets/bg-banner.svg'

// import './index'
const Header = () => {
    const { user, logout } = useContext(AuthContext);
    // const [menuOpen, setMenuOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const handleLogout = () => {
        logout()
            .then(() => {
                Swal.fire({
                    title: "Logout Successfull!",
                    icon: "success",
                    showCancelButton: false
                });
            })
    }
    const links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/my-applications'>My Application</NavLink></li>
    </>

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section
            className={`fixed top-0 w-full z-50  px-8 transition-all duration-500 ${scrolling ? "bg-blue-600 text-white shadow-md" : "text-black py-8"
                }`}>
            <div className="container w-full navbar py-3 mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        <img src={logo} alt="" />
                        <h1 className='text-3xl font-bold'>Job Portal</h1>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal text-xl font-medium px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user && user?.email ? <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-circle btn-xl avatar">
                                <div className="w-20 rounded-full">
                                    {
                                        user && user.email ? <img
                                            alt=""
                                            src={user.photoURL} /> : ''
                                    }
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-xl dropdown-content bg-blue-500 rounded-box z-1 mt-3 w-72 p-5 shadow">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><Link to='/my-applications'>My Applications</Link></li>
                                <li onClick={handleLogout}><a>Logout</a></li>
                            </ul>
                        </div> : <NavLink to='auth/login' className='btn btn-soft btn-primary btn-lg text-xl'>Sign In</NavLink>
                    }

                </div>
            </div>
        </section>



    );
};

export default Header;