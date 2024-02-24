function MusicBox() {
  return (
    <div className="music_box_div">
      <div className="music_information">
        <div className="music_details">
          <div className="music_name">Run Joji</div>
        </div>
        <div className="music_recommender">
          <img
            className="img_profile_photo"
            src="https://www.amandaherbert.com/wp-content/uploads/2022/09/Mahima-Sukhdev-Headshots-100.jpg"
            alt="Recommender"
          />
          <p>Jessica</p>
        </div>
      </div>
      <div className="music_cover_img">
        <img
          src="https://media.pitchfork.com/photos/6352cd4063dcacf1f2521078/3:2/w_1998,h_1332,c_limit/Taylor-Swift-Red.jpg"
          alt="Music Cover"
          className="cover_img"
        />
      </div>
    </div>
  );
}

export default MusicBox;
