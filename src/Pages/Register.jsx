import { useForm } from "react-hook-form";
import logo from "../assets/icons8-inspiration-64.png"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import { toast } from "react-toastify";
import useAxiosPublic from "../Shared/useAxiosPublic";


const Register = () => {
    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        if (data.password.length < 6) {
            return toast.error("password must be 6 character")
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).+$/;
        if (!passwordRegex.test(data.password)) {
            return toast.error("password must be one uppercase one lowercase")
        }
        createUser(data.email, data.password)
            .then(result => {
                console.log(result);
                const newUser = result.user
                toast.success("Registation successful");
                updateUserProfile(data.name, data.photo)
                    .then(() => {
                        setUser({ ...newUser, displayName: data.name, photoURL: data.photo })
                        navigate("/")

                        const userInfo = {
                            email: result.user?.email,
                            name: result.user?.displayName
                        }
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                console.log("added user data in mongodb", res.data);
                            })
                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.log(error);
                toast.error("auth/email-already-in-use")
            })
    }
    return (
        <div className='py-12 lg:w-4/12 mx-auto md:w-6/12 w-9/12'>
            <div className='py-4'>
                <img className='w-12 h-12 my-4' src={logo} alt="" />
                <h3 className='text-2xl font-semibold py-2'> Join the Community</h3>
                <p className='text-gray-600 pb-6'> Please enter your email and password to continue.</p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full ">
                    <span className="label-text  py-2">Name</span>
                    <input {...register("name", { required: true })} type="text" placeholder="Enter your name" required className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full my-4">
                    <span className="label-text py-2">Photo URL</span>
                    <input {...register("photo", { required: true })} type="url" placeholder="Enter your photo URL" required className="input input-bordered w-full" />
                </label>
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
                    <button className='btn btn-primary w-full text-xl'>Register</button>
                </div>
            </form>
            <p className='text-lg text-center'>Already have an account? <Link to="/joinus" className='border-b border-indigo-500 text-indigo-500'>Login here</Link></p>

        </div>
    );
};

export default Register;