import { useEffect, useState } from "react";
import usePosts from "../Hooks/usePosts";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiospublic from "../Hooks/useAxiospublic";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";


const CommentPage = () => {
    const navigate = useNavigate();
    const axiosPublic = useAxiospublic();
    const { id } = useParams();
    console.log(id);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const updateData = { ...data, postId: id };
        axiosPublic.post("/comments", updateData)
            .then(res => {
                console.log(res.data);
                navigate("/")
                reset();
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Comment added successful",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
    }


    return (
        <div className="w-10/12 mx-auto h-screen">
             <Helmet>
                <title>Add Comment</title>
            </Helmet>
            <h2 className="md:text-2xl text-xl font-semibold  pt-28 pb-8">Write a comment</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <textarea
                    {...register("comment", { required: true })}
                    placeholder="write a comment"
                    required
                    className="textarea textarea-bordered textarea-lg w-full  justify-center"></textarea>
                <div className="flex justify-end pt-2">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default CommentPage;