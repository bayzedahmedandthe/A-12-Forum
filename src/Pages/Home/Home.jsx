import TagsSection from "../../Components/TagsSection";
import Banner from "./Banner";


const Home = () => {
    return (
        <div>
            {/* header section */}
            <Banner></Banner>
            {/* tags section */}
            <TagsSection></TagsSection>
        </div>
    );
};

export default Home;