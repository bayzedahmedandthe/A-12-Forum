import { useContext } from "react";
import { AuthContext } from "../Authentication/AuthProvider";

const MyProfile = () => {
    const { user } = useContext(AuthContext);
    return (
        <div className="pt-6">
            <div className="grid gap-2 grid-cols-2">
                <div className="flex items-center gap-4">
                    <img className="md:h-12 md:w-12 h-10 w-10 rounded-full" src={user.photoURL} alt="" />
                    <div>
                        <h3 className="md:text-3xl text-xl font-semibold">
                            {user.displayName}
                        </h3>
                        <p>{user.email}</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MyProfile;