import Post from "./post";
import { useState, useEffect } from "react";

function FeedContent() {
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
  return (
    <div className="overflow-y-auto">
    {feed.map((item, index) => (
      <div key={index}>
      <Post key={index} post={item["post"]} reviews={item["reviews"]} />
        </div>
      ))}
    </div>
  );
}

export default FeedContent;
