import React, { useContext } from 'react';
import { FaArrowRight, FaCartPlus } from 'react-icons/fa';
import { BsPersonCircle } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import UseCart from '../../../hooks/UseCart';


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = UseCart();

    const handleLogOut = () => {
        logOut()
            .then(data => console.log(data))
            .catch(err => console.log(err))
    }

    const navMenu = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructor'>Instructor</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        <li><Link to='/'>
            <button className="btn btn-sm">
                <FaCartPlus></FaCartPlus>
                <div className="badge badge-secondary">+{cart?.length || 0}</div>
            </button>
        </Link></li>
        {user && <li><Link to='/dashboard'>DashBoard</Link></li>}
    </>

    return (
        <div>
            <div className="navbar bg-neutral-400 max-w-screen-xl fixed z-10 bg-opacity-30">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu text-xl menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navMenu}
                        </ul>
                    </div>
                    <img className='w-2/12 rounded-full' src="https://i.ibb.co/sQ40KKv/melody.png" alt="" />
                    <a className="btn btn-ghost normal-case font-extrabold md:text-3xl">Melody Minds</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-xl menu-horizontal px-1">
                        {navMenu}
                    </ul>
                </div>
                <div className="navbar-end ">
                    {user ? <>
                        <button onClick={handleLogOut} className="btn btn-sm btn-active btn-neutral">LogOut</button>
                    </> : <>
                        <Link to='/login' className="btn btn-active mr-4 btn-sm btn-neutral">Login <FaArrowRight></FaArrowRight> </Link>
                    </>}
                    <div className="avatar">
                        <div className="w-16 rounded">
                            <BsPersonCircle className='mt-3' size={40}></BsPersonCircle>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;