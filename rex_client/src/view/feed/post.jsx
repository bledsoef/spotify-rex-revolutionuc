import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase.js";

function Post({ post, reviews }) {
  const clickHandler = (e) => {
    e.preventDefault();
    APIrequest();
  };

  useEffect(() => {
    fetchImageDownloadUrl(post["image"]);
    calculate();
  }, []);

  const [url, setUrl] = useState("");
  const [average, setAverage] = useState(5.0);
  const [isAccepted, setIsAccepted] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("");

  // Array of colors to choose from
  const colors = ["bg-red-600", "bg-blue-600", "bg-green-600", "bg-yellow-600", "bg-orange-600", "bg-purple-600"];

  // Function to select a random color
  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  async function fetchImageDownloadUrl(img) {
    const fileRef = ref(storage, img);
    var res = getDownloadURL(fileRef)
      .then((res) => setUrl(res))
      .catch((error) => {
        console.error("Error getting download URL:", error);
      });
    return res;
  }

  const calculate = () => {
    let sum = 0;
    for (let i = 0; i < reviews.length; i++) {
      sum += reviews[i].rating;
    }
    setAverage(sum / reviews.length);
  };

  const APIrequest = async () => {
    fetch("http://127.0.0.1:8000/acceptRecFromPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rec_id: post["id"],
        user_id: "finn",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setIsAccepted(true);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    // Set a random background color when the component mounts
    setBackgroundColor(getRandomColor());
  }, []);

  return (
    <div className={`flex flex-row w-full`}>
 <div className={`flex flex-col  ${backgroundColor} p-8 justify-between w-2/3 rounded-l-2xl shadow-lg`}>
    <div className="flex flex-row w-full justify-between">
      <div className="flex-col p-3">
        <div className="text-9xl font-semibold">{post["mediaName"]}</div>
        <div className="text-6xl pt-4 text-gray-100 font-normal">{post["artistName"]}</div>
      </div>
      <div className="flex-row user">
        <img
          className="rounded-full w-36 h-36 object-cover"
          src="https://shorturl.at/afOZ8"
          alt="User Avatar"
        ></img>
        <div className="flex flex-col pt-2">
          <p className="text-4xl">{post["createdBy"]}</p>
          <p className="text-2xl text-gray-200">2 days ago</p>
        </div>
      </div>
    </div>

    <div className="p-2 flex flex-col w-full">
      <p className="text-7xl pb-4 pl-2 font-bold">Reviews ({reviews.length}) {average ? `⭐ ${average}` : ""} </p>
      <div className="flex flex-row w-full">
        {reviews.map((review, index) => (
          <div>
            <div className="flex-col p-3 w-full flex">
              {review["rating"] == 1 && <p className="flex text-5xl w-full pb-6">⭐</p>}
              {review["rating"] == 2 && <p className="flex text-5xl w-full pb-6">⭐⭐</p>}
              {review["rating"] == 3 && <p className="flex text-5xl w-full pb-6">⭐⭐⭐</p>}
              {review["rating"] == 4 && <p className="flex text-5xl w-full pb-6">⭐⭐⭐⭐</p>}
              {review["rating"] == 5 && <p className="flex text-5xl w-full pb-6">⭐⭐⭐⭐⭐</p>}
              <p className="flex text-4xl w-full">{review["comment"]}</p>
            </div>
          </div>
        ))}
        <div className="flex justify-end w-full">
          {!isAccepted && <button className="flex" onClick={clickHandler}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" p-2 w-48">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          </button>}
          {isAccepted && <button  className="flex" onClick={clickHandler} disabled>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" p-2 w-48">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>


          </button>}
        </div>
      </div>

    </div>
  </div>

  <div className="flex-shrink-0 h-550 w-550">
    <img
      className="w-full h-full object-cover rounded-r-2xl"
      src={url}
      alt="Music Cover"
    ></img>
  </div>
</div>    
  );
}

export default Post;
