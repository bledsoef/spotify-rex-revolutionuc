import React, { useState } from 'react';
import PostOption from './postOption';
import ShareList from './shareList';

function SearchContent() {
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const handleUserSelect = (user) => {
    const userIndex = selectedUsers.findIndex(
      (u) => u.userName === user.userName
    );
    if (userIndex !== -1) {
      const updatedSelectedUsers = [...selectedUsers];
      updatedSelectedUsers[userIndex] = user; // Update user object in array
      setSelectedUsers(updatedSelectedUsers);
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Simulated database of users
  const users = [
    { firstName: "Jessica", lastName: "Parker", userName: "jessica" },
    { firstName: "Stevenson", lastName: "Michel", userName: "stevenson" },
    { firstName: "Silas", lastName: "Fair", userName: "silas" },
    { firstName: "Ali", lastName: "Ramazani", userName: "ali" },
    { firstName: "Daize", lastName: "Njounkeng", userName: "daize" },
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
        <PostOption />
        {filteredUsers.map(user => (
          <ShareList
            key={user.userName}
            firstName={user.firstName}
            lastName={user.lastName}
            userName={user.userName}
            onUserSelect={handleUserSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default SearchContent;
