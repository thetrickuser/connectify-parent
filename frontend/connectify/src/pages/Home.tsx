import Header from "../components/Header.tsx";
import LeftSidebar from "../components/LeftSidebar.tsx";
import Feed from "../components/Feed.tsx";
import RightSidebar from "../components/RightSidebar.tsx";

const Home = () => {
    return (
        <div className="h-screen w-full bg-gray-100">

        <Header/>
        <div className="flex flex-1 w-full mt-4">
            <LeftSidebar/>
            <Feed/>
            <RightSidebar/>

        </div>
        </div>
    )
}

export default Home;