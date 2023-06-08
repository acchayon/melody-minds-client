import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='w-3/5 mx-auto mt-10'>
            <h2 className='text-3xl font-bold mx-auto'>Oops... This page not found</h2>
            <img src="https://i.ibb.co/kcDG4zr/404-error-page.webp" alt="" />
            <Link to={-1}><button className="btn btn-active btn-sm btn-neutral mt-3 text-center"><FaArrowLeft></FaArrowLeft> Go Back</button></Link>

        </div>
    );
};

export default ErrorPage;