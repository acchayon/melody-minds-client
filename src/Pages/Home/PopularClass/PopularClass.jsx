import React, { useEffect, useState } from 'react';
import Classes from './Classes';
import { Link } from 'react-router-dom';

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    const limitClass = classes.slice(0,6)
    useEffect(() => {
        fetch('https://melody-minds-server-acchayon.vercel.app/classes')
        .then(res => res.json())
        .then(data => {
            setClasses(data)
        })
    },[])
    return (
        <div className='mx-auto w-4/5 mb-10'>
            <h2 className='text-3xl mb-5 mt-5 font-bold text-center'>--- Our Popular Classes ---</h2>
            <hr />
            <h3 className='text-center mb-10'>Go To <Link to='/classes'><span className='font-bold text-xl'>Classes</span></Link> For Enroll This.</h3>
            <hr />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                {
                    limitClass.map(oneClass => <Classes key={oneClass.id} oneClass={oneClass}></Classes>)
                }
            </div>
        </div>
    );
};

export default PopularClass;