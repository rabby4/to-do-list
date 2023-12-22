import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../authentication/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
    return (
        <>
            <section className="container max-w-7xl mx-auto min-h-[calc(100vh-425px)] my-20">
                <div className="grid grid-cols-6 gap-10">
                    <div className="col-span-2">
                        <div className="card bg-base-100 shadow-md">
                            <figure className="px-10 pt-10">
                                <img src={user.photoURL} alt="Shoes" className="rounded-xl " />
                            </figure>
                            <div className="card-body text-center">
                                <Link to={'/dashboard/to-do-list'}> <button className="btn w-full">To Do List</button> </Link>
                                <Link to={'/dashboard/to-do-list'}> <button className="btn w-full">Edit Profile</button> </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-4">
                        <Outlet></Outlet>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Dashboard;