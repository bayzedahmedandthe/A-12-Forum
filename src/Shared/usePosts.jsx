import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePosts = () => {
    const axiosPublic = useAxiosPublic();
    const {refetch, data: post = []} = useQuery({
        queryKey: ["post"],
        queryFn: async() => {
            const res = await axiosPublic.get("/allPosts")
            return res.data
        }
    })
    return [post, refetch]
};

export default usePosts;