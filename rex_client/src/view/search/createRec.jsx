import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import SearchContent from "./searchContent";
import { useState, useEffect } from "react";
export default function CreateRec() {
    const [url, setUrl] = useState("");
    const [description, setDescription] = useState("");
// Function to get the download URL
    const handleChange = (e) => {
        setDescription(e.target.value)
    }
    const handleSubmit = async (e) => {
        APIrequest();
    }
    const APIrequest = async () => {
        fetch("http://127.0.0.1:8000/createRec",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "description": description,
                "username": "finn"
            })
        }
        ).then((response) => response.json()) // Parse the response as JSON
        .then((data) => {
          setAccepted(data.accepted);
          setCompleted(data.completed);
        }
        ).catch(error => console.log(error))      
      };
    async function fetchImageDownloadUrl() {
        const fileRef = ref(storage, 'album_covers/thacarterIII.jpg');
        getDownloadURL(fileRef)
            .then((res) => setUrl(res))
            .catch((error) => {
            // Handle any errors
            console.error("Error getting download URL:", error);
            });
    }
    useEffect(() => {
        const fetchUrl = async () => {
          var new_url = await fetchImageDownloadUrl()
          setUrl(new_url)
        }
        fetchUrl()
      }, [])// Example usage
    return (
    <div>
        {/* <button onClick={fetchImageDownloadUrl}>Download Image</button> */}
        {/* <img src={url}/> */}
        <div className="flex flex-row  items-center w-full">

            <div className="text-2xl flex flex-col w-1/2">
                <label className="text-white p-4">Recommendation Caption</label>
                <textarea className="text-black p-4 rounded-2xl" placeHolder={"Caption"} onChange={handleChange} value={description}/>
            </div>
            <div className=" mx-auto ">
                <button className="text-4xl w-1/4 bg-green-500 p-4 rounded-full" onClick={handleSubmit}>Send Rec</button>
            </div>
        </div>

        <SearchContent />
    </div>
    );
}