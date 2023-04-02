import React from "react";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuitThunk} from "../../../services/tuits-thunks";

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
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="rounded-circle" height={50} src={`./images/${tuit.image}`} alt={"profile pic"}/>
                </div>
                <div className="col-10">
                    <div><i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i></div>
                    <div> <b> {tuit.userName}</b> <IoIosCheckmarkCircleOutline/> {tuit.handle} . {tuit.time}</div>
                    <div className={"overflow-wrap"}>{tuit.tuit}</div>
                    <div> <TuitStats
                        key={tuit.id} tuit={tuit}/> </div>
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