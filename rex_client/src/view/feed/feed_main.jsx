// import "./css/feed_main.module.css";
import FeedNav from "./feed_nav";
import FeedSubMain from "./feed_subMain";
import FeedBottomBar from "./feed_bottomBar";
import FeedSideBar from "./feed_sidebar";
import HomeMain from "../home/home_main";
function Nav() {
  return (
    <div className="mainFeed">
      <div className="topFeed">
        <FeedNav />
      </div>
      <div className="middleFeed">
        <FeedSideBar />
        <HomeMain />
      </div>

      <div className="bottomFeed">
        <FeedBottomBar />
      </div>
    </div>
  );
}
export default Nav;
