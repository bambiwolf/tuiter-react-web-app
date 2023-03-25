import React from "react";
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
            "likes": 0
        }
    }
) => {
    return (
        <div className="row">

            <img className="col-3" alt="comment-icon" src="../../../../public/tuiter/images/comment.png"/> {tuit.replies}
            <img className="col-3" alt="retweet-icon" src="./images/retuit.png"/> {tuit.retuits}
            <img className="col-3" alt="like-icon" src="./images/like.png"/> {tuit.likes}
            <img className="col-3" alt="share-icon" src="./images/share.png"/>
        </div>
    );
};
export default TuitStats;