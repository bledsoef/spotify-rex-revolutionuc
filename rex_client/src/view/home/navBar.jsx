import React, { useState } from "react";

function NavBar({ toggleProfile }) {
  const [isProfileInfoVisible, setIsProfileInfoVisible] = useState(false);

  const toggleProfileInfo = () => {
    setIsProfileInfoVisible(!isProfileInfoVisible);
  };

  const handleProfileClick = (event) => {
    event.stopPropagation(); // Prevents event bubbling
    toggleProfile(); // This should show the profile, ensure toggleProfile sets state correctly in Main
    setIsProfileInfoVisible(false); // Closes the dropdown menu
  };

  return (
    <div className="fixed t-0 flex justify-between w-full p-8 bg-black">
      <div className="spotify">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#1DB954"
          className="bi bi-spotify"
          viewBox="0 0 16 16"
        >
          <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m3.669 11.538a.5.5 0 0 1-.686.165c-1.879-1.147-4.243-1.407-7.028-.77a.499.499 0 0 1-.222-.973c3.048-.696 5.662-.397 7.77.892a.5.5 0 0 1 .166.686m.979-2.178a.624.624 0 0 1-.858.205c-2.15-1.321-5.428-1.704-7.972-.932a.625.625 0 0 1-.362-1.194c2.905-.881 6.517-.454 8.986 1.063a.624.624 0 0 1 .206.858m.084-2.268C10.154 5.56 5.9 5.419 3.438 6.166a.748.748 0 1 1-.434-1.432c2.825-.857 7.523-.692 10.492 1.07a.747.747 0 1 1-.764 1.288" />
        </svg>
        <div>
          <p>Spotify</p>
        </div>
      </div>
      <div className="arrows"></div>
      <div className="profile" onClick={toggleProfileInfo}>
        <div className="profile_photo">
          <img
            className="img_profile_photo"
            src="https://www.amandaherbert.com/wp-content/uploads/2022/09/Mahima-Sukhdev-Headshots-100.jpg"
            alt="profile"
          />
        </div>
        <div className="profile_name">Jessica</div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chevron-down"
            viewBox="0 0 16 16"
          >
            <g>
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </g>
          </svg>
        </div>
        {isProfileInfoVisible && (
          <div className="profile_topright">
            <ul>
              <li className="account-item" onClick={() => toggleProfile()}>
                Account
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 ml-2 account-icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </li>
              <li onClick={() => toggleProfile()}>Profile</li>

              <li>Setting</li>
              <li className="logout-item">Logout</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
