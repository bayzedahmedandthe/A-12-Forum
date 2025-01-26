import { FiUsers } from "react-icons/fi";
import { GrUserSettings } from "react-icons/gr";
import { useLoaderData } from "react-router-dom";
import usePosts from "../Hooks/usePosts";
import useAxiospublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { useEffect } from "react";



const ManageUsers = () => {
    const axiosPublic = useAxiospublic();
    const users = useLoaderData();
    const [, refetch] = usePosts();
    // console.log(users);
    const handleMakeAdmin = user => {
        axiosPublic.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: `${user.name} is an admin now`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }
    useEffect(() => {
        if(users.length > 0){
            refetch()
        }
    }, [users, refetch]);
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table mt-12">
                    {/* head */}
                    <thead className="md:text-xl font-semibold ">
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Subscription Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) =>
                                <tr key={user._id}>
                                    <th>{index + 1}</th>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td>
                                        {
                                            user.type === "admin" ?
                                                "admin"
                                                :
                                                <button onClick={() => handleMakeAdmin(user)} className="text-xl"><FiUsers /></button>
                                        }
                                    </td>
                                    <td><button className="text-xl"><GrUserSettings /></button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;