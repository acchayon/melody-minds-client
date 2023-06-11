import React, { useEffect, useState } from 'react';
import SingleClass from './SingleClass';

const ShowClasses = () => {
    const [showClasses, setShowClasses] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setShowClasses(data)
        })
    },[])
    return (
        <div className='mx-auto w-4/5 mb-10'>
            <h2 className='text-center text-3xl mb-10 font-bold'>All Class here</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2'>
                {
                    showClasses.map(showClass => <SingleClass showClass={showClass} key={showClass._id}></SingleClass>)
                }
            </div>
        </div>
    );
};

export default ShowClasses;