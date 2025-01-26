import { useEffect, useState } from "react";
import useAxiospublic from "../Hooks/useAxiosPublic";


const AnnouncementSection = () => {
    const axiosPublic = useAxiospublic();
    const [announcement, setAnnouncement] = useState([]);
    useEffect(() => {
        axiosPublic.get("/announcement")
            .then(res => {
                console.log(res.data);
                setAnnouncement(res.data)
            })
    }, []);
    if (announcement.length > 0) {
        return <div>
            <h2>Total Announcement: {announcement.length}</h2>
        </div>
    }

};

export default AnnouncementSection;