import React from 'react';
import Starter from '../Slider/Starter';
import Slider from '../Slider/Slider';
import Extra from '../Extra/Extra';
import PopularClass from '../PopularClass/PopularClass';

const Home = () => {
    return (
        <div>
            <div className='grid pt-40 grid-cols-1 md:grid-cols-2 items-center'>
                <Starter></Starter>
                <Slider></Slider>
            </div>
            <PopularClass></PopularClass>
            <Extra></Extra>
        </div>
    );
};

export default Home;