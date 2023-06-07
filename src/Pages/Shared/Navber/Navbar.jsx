import React from 'react';
import { FaArrowRight, FaBeer } from 'react-icons/fa';


const Navbar = () => {
    const navMenu = <>
        <li><a>Home</a></li>
        <li><a>Instrauctor</a></li>
        <li><a>Classes</a></li>
        <li><a>DashBoard</a></li>

    </>

    return (
        <div>
            <div className="navbar bg-neutral-400 max-w-screen-xl fixed z-10 bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navMenu}
                        </ul>
                    </div>
                    <img className='w-2/12 rounded-full' src="https://i.ibb.co/sQ40KKv/melody.png" alt="" />
                    <a className="btn btn-ghost normal-case font-extrabold text-3xl">Melody Minds</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {navMenu}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn btn-active btn-neutral">Login <FaArrowRight></FaArrowRight> </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;