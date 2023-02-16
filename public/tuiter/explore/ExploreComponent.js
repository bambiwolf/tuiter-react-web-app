import {PostSummaryList} from "../PostSummaryList";

export const ExploreComponent = () => {
    return(`
             <div class="container">
                <!-- Search bar -->
                <div class="row">
                    <div class="height-40">
                        <i class="fa-solid fa-magnifying-glass search-icon text-secondary"></i>
                        <input type="search" id="explore-search-bar" class="form-control override-bs d-inline position-relative" placeholder="Search Tuiter" />
                        <i class="fa-solid fa-gear text-primary fa-xl"></i>
                    </div>
                </div>
                <!-- For You Tabs -->
                <div class="row pt-2">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">For You</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Trending</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">News</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sports</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Entertainment</a>
                        </li>
                    </ul>
                </div>
                <!-- Large Image and Label-->
                <div class="row pt-2">
                    <img src="../images/spacex.jpg" class="p-0 m-0 img-fluid h-25" alt="Space X Launching image">
                    <div class="mask text-light float-start nudge-up-40px">
                        <h4>SpaceX's Starship</h4>
                    </div>
                </div>
                <div class="row nudge-up-30px">
                 ${PostSummaryList()}
                 </div>
          
           </div>
    `);
}
