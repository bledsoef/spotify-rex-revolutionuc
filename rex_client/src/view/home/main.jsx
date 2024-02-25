// import "./css/feed_main.module.css";
import NavBar from "../home/navBar";
import SideBar from "../home/sideBar";
import TabView from "../home/tabView";
import ListeningBar from "../home/listeningBar";
function Main() {
  return (
    <div className="mainFeed">
        <div className=" bg-gray-950">
            <NavBar />
            <ListeningBar />
        <div className="mt-36 bg-black">
            <SideBar />
            <div className=" ml-96 bg-gray-950">
                <TabView />
            </div>
        </div>
        </div>
    </div>
  );
}
export default Main;
