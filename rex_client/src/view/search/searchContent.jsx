import React from 'react';
import PostOption from './postOption';
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
        <PostOption/>
        <ShareList firstName={"Jessica"} lastName={"Parker"}/>
        <ShareList firstName={"Stevenson"} lastName={"Michel"}  />
        <ShareList firstName={"Silas"} lastName={"Fair"}  />
        <ShareList firstName={"Ali"} lastName={"Ramazani"}  />
        <ShareList firstName={"Daize"} lastName={"Njounkeng"}  />
      </div>
    </div>
  );
}

export default SearchContent;
