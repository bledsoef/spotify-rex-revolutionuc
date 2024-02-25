import MusicBox from "./Music_Component";
import { useState, useEffect } from "react";

function FeedSubMain() {
  const [feed, setFeed] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await APIrequest()
    }
    fetchData()
  }, [])  
  const APIrequest = async () => {
    fetch("http://127.0.0.1:8000/getFeedForUser?username=finn").then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
        setFeed(feed => data);
    }
    ).catch(error => console.log(error))      
  };
  console.log(feed);
  return (
    <div className="h-full">
      {feed.map((item, index) => (
        <div>
          {console.log(index)}
          <MusicBox key={index} post={item["post"]} reviews={item["reviews"]} />
        </div>
      ))}
    </div>
  );
}

export default FeedSubMain;
