import React, { useContext } from 'react';
import Navbar from '../Shred/Navbar/Navbar';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const { singIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation();
    console.log('Sing In Page Location', location)

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        singIn(email, password)
            .then(result => {
                console.log(result.user);
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {
                console.log(error.code)
            })
    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="card shrink-0 w-full md:max-w-xl lg:max-w-2xl mx-auto p-5 md:p-10 lg:p-20 shadow-2xl bg-base-100 rounded-none">
                <h1 className="text-4xl text-center mb-12">Login your account</h1>

                <form onSubmit={handleLogin} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button type='submit' className="btn w-full btn-primary">Login</button>
                    </div>

                    <p className="py-8 text-center">Dont’t Have An Account ? <NavLink to="/register" className="text-red-500">Register</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Login;