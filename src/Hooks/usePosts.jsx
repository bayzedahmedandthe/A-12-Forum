import { useQuery } from "@tanstack/react-query";
import useAxiospublic from "./useAxiosPublic";


const usePosts = () => {
    const axiosPublic = useAxiospublic();
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