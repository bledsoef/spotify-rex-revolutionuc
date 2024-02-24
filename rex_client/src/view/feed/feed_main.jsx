// import "./css/feed_main.module.css";
import FeedNav from "./feed_nav";
import FeedSideBar from "./feed_sidebar";
import FeedSubMain from "./feed_subMain";
import FeedBottomBar from "./feed_bottomBar";

function FeedMain() {
  return (
    <>
      <p>Hello from main</p>
      <FeedNav />
      <FeedSideBar />
      <FeedSubMain />
      <FeedBottomBar />
    </>
  );
}

export default FeedMain;
