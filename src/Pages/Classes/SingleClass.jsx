import React, { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../hooks/UseCart';

const SingleClass = ({ showClass }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const [, refetch] = UseCart();
    const { image, name, instructor, available_seats, price, _id } = showClass;

    const handleAddCart = showClass => {
        console.log(showClass);

        if (user && user?.email) {
            const orderClass = { classId: _id, image, name, instructor, available_seats, price, email: user?.email }
            fetch('https://melody-minds-server-acchayon.vercel.app/carts', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(orderClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch()
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Class added in this cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please Login to select this class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now !'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
        console.log(user);
    }
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
                <div className="card-actions">
                    <button onClick={() => handleAddCart(showClass)} className="btn btn-neutral btn-outline border-1 btn-sm">Select <FaArrowRight></FaArrowRight> </button>
                </div>
            </div>
        </div>
    );
};

export default SingleClass;