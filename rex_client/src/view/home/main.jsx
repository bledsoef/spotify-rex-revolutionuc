// import "./css/feed_main.module.css";
import { useState } from "react";
import NavBar from "../home/navBar";
import SideBar from "../home/sideBar";
import TabView from "../home/tabView";
import ListeningBar from "../home/listeningBar";
function Main() {
  const [tab, setTab] = useState(1);
  const handleTabChange = (newIndex) => {
    setTab(newIndex);
  };
  const [profileOpen, setProfileOpen] = useState(true);

  return (
    <div className="mainFeed">
      <div className=" bg-black">
        <NavBar toggleProfile={handleTabChange} />
        <ListeningBar onTabChange={handleTabChange} />
        <div className="mt-36 bg-black">
          <SideBar />
          <div className=" ml-96 bg-black mb-48">
            <TabView onTabChange={handleTabChange} tab={tab} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
