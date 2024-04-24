import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import {storage }from "../../firebase.js";
function Request({request}) {
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
    useEffect(() => {
        const fetchUrl = async () => {
          fetchImageDownloadUrl(request["image"])
        }
        fetchUrl()
      }, [])// Example usage
      const handleAccept = (id) => {
        fetch("http://127.0.0.1:8000/acceptRecFromUser", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "rec_id": id
          })
        })
    
      }
      const handleReject = (id) => {
        fetch("http://127.0.0.1:8000/rejectRec", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "rec_id": id
          })
        })
    
      }
    return (
    <div className="flex items-center mb-4">
          <div className="flex-shrink-0">
            <img
              className="w-24 h-24 mr-4"
              src={url}
              alt="Enrique Iglesias"
            />
          </div>
          <div className="flex-grow">
            <p className="font-semibold text-3xl mb-2">{request.artistName} - {request.mediaName}</p>
            <p className="text-2xl text-gray-300">Sent by {request.createdBy} 2 days ago</p>
          </div>
          <div className="accept_reject flex flex-row justify-center items-center gap-2">
            <div className="cursor-pointer text-3xl text-green-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" onClick={() => handleAccept(request.id)} stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            </div>
            <button className="cursor-pointer text-3xl text-red-500" onClick={handleReject}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-20 h-20">
              <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>

            </button>
          </div>
        </div>
    )
}
export default Request;