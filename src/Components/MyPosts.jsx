import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../Authentication/useAuth";
import { MdOutlineInsertComment } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import usePosts from "../Hooks/usePosts";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const MyPosts = () => {
    const [, refetch] = usePosts()
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myPosts, setMyPosts] = useState([]);
    useEffect(() => {
        axiosSecure.get(`/allPosts-email/${user?.email}`)
            .then(res => {
                setMyPosts(res.data)
            })
    }, [myPosts]);
    // console.log(myPosts);
    const handleDelete = post => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/allPosts/${post._id}`)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${post.postTitle} delete successful`,
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }
    return (
        <div className="w-10/12 mx-auto ">
             <Helmet>
                <title>My Posts</title>
            </Helmet>
            <h2 className="md:text-3xl text-2xl font-semibold py-8">My Posts</h2>
            <div className="overflow-x-auto">
                <div className="overflow-x-auto">
                    <table className="table ">
                        {/* head */}
                        <thead>
                            <tr className="text-lg font-semibold">
                                <th>No.</th>
                                <th>Post Title</th>
                                <th>Up votes</th>
                                <th>Down votes</th>
                                <th>Comment</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myPosts?.map((post, index) =>
                                    <tr key={post._id}>
                                        <td>
                                            <p className="text-xl">{index + 1}</p>
                                        </td>
                                        <td>
                                            <h4 className="font-semibold text-lg">{post.postTitle}</h4>
                                        </td>
                                        <td className="text-xl lg:px-12">
                                            {post.upVote}
                                        </td>
                                        <td className="text-xl lg:px-12">{post.downVote}</td>
                                        <th>
                                            <Link to={`/viewComments/${post._id}`}>
                                                <button className="btn btn-ghost text-lg lg:px-12"><MdOutlineInsertComment /></button>
                                            </Link>
                                        </th>
                                        <th>
                                            <button onClick={() => handleDelete(post)} className="btn btn-ghost text-xl lg:px-12 text-red-500"><RiDeleteBin6Line /> </button>
                                        </th>
                                    </tr>
                                )
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyPosts;

