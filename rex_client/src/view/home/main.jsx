// import "./css/feed_main.module.css";
import NavBar from "../home/navBar";
import SideBar from "../home/sideBar";
import TabView from "../home/tabView";
import ListeningBar from "../home/listeningBar";
import { useState } from "react";
function Main() {
  const [tab, setTab] = useState(1);
  const handleTabChange = (newIndex) => {
    setTab(newIndex);
  }

  return (
    <div className="mainFeed">
        <div className=" bg-gray-950">
            <NavBar />
            <ListeningBar onTabChange={handleTabChange} />
        <div className="mt-36 bg-black">
            <SideBar />
            <div className=" ml-96 bg-gray-950 mb-48">
                <TabView onTabChange={handleTabChange} tab={tab}/>
            </div>
        </div>
        </div>
    </div>
  );
}
export default Main;
