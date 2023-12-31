import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import CheckOutForm from '../CheckOutForm';
import { FaCcStripe } from 'react-icons/fa';
import UseCart from '../../../hooks/UseCart';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK)

const Payment = () => {
    const [cart] = UseCart();
    const total = cart.reduce((sum, item) => sum + item.price ,0);
    const price = parseFloat(total.toFixed(2))
    return (
        <div className='w-full'>
            <h2 className='text-center font-bold text-3xl mb-10'>Payment here</h2>
            <div className='w-3/6 mx-auto'>
                <h3 className='text-center mx-auto'><FaCcStripe size={50}></FaCcStripe></h3>
            </div>
            <Elements stripe={stripePromise}>
                <CheckOutForm price={price} cart={cart}></CheckOutForm>
            </Elements>
        </div>
    );
};

export default Payment;