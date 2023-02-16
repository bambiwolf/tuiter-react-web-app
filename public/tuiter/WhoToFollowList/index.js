import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"

export const WhoToFollowList = () => {
    let list_accumulation = "";
    for (let j = 0; j < who.length; j++) {
        list_accumulation += WhoToFollowListItem(who[j]);
    }
    return (`
           <ul class="list-group">
           <div class="list-group-item font-weight-bold">Who to Follow</div>
           ${list_accumulation}
           </ul>
`); }