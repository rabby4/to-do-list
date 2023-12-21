import { useContext, useState } from "react";
import { useForm } from "react-hook-form"
import { FaEye, FaEyeSlash, FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { updateProfile } from "firebase/auth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false)
    const { createUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                updateProfile(result.user, {
                    displayName: data.name,
                    photoURL: data.photo

                })
                    .then(() => {
                        console.log(user.displayName)
                        navigate(location?.state ? location.state : '/')
                    })
                // toast.success('Registration Successful!')
            })
            .catch(error => {
                console.log(error)
                // toast.error('Registration Failed!')
            })
        console.log(data)
    }

    const googleLogin = () => {

    }
    return (
        <>
            <section>
                <div className="container max-w-7xl mx-auto">
                    <div className='text-center'>
                        <h1 className="text-6xl font-bold capitalize my-10">Register Now</h1>
                    </div>
                    <div className="w-1/2 mx-auto card shadow-lg mb-14">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Your Name</span>
                                </label>
                                <input {...register("name", { required: true })} type="text" placeholder="Full Name..." className="input input-bordered" />
                                {errors.email && <span className="my-2 text-red-500">Name is required</span>}
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Email</span>
                                </label>
                                <input {...register("email", { required: true })} type="email" placeholder="Email..." className="input input-bordered" />
                                {errors.email && <span className="my-2 text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control mb-2">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Photo URL</span>
                                </label>
                                <input {...register("photo", { required: true })} type="text" placeholder="Photo url..." className="input input-bordered" />
                                {errors.email && <span className="my-2 text-red-500">Email is required</span>}
                            </div>
                            <div className="form-control mb-3">
                                <label className="label">
                                    <span className="label-text font-medium text-lg">Password</span>
                                </label>
                                <div className="relative">
                                    <input {...register("password", { required: true })} type={showPassword ? 'text' : 'password'} placeholder="Password" className="input input-bordered relative w-full" />

                                    <span className="cursor-pointer absolute right-3 bottom-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                        }
                                    </span>

                                </div>
                                {errors.email && <span className="my-2 text-red-500">Password is required</span>}
                                <label className="label my-2">
                                    <a href="#" className="label-text-alt link link-hover text-base">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control">
                                <button className="btn bg-[#f96a74] hover:bg-[#ff545f] text-white text-lg uppercase">Registration</button>
                            </div>
                        </form>
                        <div>
                            <p className=' text-center mb-5'>New in this website? Please <Link to='/login'><strong className='text-[#f96a74] hover:text-[#ff545f]'>LogIn</strong></Link></p>
                        </div>
                        <div className="px-10 mb-10 flex gap-5">
                            <button onClick={googleLogin} className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-[#f96a74] hover:border-[#f96a74] duration-300'>
                                <div>
                                    <FaGoogle></FaGoogle>
                                </div>
                                <span>Login with Google</span>
                            </button>
                            <button className='flex items-center w-full py-2 mt-3 border-2 border-gray-700 justify-center gap-2 rounded-md hover:text-[#f96a74] hover:border-[#f96a74] duration-300'>
                                <FaGithub></FaGithub>
                                <span>Login with Github</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Register;