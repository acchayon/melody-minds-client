import React from 'react';
import { FaAward, FaBeer, FaFlagCheckered } from 'react-icons/fa';
import {SiGoogleclassroom} from 'react-icons/si'
import {BsFilePersonFill} from 'react-icons/bs'


const Extra = () => {
    return (
        <div className='p-20  grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 bg-zinc-100'>
            <div>
                <SiGoogleclassroom size={40}></SiGoogleclassroom>
                <h3 className='text-2xl font-bold mt-4'>Luxury Class</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, porro nobis. Aliquid quasi delectus ratione!</p>
            </div>
            <div>
                <FaFlagCheckered size={40}></FaFlagCheckered>
                <h3 className='text-2xl mt-4 font-bold'>New Instruments</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, porro nobis. Aliquid quasi delectus ratione!</p>
            </div>
            <div>
                <BsFilePersonFill size={40}></BsFilePersonFill>
                <h3 className='text-2xl mt-4 font-bold'>Professionals</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, porro nobis. Aliquid quasi delectus ratione!</p>
            </div>
            <div>
                <FaAward size={40}></FaAward>
                <h3 className='text-2xl mt-4 font-bold'>Award Winning</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, porro nobis. Aliquid quasi delectus ratione!</p>
            </div>
        </div>
    );
};

export default Extra;