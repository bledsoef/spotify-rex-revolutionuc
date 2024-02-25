// import "./css/feed_main.module.css";
import { useState } from "react";
import NavBar from "../home/navBar";
import SideBar from "../home/sideBar";
import TabView from "../home/tabView";
import Profile from "../profile/profile";

import ListeningBar from "../home/listeningBar";
function Main() {
  const [tab, setTab] = useState(1);
  const handleTabChange = (newIndex) => {
    setTab(newIndex);
  };
  const [profileOpen, setProfileOpen] = useState(true);
  const [requestsOpen, setRequestsOpen] = useState(false);

  const toggleProfileOpen = () => {
    setProfileOpen(!profileOpen); // Toggle the visibility
  };
  return (
    <div className="mainFeed">
      <div className=" bg-gray-950">
        <NavBar toggleProfile={toggleProfileOpen} />
        <ListeningBar onTabChange={handleTabChange} />
        <div className="mt-36 bg-black">
          <SideBar />
          <div className=" ml-96 bg-gray-950 mb-48">
            <TabView onTabChange={handleTabChange} tab={tab} />
          </div>
        </div>
      </div>
      {profileOpen && (
        <Profile
          isProfileVisible={profileOpen}
          toggleProfileVisibility={toggleProfileOpen}
        />
      )}
    </div>
  );
}
export default Main;
