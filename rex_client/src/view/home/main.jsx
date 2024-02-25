// import "./css/feed_main.module.css";
import { useState } from "react";
import NavBar from "../home/navBar";
import SideBar from "../home/sideBar";
import TabView from "../home/tabView";
import Profile from "../profile/profile";

function Main() {
  const [profileOpen, setProfileOpen] = useState(true);
  const [requestsOpen, setRequestsOpen] = useState(false);

  const toggleProfileOpen = () => {
    setProfileOpen(!profileOpen);
  };

  const mainFeedClass = profileOpen ? "mainFeed with-scrollbar" : "mainFeed";

  return (
    <div className="mainFeed">
      <div className=" bg-gray-950">
        <NavBar toggleProfile={toggleProfileOpen} />
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
