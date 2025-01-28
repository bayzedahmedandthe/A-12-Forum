import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axiosSecure.get("/users")
            .then(res => {
                console.log(res.data);
                setUsers(res.data)
            })
    }, []);
    return [users]
};

export default useUsers;