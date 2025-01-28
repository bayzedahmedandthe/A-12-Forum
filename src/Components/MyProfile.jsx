import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";
import useUsers from "../Hooks/useUsers";
import { Helmet } from "react-helmet-async";

const MyProfile = () => {
    const [users] = useUsers();
    const { user } = useContext(AuthContext);
    return (
        <div className="shadow-lg rounded-lg border py-10 md:px-20 w-2/5 mx-auto flex justify-center items-center md:mt-32 mt-12">
             <Helmet>
                <title>My Profile</title>
            </Helmet>
            <div className="grid gap-2 grid-cols-2">
                <div className="flex items-center gap-4">
                    <img className="md:h-12 md:w-12 h-10 w-10 rounded-full" src={user.photoURL} alt="" />
                    <div>
                        <h3 className="md:text-3xl text-xl font-semibold w-full">
                            {user.displayName}
                        </h3>
                        <p>{user.email}</p>
                    </div>
                    <div>
                        {
                            users?.map(us => {
                                <img key={us._id} src={us.badge} alt="" />
                                // console.log(us.badge) 
                            })
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;