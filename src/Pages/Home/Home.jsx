import AllPosts from "../../Components/AllPosts";
import TagsSection from "../../Components/TagsSection";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            {/* header section */}
            <Banner></Banner>
            {/* tags section */}
            <TagsSection></TagsSection>
            {/* announcement section */}


            {/* AllPosts section */}
            <AllPosts></AllPosts>
        </div>
    );
};

export default Home;