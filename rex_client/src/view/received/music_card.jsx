function MusicCard() {
    return (
      <div className="music_box">
        <div className="music_information_div">
          <div className="music_name">Jun</div>
  
          <div className="music_recommender">
            <div className="music_recommender_profile">
              <div className="recommender_profile_part1">
                <img
                  className="music_recommender_photo"
                  src="https://shorturl.at/afOZ8"
                ></img>
                <p>David Lee</p>
              </div>
              <div className="recommend_date">
                <p>2 days ago</p>
              </div>
            </div>
          </div>
          <div className="music_reviews">
            <p>Reviews (18)</p>
            <div className="individual_reviews_div">
              <div>
                <p>⭐⭐⭐⭐⭐</p>
                <p>This is the best song of the year.</p>
              </div>
              <div>
                <p>⭐⭐⭐⭐⭐</p>
                <p>This is the best song of the year.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="music_cover">
          <img src="https://media.pitchfork.com/photos/6352cd4063dcacf1f2521078/3:2/w_1998,h_1332,c_limit/Taylor-Swift-Red.jpg"></img>
        </div>
      </div>
    );
  }
  
  export default MusicCard;