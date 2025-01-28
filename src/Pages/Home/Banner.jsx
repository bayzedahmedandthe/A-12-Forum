import { useEffect, useState } from "react";
import bannerImage from "../../assets/banerImage.jpg"
import useAxiospublic from "../../Hooks/useAxiospublic";
const Banner = () => {
    const axiosPublic = useAxiospublic();
    const [search, setSearch] = useState("");
    const [post, setPost] = useState([]);
    useEffect(() => {
        axiosPublic.get(`http://localhost:5000/allPosts?searchparams=${search}`)
        .then(res => {
            setPost(res.data)
        })
    }, [ search]);
    return (
        <div className="md:flex md:items-center w-11/12 mx-auto md:pt-8 pt-2">
            <div>
                <h2 className="lg:text-5xl md:text-3xl text-2xl py-4 font-semibold">Elevate Your Mindset</h2>
                <p className="text-gray-600">Shift your thinking, transform your life. InspireSphere offers practical wisdom, motivational content, and actionable strategies to help you elevate your mindset and achieve your dreams</p>
                <h4 className="text-xl font-semibold pt-8">Search based tags</h4>
                
                    <div className="flex items-center gap-1">
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Enter a tag" className="input input-bordered w-full max-w-xs my-2" />
                    <button className="btn btn-primary">Search</button>
                    </div>
                
            </div>
            <div>
                <img src={bannerImage} alt="" />
            </div>

        </div>
    );
};

export default Banner;
