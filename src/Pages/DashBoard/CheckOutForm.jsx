import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/UseAxiosSecure';
import { AuthContext } from '../../Provider/AuthProvider';

const CheckOutForm = ({ price, cart }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const { user } = useContext(AuthContext);
    const [clientSecret, setClientSecret] = useState('')
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [price, axiosSecure])

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        if (error) {
            console.log('error', error);
            setCardError(error.message)
        }
        else {
            console.log('payment: ', paymentMethod);
            setCardError('')

        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'anonymous',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );
        if (confirmError) {
            console.log(confirmError);
        }
        console.log('payment intent', paymentIntent);

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
            const transactionId = paymentIntent.id;

            // here save payment info

            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                date: new Date(),
                status: 'service pending',
                cartItems: cart.map(item => item._id),
                classItems: cart.map(item => item.classId),
                itemName: cart.map(item => item.name)
            }
            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data);
                    if (res.data.result.insertedId) {

                    }
                })
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
                <button className='btn btn-active w-1/6 ml-40 mb-5 btn-neutral btn-sm' type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className='text-white text-center'>{cardError}</p>}
            {transactionId && <p className='text-white'>Transaction complete with TransactionId {transactionId}</p>}
        </div>
    );
};

export default CheckOutForm;