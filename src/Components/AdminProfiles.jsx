import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import usePosts from "../Hooks/usePosts";
import useUsers from "../Hooks/useUsers";
import { Helmet } from "react-helmet-async";


const AdminProfiles = () => {
    const [users] = useUsers();
    const [post] = usePosts();
    const axiosSecure = useAxiosSecure();
    const [admin, setAdmin] = useState([]);
    useEffect(() => {
        axiosSecure.get("/user/admins/admin")
            .then(res => {
                setAdmin(res.data);
            })
    }, []);
  console.log(admin);

    return (
        <div className="pt-6 w-11/12 mx-auto">
             <Helmet>
                <title>Admin Profiles</title>
            </Helmet>
            <div className="grid gap-2 grid-cols-2">
                {
                    admin?.map(adm =>
                        <div className="flex items-center gap-4 shadow-lg rounded-lg border p-4 mt-20">
                            <img className="md:h-12 md:w-12 h-10 w-10 rounded-full" src={adm.photo} alt="" />
                            {console.log(adm?.photo)}
                            <div>
                                <h3 className="md:text-3xl text-xl font-semibold">
                                    {adm.name}
                                </h3>
                                <p>{adm.email}</p>
                            </div>
                        </div>
                    )
                }
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 md:gap-6 lg:gap-10 pt-16">
                <h2 className="md:text-2xl text-xl font-semibold">Total Posts: {post.length}</h2>
                <h2 className="md:text-2xl text-xl font-semibold">Total Users: {users.length}</h2>
                <h2 className="md:text-2xl text-xl font-semibold">Total comments: {}</h2>
            </div>
        </div>
    );
};

export default AdminProfiles;