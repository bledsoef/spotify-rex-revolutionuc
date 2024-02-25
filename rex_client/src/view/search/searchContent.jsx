import React, { useState } from 'react';
import PostOption from './postOption';
import ShareList from './shareList';

function SearchContent({handleIsPostSelected, handleSetSelectedUsers}) {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isPost, setIsPost] = useState(false);

  const handleIsPost = (post) => {
    setIsPost(post);
    handleIsPostSelected(isPost);
    console.log("hi")
  }
  const handleUserSelect = (user) => {
    const userIndex = selectedUsers.findIndex(
      (u) => u.username === user.username
    );
    if (userIndex !== -1) {
      const updatedSelectedUsers = [...selectedUsers];
      updatedSelectedUsers[userIndex] = user; // Update user object in array
      setSelectedUsers(updatedSelectedUsers);
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
    handleSetSelectedUsers(selectedUsers);
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Simulated database of users
  const users = [
    { firstName: "Jessica", lastName: "Parker", username: "jessica" },
    { firstName: "Stevenson", lastName: "Michel", username: "stevenson" },
    { firstName: "Silas", lastName: "Fair", username: "silas" },
    { firstName: "Ali", lastName: "Ramazani", username: "ali" },
    { firstName: "Daize", lastName: "Njounkeng", username: "daize" },
  ];

  // Filter users based on search query
  const filteredUsers = searchQuery
    ? users.filter(user =>
        user.firstName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : users;

  return (
    <div className="flex flex-col">
      <div className="search-container">
        <input
          type="text"
          placeholder="🔍  Search"
          className="search-input"
          style={{ fontSize: '20px' }}
          onChange={handleInputChange}
        />
        <button className="cancel-button">Cancel</button>
      </div>

      <div className="scroll-div">
        <PostOption toggleIsPost={handleIsPost} />
        {filteredUsers.map(user => (
          <ShareList
            key={user.username}
            firstName={user.firstName}
            lastName={user.lastName}
            username={user.username}
            onUserSelect={handleUserSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchContent;
