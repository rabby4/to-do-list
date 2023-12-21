import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner-img.png'
import { FaUsersCog, FaUserTie } from "react-icons/fa";
import { TbUserDollar } from "react-icons/tb";
import { IoIosConstruct } from "react-icons/io";
import { FaUserAstronaut } from "react-icons/fa6";


const Home = () => {
    return (
        <>
            <section>
                <div className="hero min-h-[calc(100vh-65px)] container max-w-7xl mx-auto">
                    <div className="hero-content flex-col lg:flex-row gap-14">
                        <div className="w-1/2">
                            <img src={bannerImg} className="" />
                        </div>
                        <div className="w-1/2">
                            <h1 className="text-7xl font-bold">Move Work Forward Together</h1>
                            <p className="py-6 text-xl">Adminox is the ecommerce helpdesk center that turns your customer service into a profit center without any delay and increase your sale.</p>
                            <Link to='/login'>
                                <button className="btn text-xl py-2 rounded bg-[#f96a74] hover:bg-[#ff545f] text-white border-none px-8">Let’s explore</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            <section className='container max-w-7xl mx-auto py-28'>
                <div className='text-center'>
                    <h1 className="text-7xl font-bold capitalize mb-14">Our beloved users</h1>
                </div>
                <div className='grid grid-cols-5 gap-6'>
                    <div className="card bg-base-100 shadow-md">
                        <figure className="px-10 pt-10">
                            <FaUsersCog className='text-5xl'></FaUsersCog>
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title text-2xl">Developers</h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <figure className="px-10 pt-10">
                            <TbUserDollar className='text-5xl'></TbUserDollar>
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title text-2xl">Banker</h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <figure className="px-10 pt-10">
                            <IoIosConstruct className='text-5xl'></IoIosConstruct>
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title text-2xl">constructor</h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <figure className="px-10 pt-10">
                            <FaUserTie className='text-5xl'></FaUserTie>
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title text-2xl">Teacher</h2>
                        </div>
                    </div>
                    <div className="card bg-base-100 shadow-md">
                        <figure className="px-10 pt-10">
                            <FaUserAstronaut className='text-5xl'></FaUserAstronaut>
                        </figure>
                        <div className="card-body items-center text-center pt-2">
                            <h2 className="card-title text-2xl">Content Creator</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;