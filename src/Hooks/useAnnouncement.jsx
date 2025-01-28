import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiosSecure";


const useAnnouncement = () => {
    const axiosSecure = useAxiosSecure();
    const [announcement, setAnnouncement] = useState([]);
    useEffect(() => {
        axiosSecure.get("/announcement")
        .then(res => {
            // console.log(res.data);
            setAnnouncement(res.data)
        })
    }, [announcement]);
    return [announcement];
};

export default useAnnouncement;