import React from 'react';
import Navbar from '../Shred/Navbar/Navbar';
import { NavLink } from 'react-router-dom';

const Register = () => {

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const name = form.get('name');
        const photourl = form.get('photourl');
        const email = form.get('email');
        const password = form.get('password');

        console.log(name, photourl, email, password);
    }


    return (
        <div>
            <Navbar></Navbar>

            <div className="card shrink-0 w-full md:max-w-xl lg:max-w-2xl mx-auto p-5 md:p-10 lg:p-20 shadow-2xl bg-base-100 rounded-none">
                <h1 className="text-4xl text-center mb-12">Register your account</h1>

                <form onSubmit={handleRegister} className="">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Enter You Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name='photourl' placeholder="Enter Photo Url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter Your Password" className="input input-bordered" required />
                        <label className="label">
                        </label>
                        <div className="flex items-center gap-2">
                            <input type="checkbox" name="trems" id="trems" />
                            <a href="#" className="label-text-alt link link-hover">Accept Term & Conditions</a>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>

                    <p className="py-8 text-center">Already Have An Account ? <NavLink to="/login" className="text-green-500">Login</NavLink></p>
                </form>
            </div>
        </div>
    );
};

export default Register;