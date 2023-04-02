import React from "react";
import {FaRegComment} from "react-icons/fa";
import {AiOutlineHeart, AiOutlineRetweet} from "react-icons/ai";
import {BsShare} from "react-icons/bs";
import {useDispatch} from "react-redux";
import {likeTuit, unlikeTuit}
    from "../tuits-reducer";
import {FcLike} from "react-icons/fc";
import {updateTuitThunk} from "../../../services/tuits-thunks";


const TuitStats = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla_icon.jpg",
            "replies": 0,
            "retuits": 0,
            "likes": 0,
            "liked": false
        }
    }
) => {
    const dispatch = useDispatch();
    //if the heart icon is clicked, then the tuit's boolean should be flipped
    // and the number of likes should be incremented or decremented
    const handleLikeClick = () => {
        if (tuit.liked) {
            dispatch(unlikeTuit(tuit))
        }
        else {
            dispatch(likeTuit(tuit))
        }
    }
    // if the tuit's boolean for liked is true, then the color of the heart should be red
    //<button className={"col-3 btn p-0 m-0"} onClick={handleLikeClick}> {heartIcon} {tuit.likes} </button>
    const heartIcon = tuit.liked ? <FcLike/> : <AiOutlineHeart/>;
    const likeChange = tuit.liked ? tuit.likes - 1 : tuit.likes + 1;
    return (
        <div className="row">
            <div className={"col-3"}> <FaRegComment/> {tuit.replies} </div>
            <div className={"col-3"}> <AiOutlineRetweet/> {tuit.retuits} </div>
            <div className={"col-3"}>
                Likes: {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: likeChange,
                    liked: !tuit.liked
                }))} className="bi me-2 text-danger">{heartIcon}</i>
            </div>
            <div className={"col-3"}> <BsShare/> </div>
        </div>
    );
};
export default TuitStats;