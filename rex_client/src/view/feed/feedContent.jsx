import Post from "./post";
import { useState, useEffect } from "react";

function FeedContent() {
  const [feed, setFeed] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:8000/getFeedForUser?username=Finn");
        const data = await response.json();
        console.log(data)
        setFeed(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);


  return (
    <div className="overflow-y-auto space-y-12 pt-4">
      {feed.map((item, index) => (
        <div key={index}>
          <Post key={index} post={item["post"]} reviews={item["reviews"]} />
        </div>
      ))}
    </div>
  );
}

export default FeedContent;
