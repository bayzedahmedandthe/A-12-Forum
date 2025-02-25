import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "../Authentication/useAuth";


const useAdmin = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {data: isAdmin} = useQuery({
        queryKey: [user?.email, "isAdmin"],
        enabled: !!user ,
        queryFn: async () => {
            const res = await axiosSecure.get(`/user/admin/${user?.email}`);
            return res.data?.admin;
        }
    })
    return [isAdmin]
    
};

export default useAdmin;
// admin is here now