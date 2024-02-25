import React from 'react';
import ShareList from './share_list';

function SearchContent() {
  return (
    <div className="flex flex-col">
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍  Search"
          className="search-input"
          style={{ fontSize: '20px' }}
        />
        <button className="cancel-button">Cancel</button>
      </div>

      <div className="scroll-div">
        <ShareList />
        <ShareList />
        <ShareList />
        <ShareList />
        <ShareList />
        <ShareList />
      </div>
    </div>
  );
}

export default SearchContent;
