import { NavLink } from "react-router";
import logo from "../../assets/logo/CareerHub.png"


const Navber = () => {

    const links = <>
        <li><NavLink to='/'>Statistics</NavLink></li>
        <li><NavLink to='/appliedjobs'>Applied Jobs</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm md:px-20 px-2">
        <div className="navbar-start">
        <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
            </div>
            <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                {
                    links
                }
            </ul>
        </div>
        <img src={logo} alt="" className="lg:ml-5 ml-1 lg:w-52 w-32" />
        {/* <a className="btn btn-ghost lg:text-2xl text-xl font-semibold">CareerHub</a> */}
        </div>
        <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
            {
                links
            }
        </ul>
        </div>
        <div className="navbar-end">
        <a className="btn lg:px-4 lg:py-5 px-2 py-3 rounded-lg text-white text-sm lg:text-base bg-[#9873FF]">Star Applying</a>
        </div>
        </div>
    );
};

export default Navber;
