import { useQuery } from "@tanstack/react-query";
import useAuth from "../Authentication/useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin]
    
};

export default useAdmin;