import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/icons8-inspiration-64.png"
import notification from "../../assets/icons8-notification-40.png"
import { useContext } from "react";
import { AuthContext } from "../../Authentication/AuthProvider";
const Navabar = () => {
    const { user } = useContext(AuthContext);
    console.log(user?.photoURL, user?.displayName);

    return (
        <div className="md:w-11/12 md:mx-auto md:pt-4 pt-2">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <NavLink to="/"><li className="pr-6  hover:font-bold">Home</li></NavLink>
                            <NavLink to="/membership"><li className="pr-6  hover:font-bold">Membership</li></NavLink>
                            <NavLink to="/notification"><img className="h-8 w-8" src={notification} alt="" /></NavLink>
                            <NavLink to="/joinus"> <li className=" hover:font-bold">Join Us</li></NavLink>
                        </ul>
                    </div>
                    <Link className="">
                        <div className="flex items-center gap-2"> <img className="h-12 w-12" src={logo} alt="" />
                            <h3 className="lg:text-lg lg:font-semibold md:font-semibold ">InspireSphere</h3></div>
                    </Link>
                </div>
                <div className="navbar-center hidden md:flex ">
                    <ul className="menu menu-horizontal px-1 flex items-center">
                        <NavLink to="/"><li className="pr-6  hover:font-bold">Home</li></NavLink>
                        <NavLink to="/membership"><li className="pr-6 hover:font-bold">Membership</li></NavLink>
                        <NavLink to="/notification"><img className="h-8 w-8" src={notification} alt="" /></NavLink>
                    </ul>
                </div>
                <div className="navbar-end pr-4 md:pr-0">
                    {
                        user ?
                            <button>
                                <p>{user.displayName}</p>
                                <img className="h-12 w-12 rounded-full" src={user?.photoURL} alt="" />
                            </button>
                         :
                            <ul>
                                <NavLink to="/joinus"> <li className="hover:font-bold">Join Us</li></NavLink>
                            </ul>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navabar;