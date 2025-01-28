import { useEffect, useState } from "react";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAnnouncement from "../Hooks/useAnnouncement";


const AnnouncementSection = () => {
    const [announcement] = useAnnouncement();
    if (announcement.length > 0) {
        return <div className="w-11/12 mx-auto ">
            <h2 className="md:text-3xl font font-semibold text-lg text-center pb-6">Announcement</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 gap-4">
                {
                    announcement?.map(announce =>
                        <div key={announce._id} className="bg-gray-100 rounded-lg p-6">
                            <div className="flex items-center gap-2">
                                <img className="md:h-12 md:w-12 h-10 w-10 rounded-full" src={announce.authorImage} alt="" />
                                <h3 className="md:text-xl text-lg font-semibold">{announce.authorName}</h3>
                            </div>
                            <h4 className="md:text-xl text-lg font-semibold py-4">{announce.Title}</h4>
                            <p>{announce.Description}</p>
                        </div>
                    )
                }
            </div>
        </div>
    }

};

export default AnnouncementSection;