import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {
    const [isAdmin] = useAdmin();
    return (
        <div className="md:flex md:gap-12 flex-1">
             <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <div className="shadow-xl w-11/12 mx-auto md:min-h-screen bg-slate-100 md:w-[280px]">

                {
                    isAdmin ?
                        <ul className="pt-4">
                            <li className="py-2 text-center"><NavLink to="/dashboard/adminProfiles">Admin Profiles</NavLink></li>
                            <li className="text-center"><NavLink to="/dashboard/manageUsers">Manage Users</NavLink></li>
                            <li className="py-2 text-center"><NavLink to="/dashboard/reportedComments">Reported Comments</NavLink></li>
                            <li className="py-2 text-center"><NavLink to="/dashboard/makeAnnouncement">Make Announcement</NavLink></li>
                            <li className="divider"></li>
                            <li className="text-center"><Link to="/">Home</Link></li>
                        </ul>
                        :
                        <ul className="pt-4">
                            <li className="py-2 text-center"><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                            <li className="text-center"><NavLink to="/dashboard/myPosts">My Posts</NavLink></li>
                            <li className="py-2 text-center"><NavLink to="/dashboard/addPost">Add Post</NavLink></li>
                            <li className="divider"></li>
                            <li className="text-center"><Link to="/">Home</Link></li>
                        </ul>
                }

            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;