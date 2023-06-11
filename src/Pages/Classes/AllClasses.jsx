import React from 'react';
import Navbar from '../Shared/Navber/Navbar';
import Footer from '../Shared/Footer/Footer';
import ShowClasses from './ShowClasses';

const AllClasses = () => {
    
    return (
        <div>
            <Navbar></Navbar>
            <div className='pt-40'>
                <ShowClasses></ShowClasses>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllClasses;