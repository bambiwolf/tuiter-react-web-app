export default function PostSummaryItem(post) {
    /**
     *                     <div class="row pt-2 pb-2 p-0 grey-bottom-border">
     *                         <!-- Post part of Suggested Post -->
     *                         <div class="col-10">
     *                             <!-- Suggested Post Topic -->
     *                             <div class="fs-6 text-secondary">
     *                                 Web Development
     *                             </div>
     *                             <!-- Suggested Post Account Bar -->
     *                             <div class="font-weight-bold d-inline">
     *                                 ReactJS
     *                                 <i class="fa-solid fa-check"></i>
     *                             </div>
     *                             · 2h
     *                             <!-- Suggested Post Blurb -->
     *                             <div class="font-weight-bold text-wrap pe-5">
     *                                 React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs.
     *                             </div>
     *                         </div>
     *                         <!-- Suggested Post Icon -->
     *                         <div class="col-2 pe-4 align-middle">
     *                             <img src="react.png" class="height-100 float-end" alt="ReactJS Logo">
     *                         </div>
     *                     </div>
     */
    let row_html = "<div class='list-group-item'>";
    let col_10_html = "<div class= 'row'> <div class='col-10'>";
    let topic_html = `<div class='fs-6 text-secondary'>${post.topic}</div>`;
    let account_bar_html = `<div class='font-weight-bold'>${post.userName}<i class='fa-solid fa-check p-1'></i>·<div class='fs-6 text-secondary d-inline p-1'>${post.time}</div></div>`;
    let blurb_html = `<div class='font-weight-bold text-wrap pe-5'>${post.title}</div>`;
    let end_div = "</div>";
    let col_2_html = "<div class='col-2'>";
    let img_html = `<img src="../images/${post.image}" class="height-100 float-end" alt="${post.userName}">`;
    return row_html + col_10_html + topic_html + account_bar_html + blurb_html + end_div + col_2_html + img_html + end_div + end_div + end_div;
}