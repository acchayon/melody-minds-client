import React from 'react';
import { FaCalendarTimes, FaHome, FaRestroom, FaShoppingCart, FaWallet } from 'react-icons/fa';
import { Link, Outlet } from 'react-router-dom';

const DashBoard = () => {
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
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    {/* Sidebar content here */}
                    <li><Link><FaHome></FaHome> Student Home</Link></li>
                    <li><Link><FaCalendarTimes></FaCalendarTimes> Reservation</Link></li>
                    <li><Link><FaWallet></FaWallet> Payment History</Link></li>
                    <li><Link to=''><FaShoppingCart></FaShoppingCart> Student Cart</Link></li>

                    <div className="divider"></div>

                    <li><Link to='/'><FaHome></FaHome> Home</Link></li>
                    <li><Link to='/classes'><FaRestroom></FaRestroom> Classes</Link></li>

                </ul>

            </div>
        </div>
    );
};

export default DashBoard;