import { Link } from 'react-router-dom';
import bannerImg from '../assets/banner-img.png'
const Home = () => {
    return (
        <>
            <section className="bg-[#f9f9f9]">
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
        </>
    );
};

export default Home;