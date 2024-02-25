import React, { useState } from 'react';

function ShareList() {
  const [isSelected, setIsSelected] = useState(false);

  const handleCircleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="scroll-content">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <div className="img">
            <img
              className="search_user_profile_img"
              src="https://www.amandaherbert.com/wp-content/uploads/2022/09/Mahima-Sukhdev-Headshots-100.jpg"
            />
          </div>
          <div className="user_profile_name_search ml-9">
            <p>Jessica</p>
          </div>
        </div>
        <div className="flex flex-row items-center mr-20" onClick={handleCircleClick}>
          <svg height="100" width="100" xmlns="http://www.w3.org/2000/svg">
            <circle r="18" cx="20" cy="50" stroke="white" strokeWidth="2" opacity="0.5" />
            {isSelected && (
              <circle r="8" cx="20" cy="50" fill="white" strokeWidth="2" />
            )}
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ShareList;
