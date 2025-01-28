
import { useForm } from "react-hook-form";
import useAuth from "../Authentication/useAuth";
import moment from "moment";
import useAxiospublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const AddPost = () => {
    const axiosPublic = useAxiospublic();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        const upVote = 0;
        const downVote = 0;
        const postDate = moment().format("MMM Do YY");
        const updateData = { ...data, upVote, downVote, postDate }
        axiosPublic.post("/allPosts", updateData)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Post added successful",
                    showConfirmButton: false,
                    timer: 1500
                });
                // console.log(res.data);
                reset();
            });
    }
    return (
        <div className='py-12 lg:w-6/12 mx-auto md:w-8/12 w-9/12'>
             <Helmet>
                <title>Add Posts</title>
            </Helmet>
            <h2 className="md:text-3xl font-semibold text-xl text-center py-6">Add a post</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label className="form-control w-full ">
                    <span className="label-text py-2">Author Name</span>
                    <input {...register("authorName", { required: true })} type="text" defaultValue={user?.displayName} required className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full ">
                    <span className="label-text  py-2">Author Image</span>
                    <input {...register("authorImage", { required: true })} type="url" defaultValue={user?.photoURL} required className="input input-bordered w-full" />
                </label>

                <label className="form-control w-full ">
                    <span className="label-text  py-2">Author Email</span>
                    <input {...register("authorEmail", { required: true })} type="email" defaultValue={user?.email} required className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full ">
                    <span className="label-text py-2">Post Title</span>
                    <input {...register("postTitle", { required: true })} type="text" placeholder="Enter post title" required className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <span className="label-text py-2">Select a Tag*</span>
                    <select defaultValue="default" {...register("tag", { required: true })} required className="select select-bordered w-full">
                        <option disabled value="default">Tag</option>
                        <option>Character building</option>
                        <option>Normal education</option>
                        <option>Heigher education</option>
                        <option>Studying abroad</option>
                        <option>business</option>
                        <option>Job</option>
                        <option>Writing story</option>
                        <option>Writing poetry</option>
                        <option>Knowing about Islam</option>
                        <option>Literary practice</option>
                        <option>Knowing english language</option>
                    </select>
                </label>
                <label className="form-control w-full ">
                    <span className="label-text py-2">Post Descriptioin</span>
                    <textarea
                        {...register("postDescription", { required: true })}
                        placeholder="Enter a description for the post"
                        className="textarea textarea-bordered textarea-lg w-full "></textarea>
                </label>
                <div className="py-4 flex justify-end">
                    <button className="btn btn-primary ">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default AddPost;