import { useQuery } from '@tanstack/react-query'
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './UseAxiosSecure';


const UseCart = () => {
    const {user, loading} = useContext(AuthContext);
    const token= localStorage.getItem('access-web-token');
    const [axiosSecure] = useAxiosSecure();

    const { isLoading, data: cart = [], error, refetch } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
        queryFn: async () => {
            if(!user){
                return false;
            }
            const res = await axiosSecure(`/carts?email=${user?.email}`)
            console.log('res from axios', res); 
            return res.data;
        },
        
      })
      return [cart, refetch]
}

export default  UseCart;