import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxiospublic from "../Hooks/useAxiosPublic";
import Aos from "aos"
import 'aos/dist/aos'

const AllPosts = () => {
    const axiosPublic = useAxiospublic();
    const [allPosts, setAllPosts] = useState([]);
    useEffect(() => {
        axiosPublic.get("/allPosts")
            .then(res => {
                setAllPosts(res.data)
            })
    }, []);

    return (
        <div className="w-11/12  mx-auto ">
            <h2 className="md:text-3xl text-xl font-semibold pt-16 pb-8">See Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    allPosts?.map(post =>
                        <Link to={`/postDetails/${post._id}`}>
                            <div data-aos="fade-up" data-aos-duration="2000" className="shadow-xl p-8" key={post._id}>
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