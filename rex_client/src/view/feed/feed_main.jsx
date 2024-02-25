// import "./css/feed_main.module.css";
import FeedNav from "./feed_nav";
import FeedBottomBar from "./feed_bottomBar";
import FeedSideBar from "./feed_sidebar";
import HomeMain from "../home/home_main";
import Profile from "../profile/profile";
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
      <Profile />
    </div>
  );
}
export default Nav;
