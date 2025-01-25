import { BiCommentDetail, BiDislike, BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";

const PostDetails = () => {
    const postData = useLoaderData();
    console.log(postData);
    const { _id, authorName, authorImage, authorEmail, postTitle, tag, postDescription, upVote, downVote, postDate } = postData;
    return (
        <div className="lg:w-6/12 mx-auto pt-8  ">
            <div className="shadow-xl md:p-8">
                <div className="flex items-center gap-2">
                    <img className="md:h-12 md:w-12 h-10 w-10 rounded-full" src={authorImage} alt="" />
                    <h3 className="md:text-xl text-lg font-semibold">{authorName}</h3>
                </div>
                <p className="text-gray-500 pt-2">Post date: {postDate}</p>
                <h5 className="py-2 md:text-xl md:font-semibold font-semibold">{tag}</h5>
                <h3 className="md:text-2xl text-xl font-semibold">{postTitle}</h3>
                <p>{postDescription}</p>
                <div className="flex items-center  md:gap-1 pt-4 font-semibold">
                    <p className=" btn bg-white border-white hover:bg-white hover:border-white md:text-2xl hover:text-blue-500"> <BiCommentDetail /> </p>
                    <p className="btn bg-white border-white hover:bg-white hover:border-white md:text-2xl hover:text-blue-500"> <BiLike /> </p>
                    <p className=" btn bg-white border-white hover:bg-white hover:border-white md:text-2xl hover:text-blue-500"> <BiDislike /> </p>
                    <p className=" btn bg-white border-white hover:bg-white hover:border-white md:text-2xl hover:text-blue-500"> <RiShareForwardLine /> </p>
                </div>
            </div>
        </div>
    );
};

export default PostDetails;

// {
//     "_id": "679087df7d6d02789facf284",
//     "authorName": "Bayzed Ahmed",
//     "authorImage": "https://lh3.googleusercontent.com/a/ACg8ocKjj0vLc0rPR6WO12MLRvbbPNhds6gCrDebZKwJPZIwj0FLEmE=s96-c",
//     "authorEmail": "bayzedm784@gmail.com",
//     "postTitle": "Unlocking the Secrets to Business Growth Strategies for Success",
//     "tag": "business",
//     "postDescription": "In today’s competitive market, growing a business requires more than just hard work – it demands smart strategies. Whether you’re a startup or an established company, focusing on innovation and customer satisfaction is key. Invest in your team’s development and foster a culture of continuous improvement. Leverage technology to streamline operations and enhance productivity. Networking with industry leaders can open doors to new opportunities and collaborations. Stay agile, and adapt to changing market trends and consumer needs. Effective marketing strategies can increase brand visibility and attract loyal customers. Consistency and perseverance are essential to long-term business success – always keep your eyes on the goal!",
//     "upVote": 0,
//     "downVote": 0,
//     "postDate": "Jan 22nd 25"
// }