import { Helmet } from "react-helmet-async";
import AllPosts from "../../Components/AllPosts";
import AnnouncementSection from "../../Components/AnnouncementSection";
import TagsSection from "../../Components/TagsSection";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
             <Helmet>
                <title>InspireSphere</title>
            </Helmet>
            {/* header section */}
            <Banner></Banner>
            {/* tags section */}
            <TagsSection></TagsSection>
            {/* announcement section */}
            <AnnouncementSection></AnnouncementSection>
            {/* AllPosts section */}
            <AllPosts></AllPosts>
        </div>
    );
};

export default Home;