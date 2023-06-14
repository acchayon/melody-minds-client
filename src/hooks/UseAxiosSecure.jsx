import React, { useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';


const axiosSecure = axios.create({
    baseURL: 'https://melody-minds-server-acchayon.vercel.app',
});

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-web-token');
            if (token) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }
            return config;
        });

        axiosSecure.interceptors.response.use(
            (response) => response,
            async (error) => {
                if (error.response && [401, 403].includes(error.response.status)) {
                    await logOut().then(() => {
                        navigate('/login'); 
                    });
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosSecure.interceptors.request.eject();
            axiosSecure.interceptors.response.eject();
        };
    }, [ logOut, navigate]);

    return [axiosSecure]; // Return the modified Axios instance
};

export default useAxiosSecure;
