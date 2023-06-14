import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if(error){
            console.log('error', error);
            setError(error.message)
        }
        else{
            setError('')
            console.log('payment: ', paymentMethod);
        }
    }
    return (
        <div className='w-3/6 mx-auto bg-neutral-500'>
            <form onSubmit={handleSubmit}>
                <CardElement className='p-8  rounded-xl'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                    color: 'white',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='btn btn-active w-1/6 ml-40 mb-5 btn-neutral btn-sm' type="submit" disabled={!stripe}>
                    Pay
                </button>
            </form>
            {error && <p className='text-white text-center'>{error}</p>}
        </div>
    );
};

export default CheckOutForm;