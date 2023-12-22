import { Outlet } from "react-router-dom";

const Dashboard = () => {
    return (
        <>
            <section className="container max-w-7xl mx-auto min-h-[calc(100vh-425px)] my-20">
                <div className="grid grid-cols-5 gap-10">
                    <div className="col-span-1">
                        <h2>menu items</h2>
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