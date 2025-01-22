import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const usePosts = () => {
    const axiosPublic = useAxiosPublic();
    const {data: post =[], refetch} = useQuery({
        queryKey: ["posts"],
        queryFn: async() => {
            const res = axiosPublic.get("/allPosts")
            return res.data
        }
    })
    return [post, refetch]
};

export default usePosts;