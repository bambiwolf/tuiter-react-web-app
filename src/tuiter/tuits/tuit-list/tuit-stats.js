import React from "react";
import {FaRegComment} from "react-icons/fa";
import {AiFillDislike, AiOutlineDislike, AiOutlineHeart, AiOutlineRetweet} from "react-icons/ai";
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
            "liked": false,
            "dislikes": 0,
            "disliked": false,
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
    const dislikeIcon = tuit.disliked ? <AiFillDislike/> : <AiOutlineDislike/>;
    const likeChange = tuit.liked ? tuit.likes - 1 : tuit.likes + 1;
    const dislikeChange = tuit.disliked ? tuit.dislikes - 1 : tuit.dislikes + 1;
    return (
        <div className="row">
            <div className={"col-2"}> <FaRegComment/> {tuit.replies} </div>
            <div className={"col-2"}> <AiOutlineRetweet/> {tuit.retuits} </div>
            <div className={"col-2"}>
                {tuit.likes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    likes: likeChange,
                    liked: !tuit.liked
                }))} className="bi me-2">{heartIcon}</i>
            </div>
            <div className={"col-2"}>
                {tuit.dislikes}
                <i onClick={() => dispatch(updateTuitThunk({
                    ...tuit,
                    dislikes: dislikeChange,
                    disliked: !tuit.disliked
                }))} className="bi me-2">{dislikeIcon}</i>
            </div>
            <div className={"col-2"}> <BsShare/> </div>
        </div>
    );
};
export default TuitStats;