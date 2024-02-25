// Import React and useState hook
import React, { useState } from 'react';
import FeedMain from '../feed/feed_main';
// Import Tailwind CSS for styling
import 'tailwindcss/tailwind.css';
import FeedSubMain from '../feed/feed_subMain';
import ReceivedSubMain from '../received/received_subMain';
import SentSubMain from '../sent/sent_subMain';

// Main App Component
const HomeMain = () => {
  // State to manage the active tab
  const [activeTab, setActiveTab] = useState(1);

  // Content for each tab
  const tabContents = {
    1: <FeedSubMain/>,
    2: <ReceivedSubMain/>,
    3: <SentSubMain/>,
  };

  // Function to handle tab change
  const handleTabChange = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="bg-black text-white p-8 w-full">
      <h1 className="text-6xl font-bold mb-4">Rex</h1>

      {/* Tab Buttons */}
      <div className="flex space-x-4 mb-4 justify-center">
        <button
          className={`py-2 px-4 border rounded-full ${activeTab === 1 ? 'bg-gray-800' : 'bg-gray-700'}`}
          onClick={() => handleTabChange(1)}
        >
          Feed
        </button>
        <button
          className={`py-2 px-4 border rounded-full  ${activeTab === 2 ? 'bg-gray-800' : 'bg-gray-700'}`}
          onClick={() => handleTabChange(2)}
        >
          Received
        </button>
        <button
          className={`py-2 px-4 border rounded-full ${activeTab === 3 ? 'bg-gray-800' : 'bg-gray-700'}`}
          onClick={() => handleTabChange(3)}
        >
          Sent
        </button>
      </div>

      {/* Tab Content */}
      <div>
        <p className={activeTab === 1 ? 'block' : 'hidden'}>{tabContents[1]}</p>
        <p className={activeTab === 2 ? 'block' : 'hidden'}>{tabContents[2]}</p>
        <p className={activeTab === 3 ? 'block' : 'hidden'}>{tabContents[3]}</p>
      </div>
    </div>
  );
};

export default HomeMain;