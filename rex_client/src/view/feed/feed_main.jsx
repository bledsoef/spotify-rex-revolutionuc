// import "./css/feed_main.module.css";
import FeedNav from "./Feed_nav";
import FeedSideBar from "./Feed_sidebar";
import FeedSubMain from "./Feed_subMain";
import FeedBottomBar from "./Feed_bottomBar";

function FeedMain() {
  return (
    <>
      <FeedSideBar />
      <FeedNav />
      <FeedSubMain />
      <FeedBottomBar />
    </>
  );
}

export default FeedMain;
