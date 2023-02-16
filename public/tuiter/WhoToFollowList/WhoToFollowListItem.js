export default function WhoToFollowListItem(who) {
    /**
     *     <div className="row">
     *         <div className="col-2">
     *             <img src="java.png" className="icon-30 rounded-circle float-start" alt="Java Logo">
     *         </div>
     *         <!-- Java Account Info Bar -->
     *         <div className="col-4 float-start">
     *             <div className="font-weight-bold">
     *                 Java
     *                 <i className="fa-solid fa-check"></i>
     *             </div>
     *             <div className="fs-6 text-secondary">
     *                 @Java
     *             </div>
     *         </div>
     *         <!-- Follow Button -->
     *         <div className="col-5 float-end">
     *             <button type="button" className="btn btn-primary override-bs-small">Follow</button>
     *         </div>
     *     </div>
     */
    let row_html = "<div class='list-group-item'>";
    let col_2_html = "<div class='col-2'>";
    let img_html = `<img src="../images/${who.avatarIcon}" class="icon-30 rounded-circle float-start" alt="${who.userName}">`;
    let end_div = "</div>";
    let col_4_html = "<div class='float-start'>";
    let username_html = `<div class='font-weight-bold ps-3'>${who.userName}</div>`;
    let handle_html = `<div class='fs-6 text-secondary ps-3'>@${who.handle}</div>`;
    let col_5_html = "<div class='float-end'>";
    let follow_button_html = `<button type='button' class='btn btn-primary btn-block rounded-pill'>Follow</button>`;
    return row_html + col_2_html + img_html + end_div + col_4_html + username_html + handle_html + end_div + col_5_html + follow_button_html + end_div + end_div;
}