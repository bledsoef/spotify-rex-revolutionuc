// import "./css/feed_main.module.css";
import { useState } from "react";
import NavBar from "../home/navBar";
import SideBar from "../home/sideBar";
import TabView from "../home/tabView";
import Profile from "../profile/profile";

import ListeningBar from "../home/listeningBar";
function Main() {
  const [profileOpen, setProfileOpen] = useState(true);
  const [requestsOpen, setRequestsOpen] = useState(false);

  const toggleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  return (
    <div className="mainFeed">
      <div className=" bg-gray-950">
        <NavBar toggleProfile={toggleProfileOpen} />
        <ListeningBar />
        <div className="mt-36 bg-black">
          <SideBar />
          <div className=" ml-96 bg-gray-950">
            <TabView />
          </div>
        </div>
      </div>
      {profileOpen && <Profile onClick={toggleProfileOpen} />}
    </div>
  );
}
export default Main;
