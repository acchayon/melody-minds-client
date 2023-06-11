import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <div>
            <Carousel>
                <div>
                    <img src="https://i.ibb.co/q9Jn0Xt/m1.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/nk9k9rM/m2.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/VCQTFTL/m3.jpg" />
                </div>
                <div>
                    <img src="https://i.ibb.co/M9qqrPJ/m4.jpg" />
                </div>
            </Carousel>
        </div>
    );
};

export default Slider;