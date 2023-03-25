import React from "react";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import TuitStats from "./tuit-stats";
const TuitItem = (
    {
        tuit = {
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
            "image": "tesla_icon.jpg"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={48} src={`./images/${tuit.image}`} alt={"profile pic"}/>
                </div>
                <div className="col-10">
                    <div> <b> {tuit.userName}</b> <IoIosCheckmarkCircleOutline/> {tuit.handle} . {tuit.time}</div>
                    <div>{tuit.tuit}</div>
                    <div> <TuitStats>{tuit}</TuitStats></div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;

/**
 * Taken out:
 * <div className="fw-bolder">{post.topic}</div>\
 * <div>{post.title}</div>
 */