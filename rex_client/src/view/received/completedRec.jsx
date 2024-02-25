import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import {storage }from "../../firebase.js";

function completedRec({post, review}) {
  const colors = ["red-500", "orange-500", "yellow-500", "green-500", "teal-500", "blue-500", "indigo-500"]
  useEffect(() => {
    fetchImageDownloadUrl(post["image"])
  }, [])    // Content for each tab
  const [url, setUrl] = useState("")
  async function fetchImageDownloadUrl(img) {
    const fileRef = ref(storage, img);
    var res = getDownloadURL(fileRef)
        .then((res) => setUrl(res))
        .catch((error) => {
        // Handle any errors
        console.error("Error getting download URL:", error);
        });
    return res
    }
  return (
    <div className="flex flex-col w-5/12 pt-5">
      <div className={`flex bg-red-500 rounded-2xl pt-2 w-full`}>
        <div className="flex flex-col w-full">
          <div className="flex flex-row w-full justify-between p-3 px-8">
            <div className="flex flex-col">
              <div className="text-5xl font-semibold">{post["mediaName"]}</div>
              <div className="text-2xl pt-1 text-gray-100 font-normal">{post["artistName"]}</div>
            </div>
            <div className="flex flex-col items-space-between">
              <div className="flex flex-row items-space-between items-center">
                <img
                  className="rounded-full w-14 h-14 object-cover mb-1 mr-2"
                  src="https://shorturl.at/afOZ8"
                  alt="User Avatar"
                />
                <div className="text-center w-full">
                  <p className="text-4xl">{post["createdBy"]}</p>
                  <p className="text-2xl text-gray-200 ml-4">2 days ago</p>
                </div>
              </div>
            
          </div>
          </div>


        <div className="flex flex-row pt-3">
          <div className="flex-shrink-0 w-42 h-56">
            <img
              className="w-full h-full object-cover rounded-tr-xl rounded-bl-xl"
              src={url}
              alt="Music Cover"
            />
          </div>
          <div>
            <p className="">{review["comment"]}</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
export default completedRec;
