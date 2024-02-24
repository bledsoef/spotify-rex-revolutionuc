// import "./css/feed_main.module.css";
import FeedNav from "./Feed_nav";
import FeedSubMain from "./Feed_subMain";
import FeedBottomBar from "./Feed_bottomBar";
import FeedSideBar from "./Feed_sidebar";

function FeedMain() {
  return (

    <div className ="mainFeed">
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
