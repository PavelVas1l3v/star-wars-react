import LukesBanner from "./LukesBanner.jsx";
import LukesFriends from "./LukesFriends.jsx";
import LukesInfo from "./LukesInfo.jsx";

const Main = () => {
    return (
        <main className="clearfix">
            <LukesBanner/>
            <LukesFriends/>
            <LukesInfo/>
        </main>
    );
};

export default Main;