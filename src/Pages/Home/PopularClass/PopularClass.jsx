import React, { useEffect, useState } from 'react';
import Classes from './Classes';

const PopularClass = () => {
    const [classes, setClasses] = useState([])
    const limitClass = classes.slice(0,6)
    useEffect(() => {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            setClasses(data)
        })
    },[])
    return (
        <div className='mx-auto w-4/5 mb-10'>
            <h2 className='text-3xl mb-5 mt-5 font-bold text-center'>--- Our Popular Classes ---</h2>
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