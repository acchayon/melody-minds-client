import React from 'react';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc'

const Login = () => {
    return (
        <div className='w-3/5 mx-auto'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col bg-base-100 bg-opacity-100">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <form
                        className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />
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