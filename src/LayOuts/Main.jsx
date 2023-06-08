import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navber/Navbar';

const Main = () => {
    const location = useLocation();
    console.log(location);
    const noNavbarNoFooter = location?.pathname?.includes('login') || location?.pathname?.includes('register')

    return (
        <div>
            {noNavbarNoFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noNavbarNoFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;