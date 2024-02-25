// import "./css/feed_main.module.css";
import NavBar from "../home/navBar";
import SideBar from "../home/sideBar";
import TabView from "../home/tabView";
function Main() {
  return (
    <div className="mainFeed">
      <div className="">
        <NavBar />
      </div>
      <div className="middleFeed">
        <SideBar />
        <TabView />
      </div>
    </div>
  );
}
export default Main;
