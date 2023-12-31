import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo-light.png'
import { AuthContext } from "./authentication/AuthProvider";
import toast from "react-hot-toast";
// import useAuth from "../hooks/useAuth";


const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const navLinks = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about-us'>About Us</NavLink></li>
        <li><NavLink to='/blog'>Blog</NavLink></li>
        <li><NavLink to='/contact-us'>Contact Us</NavLink></li>

    </>
    const signOut = () => {
        logout()
            .then(
                toast.success("Successfully Logged Out")
            )
            .catch()
    }

    return (
        <div className="bg-[#64c5b1]">
            <div className="navbar max-w-7xl mx-auto py-2">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu-md bg-base-100 text-black for-mobile font-medium dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link to='/'>
                        <img className="w-48" src={logo} alt="" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1 text-lg text-white">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        user ? <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-14 rounded-full">
                                    {
                                        user && <img className="w-14 h-14 rounded-full" src={user.photoURL} alt="" />
                                    }
                                </div>
                            </label>
                            <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu text-xl menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user?.displayName}
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li className="font-semibold"><Link to='/dashboard/to-do-list'>Dashboard</Link></li>
                                <li><button onClick={signOut} className="font-semibold" >Log Out</button></li>
                            </ul>
                        </div>
                            :
                            <Link to='/login'><button className="py-2 text-lg rounded font-semibold bg-[#f96a74] hover:bg-[#ff545f] text-white border-none px-8">Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;