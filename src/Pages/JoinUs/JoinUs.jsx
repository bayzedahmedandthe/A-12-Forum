import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import logo from "../../assets/icons8-inspiration-64.png"
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Authentication/AuthProvider';
import { toast } from 'react-toastify';
import useAxiospublic from '../../Hooks/useAxiosPublic';
const JoinUs = () => {
    const axiosPublic = useAxiospublic();
    const { loginWithGoogle, loginUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        // console.log(data);
        loginUser(data.email, data.password)
            .then(result => {
                console.log(result);
                toast.success("Login successful");


            })
            .catch(error => {
                console.log(error);
                toast.error("Invalid Credentials")
            })
    }
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user?.email,
                    name: result.user?.displayName
                }
                axiosPublic.post("/users", userInfo)
                    .then(res => {
                        console.log(res.data);
                    })
            })


    }
    return (
        <div>
            <div className='py-12 lg:w-4/12 mx-auto md:w-6/12 w-9/12'>
                <div className='py-4'>
                    <img className='w-12 h-12 my-4' src={logo} alt="" />
                    <h3 className='text-2xl font-semibold py-2'>Enter Your Credentials</h3>
                    <p className='text-gray-600 pb-6'> Please enter your email and password to continue.</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}
                >
                    <label className="form-control w-full ">
                        <span className="label-text py-2">Email</span>
                        <input {...register("email", { required: true })} type="email" placeholder="Enter your email" required className="input input-bordered w-full" />
                    </label>
                    <label className="form-control w-full my-4">
                        <span className="label-text py-2">Password</span>
                        <input {...register("password", { required: true })} type="password" placeholder="Enter your password" required className="input input-bordered w-full" />
                    </label>
                    <div className="form-control my-4">
                        <label className="label cursor-pointer">
                            <span className="label-text">Remember me</span>
                            <input type="checkbox" required defaultChecked className="checkbox checkbox-primary" />
                        </label>
                    </div>
                    <div className='my-6'>
                        <button className='btn btn-primary w-full text-xl'>Log In</button>
                    </div>
                    <div className="divider my-2">Or, Login with</div>

                </form>
                <button onClick={handleLoginWithGoogle} className='flex items-center gap-4 justify-center text-center border-2 py-3 rounded-lg mx-auto w-full my-6 text-xl'> <FcGoogle />Login with google</button>
                <p className='text-lg text-center'>Don't have an account? <Link to="/register" className='border-b border-indigo-500 text-indigo-500'>Register here</Link></p>
            </div>
        </div>
    );
};

export default JoinUs;