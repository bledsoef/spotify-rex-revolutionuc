// import "./css/feed_main.module.css";
import FeedNav from "./feed_nav";
import FeedSubMain from "./feed_subMain";
import FeedBottomBar from "./feed_bottomBar";
import FeedSideBar from "./feed_sidebar";

function FeedMain() {
  return (
    <div className="mainFeed">
      <div className="topFeed">
        <FeedNav />
      </div>
      <div className="middleFeed">
        <FeedSideBar />
        <FeedSubMain />
      </div>

      <div className="bottomFeed">
        <FeedBottomBar />
      </div>
    </div>
  );
}
export default FeedMain;
