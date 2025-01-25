import { useEffect, useState } from "react";
import useAxiosPublic from "../Shared/useAxiosPublic";
import { Link } from "react-router-dom";


const AllPosts = () => {
    const axiosPublic = useAxiosPublic();
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        axiosPublic.get("/allPosts")
            .then(res => {
                setAllPosts(res.data)
            })
    }, []);

    return (
        <div className="lg:w-11/12 md:w-4/6 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                allPosts?.map(post =>
                    <Link to={`/postDetails/${post._id}`}>
                        <div className="shadow-xl md:p-8" key={post._id}>
                            <div className="flex items-center gap-2">
                                <img className="md:h-12 md:w-12 h-10 w-10 rounded-full" src={post.authorImage} alt="" />
                                <h3 className="md:text-xl text-lg font-semibold">{post.postTitle}</h3>
                            </div>
                            <p className="text-gray-500 pt-2">Post date: {post.postDate}</p>
                            <h5 className="py-2 text-lg md:font-semibold font-semibold">{post.tag}</h5>
                            <div className="flex items-center gap-4">
                                <p>Comments: </p>
                                <p>Votes: </p>
                            </div>
                        </div>
                    </Link>
                )
            }
        </div>
    );
};

export default AllPosts;

// {
//     "_id": "679084a67d6d02789facf282",
//     "authorName": "Bayzed Ahmed",
//     "authorImage": "https://lh3.googleusercontent.com/a/ACg8ocKjj0vLc0rPR6WO12MLRvbbPNhds6gCrDebZKwJPZIwj0FLEmE=s96-c",
//     "authorEmail": "bayzedm784@gmail.com",
//     "postTitle": "Building Character The Journey of Personal Growth",
//     "tag": "Character building",
//     "postDescription": "The journey of building character is lifelong and involves a constant process of learning and evolving. It requires us to make conscious choices that reflect our core values, whether it's honesty, responsibility, or kindness. While success may come from skill and ambition, true fulfillment comes from living in alignment with our character. Every challenge, every decision, and every interaction contributes to shaping the person we become. The road to strong character is not always easy—it demands patience, self-reflection, and sometimes, difficult sacrifices. However, the rewards of building character are immeasurable: self-respect, deeper relationships, and a sense of purpose. People with strong character attract others who share similar values, creating an environment of trust and mutual respect.",
//     "upVote": 0,
//     "downVote": 0,
//     "postDate": "Jan 22nd 25"
// }