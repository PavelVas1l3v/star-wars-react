import {friendsArr} from "../utils/constants.js";
import FriendsImage from "./FriendsImage.jsx";

const LukesFriends = () => {
    return (
        <section className="float-end w-50 row border border-warning rounded-bottom-4 ms-2 me-0">
            <h2 className="col-sm-12 text-center">Dream team</h2>
            {friendsArr.map((friend, index) => (<FriendsImage name={friend} key={index} pos ={index +1}/>))}
        </section>
    );
};

export default LukesFriends;