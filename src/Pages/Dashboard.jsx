import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Navabar from "./Home/Navabar";
import Footer from "./Home/Footer";


const Dashboard = () => {
    const isAdmin = true;
    return (
        <div className="flex gap-4 md:gap-12 flex-1">
            <div className="shadow-xl min-h-screen bg-slate-100 w-[280px]">
              
                        <ul className="pt-4">
                            <li className="py-2 text-center"><NavLink to="/dashboard/adminProfiles">Admin Profiles</NavLink></li>
                            <li className="text-center"><NavLink to="/dashboard/manageUsers">Manage Users</NavLink></li>
                            <li className="py-2 text-center"><NavLink to="/dashboard/reportedComments">Reported Comments</NavLink></li>
                            <li className="py-2 text-center"><NavLink to="/dashboard/makeAnnouncement">Make Announcement</NavLink></li>
                            <li className="divider"></li>
                            <li className="text-center"><Link to="/">Home</Link></li>
                        </ul>
                        :
                        {/* <ul className="pt-4">
                            <li className="py-2 text-center"><NavLink to="/dashboard/myProfile">My Profile</NavLink></li>
                            <li className="text-center"><NavLink to="/dashboard/myPosts">My Posts</NavLink></li>
                            <li className="py-2 text-center"><NavLink to="/dashboard/addPost">Add Post</NavLink></li>
                            <li className="divider"></li>
                            <li className="text-center"><Link to="/">Home</Link></li>
                        </ul> */}
                
            </div>
            <div className="w-full">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;