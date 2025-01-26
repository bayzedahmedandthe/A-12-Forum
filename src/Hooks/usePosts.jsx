import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxiosPublic";
import useAxiosSecure from "./useAxiosSecure";


const usePosts = () => {
    const axiosSecure = useAxiosSecure();
    const {refetch, data: post = []} = useQuery({
        queryKey: ["post"],
        queryFn: async() => {
            const res = await axiosSecure.get("/allPosts")
            return res.data
        }
    })
    return [post, refetch]
};

export default usePosts;