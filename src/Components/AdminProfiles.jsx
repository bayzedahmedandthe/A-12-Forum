import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";


const AdminProfiles = () => {
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
        <div>
            Admin profiles page here
            <p className="text-5xl">{admin?.length}</p>
        </div>
    );
};

export default AdminProfiles;