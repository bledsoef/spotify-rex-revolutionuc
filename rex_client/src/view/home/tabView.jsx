// Import React and useState hook
import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
import FeedContent from '../feed/feedContent';
import ReceivedContent from '../received/receivedContent';
import SentContent from '../sent/sentContent';
import CreateRec from '../search/createRec';
// import SearchContent from '../search/searchContent';

// Main App Component
const TabView = ({ onTabChange, tab}) => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(tab);

  useEffect(() => {
    const setTab = (tab) => {
      setActiveTab(tab)
    }
    setTab(tab)
  }, [tab])    // Content for each tab
  const tabContents = {
    1: <FeedContent/>,
    2: <ReceivedContent/>,
    3: <SentContent/>,
    5: <CreateRec/>,

  };

  // Function to handle tab change
  const handleTabChange = (tabNumber) => {
    onTabChange(tabNumber);
    setActiveTab(tabNumber);
  };

  return (
    <div className="bg-black text-white p-8 h-full w-full">
      <div className='flex flex-row w-full justify-between'>
        <h1 className="text-6xl font-bold mb-4">Rex</h1>
        {/* Tab Buttons */}
        <div className="flex space-x-4 mb-4 pr-16">
          <button
            className={`text-4xl py-3 px-8 rounded-full ${activeTab === 1 ? 'bg-green-600 text-black font-normal' : 'bg-gray-800'}`}
            onClick={() => handleTabChange(1)}
          >
            Feed
          </button>
          <button
            className={`text-4xl py-3 px-8 rounded-full ${activeTab === 2 ? 'bg-green-600 text-black font-normal' : 'bg-gray-800'}`}
            onClick={() => handleTabChange(2)}
          >
            Received
          </button>
          <button
            className={`text-4xl py-3 px-8 rounded-full ${activeTab === 3 ? 'bg-green-600 text-black font-normal' : 'bg-gray-800'}`}
            onClick={() => handleTabChange(3)}
          >
            Sent
          </button>
        </div>
      </div>


      {/* Tab Content */}
      <div>
        <p className={activeTab === 1 ? 'block' : 'hidden'}>{tabContents[1]}</p>
        <p className={activeTab === 2 ? 'block' : 'hidden'}>{tabContents[2]}</p>
        <p className={activeTab === 3 ? 'block' : 'hidden'}>{tabContents[3]}</p>
        <p className={activeTab === 5 ? 'block' : 'hidden'}>{tabContents[5]}</p>
      </div>
    </div>
  );
};

export default TabView;