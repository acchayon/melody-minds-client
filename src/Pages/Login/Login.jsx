import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signIN, googleSign} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';


    // google sign
    const handleGoogleSign = () => {
        googleSign()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
    }

    const onSubmit = data => {
        console.log(data)

        signIN(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: ' user login successfully',
                showConfirmButton: false,
                timer: 1500
              });
              navigate(from, {replace: true})
        })
    };


    return (
        <div className='w-3/5 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col bg-base-100 bg-opacity-100">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}
                        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                {errors.email && <span className='text-red-600'>Email is required</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                                {errors.password && <span className='text-red-600'>Password is required</span>}
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                            <p>New to this school? <span className='text-red-500'><Link to='/register'>Go to SignUp</Link></span></p>
                        </div>
                    </form>
                    <div className='flex items-center'>
                        <p><small>Continue with</small></p>
                        <button onClick={handleGoogleSign}><FcGoogle size={40}></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;