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
                <p>In a realm of sophistication and prestige, luxury school classes provide an opulent and refined education experience for privileged learners.</p>
            </div>
            <div>
                <FaFlagCheckered size={40}></FaFlagCheckered>
                <h3 className='text-2xl mt-4 font-bold'>New Instruments</h3>
                <p>Introducing our school's latest collection of cutting-edge instruments, designed to ignite creativity and elevate musical experiences for students.</p>
            </div>
            <div>
                <BsFilePersonFill size={40}></BsFilePersonFill>
                <h3 className='text-2xl mt-4 font-bold'>Professionals</h3>
                <p>Our school boasts a team of highly skilled and experienced professionals dedicated to nurturing students' talents and guiding them towards success.</p>
            </div>
            <div>
                <FaAward size={40}></FaAward>
                <h3 className='text-2xl mt-4 font-bold'>Award Winning</h3>
                <p>Recognized for excellence, our school has been the recipient of numerous prestigious awards, celebrating our commitment to providing an exceptional educational experience.</p>
            </div>
        </div>
    );
};

export default Extra;