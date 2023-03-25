import React from "react";
import {useSelector} from "react-redux";
import PostSummaryItem
    from "./tuit-item";
import TuitItem from "./tuit-item";

const TuitList = () => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitArray.map(tuit =>
                    <TuitItem
                        key={tuit._id} tuit={tuit}/> )
            }
        </ul>
    );
};
export default TuitList;