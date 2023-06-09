import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'
import { AuthContext } from '../../Provider/AuthProvider';
import { useForm } from 'react-hook-form';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const {signIN} = useContext(AuthContext);

    const onSubmit = data => {
        console.log(data)

        signIN(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    };

    // const handleLogin = (event) => {
    //     event.preventDefault();

    //     const form = event.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email, password);


    //     // sign in
    //     signIN(email, password)
    //     .then(result => {
    //         const loggedUser = result.user;
    //         console.log(loggedUser);
    //     })
    // }

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
                        <button><FcGoogle size={40}></FcGoogle></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;