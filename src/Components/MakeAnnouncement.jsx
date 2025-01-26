import { useForm } from "react-hook-form";
import useAuth from "../Authentication/useAuth";
import useAxiospublic from "../Hooks/useAxiosPublic";


const MakeAnnouncement = () => {
    const axiosPublic = useAxiospublic();
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        // console.log(data);
        axiosPublic.post("/announcement", data)
        .then(res => {
            console.log(res.data);
            reset()
        })
    }
    return (
        <div className='py-12 lg:w-6/12 mx-auto md:w-8/12 w-9/12'>
            <h2 className="md:text-3xl font-semibold text-xl text-center py-6">Make Announcement</h2>
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
                    <span className="label-text py-2"> Title</span>
                    <input {...register("Title", { required: true })} type="text" placeholder="Enter post title" required className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full ">
                    <span className="label-text py-2"> Descriptioin</span>
                    <textarea
                        {...register("Description", { required: true })}
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

export default MakeAnnouncement;