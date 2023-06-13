import React from 'react';
import { FaCalendarTimes, FaHome, FaRestroom, FaShoppingCart, FaUser, FaWallet } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import UseCart from '../hooks/UseCart';

const DashBoard = () => {
    const [cart] = UseCart();
    const isAdmin = true;

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-neutral-300 text-base-content">
                    {
                        isAdmin ? <>

                            <li><NavLink to='/dashboard/adminhome'><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaCalendarTimes></FaCalendarTimes> Add Class</NavLink></li>
                            <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li><NavLink to='/dashboard/allusers'><FaUser></FaUser> All Users</NavLink></li>
                        </> : <>

                            <li><NavLink to='/dashboard/home'><FaHome></FaHome> Student Home</NavLink></li>
                            <li><NavLink to='/dashboard/reservation'><FaCalendarTimes></FaCalendarTimes> Reservation</NavLink></li>
                            <li><NavLink to='/dashboard/payment'><FaWallet></FaWallet> Payment History</NavLink></li>
                            <li>
                                <NavLink to='/dashboard/mycart'>
                                    <FaShoppingCart></FaShoppingCart>
                                    My Cart
                                    <span className="badge badge-secondary">+{cart?.length || 0}</span>
                                </NavLink></li>

                        </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to='/'><FaHome></FaHome> Home</NavLink></li>
                    <li><NavLink to='/classes'><FaRestroom></FaRestroom> Classes</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;