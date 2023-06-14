import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Classes = ({ oneClass }) => {
    const {image, name, instructor, available_seats, price} = oneClass;

    return (
        <div className="card w-full bg-base-100 hover:bg-base-200 space-y-3 border border-black shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {name}</h2>
                <p>Instructor Name: {instructor}</p>
                <p>Price: ${price}</p>
                <p>Available Seats: {available_seats}</p>
                {/* <div className="card-actions">
                    <button className="btn btn-neutral btn-outline border-1 btn-sm">Select <FaArrowRight></FaArrowRight> </button>
                </div> */}
            </div>
        </div>
    );
};

export default Classes;