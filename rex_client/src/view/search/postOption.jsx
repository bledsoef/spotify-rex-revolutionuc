import React, { useState } from 'react';

function PostOption() {
  const [isSelected, setIsSelected] = useState(false);

  const handleCircleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <div className="scroll-content">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row items-center">
          <div className="ml-9 text-4xl font-semibold">
            <p>Post this to your feed</p>
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

export default PostOption;
