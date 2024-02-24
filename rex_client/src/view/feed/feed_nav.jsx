function FeedNav() {
  return (
    <div className="nav">
      <div className="arrows">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5 8.25 12l7.5-7.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
      <div className="profile">
        <div className="profile_photo">
          <img
            className="img_profile_photo"
            src="https://www.amandaherbert.com/wp-content/uploads/2022/09/Mahima-Sukhdev-Headshots-100.jpg"
          ></img>
        </div>
        <div className="profile_name">Jessica</div>
        <div>^</div>
      </div>
    </div>
  );
}

export default FeedNav;
