import PostSummaryItem from "./PostSummaryItem.js";
import posts from "./posts.js"

const PostSummaryList = () => {
    let list_accumulation = "";
    for (let j = 0; j < posts.length; j++) {
        list_accumulation += PostSummaryItem(posts[j]);
    }
    return (`
           <ul class="list-group pe-0">
           ${list_accumulation}
           </ul>
`); }

export default PostSummaryList;