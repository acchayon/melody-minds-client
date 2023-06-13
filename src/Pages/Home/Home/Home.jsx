import React, { useState } from 'react';
import Starter from '../Slider/Starter';
import Slider from '../Slider/Slider';
import Extra from '../Extra/Extra';
import PopularClass from '../PopularClass/PopularClass';
import { FaLightbulb } from 'react-icons/fa';

const Home = () => {
    const [isLightMode, setIsLightMode] = useState(false);

    const toggleMode = () => {
        setIsLightMode(!isLightMode);
    };

    const modeClass = isLightMode ?  'bg-neutral-600 text-black' : 'bg-white text-black';

    return (
        <div >

            <div className={modeClass}>
                <div className="grid pt-40 grid-cols-1 md:grid-cols-2 items-center">
                    <Starter></Starter>
                    <Slider></Slider>

                </div>
                <div className='pt-10 text-center'>
                    <button className='btn ' onClick={toggleMode}> <FaLightbulb size={20}></FaLightbulb> </button>
                </div>
                <PopularClass></PopularClass>
                <Extra></Extra>
            </div>
        </div>
    );
};

export default Home;











// import React from 'react';
// import Starter from '../Slider/Starter';
// import Slider from '../Slider/Slider';
// import Extra from '../Extra/Extra';
// import PopularClass from '../PopularClass/PopularClass';

// const Home = () => {
//     return (
//         <div>
//             <div className='grid pt-40 grid-cols-1 md:grid-cols-2 items-center'>
//                 <Starter></Starter>
//                 <Slider></Slider>
//             </div>
//             <PopularClass></PopularClass>
//             <Extra></Extra>
//         </div>
//     );
// };

// export default Home;
