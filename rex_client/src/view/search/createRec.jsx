import { storage } from "../../firebase";
import { ref, getDownloadURL } from "firebase/storage";
import { useState, useEffect } from "react";
import SearchContent from "./searchContent";

export default function CreateRec() {
    const [url, setUrl] = useState("");
    const [isPost, setIsPost] = useState(false);
    const [description, setDescription] = useState("");
    const [selectedUsers, setSelectedUsers] = useState([]);

    const handleChange = (e) => {
        setDescription(e.target.value);
    }

    const handleSetIsPost = (isPost) => {
        setIsPost(isPost)
        console.log("hello")
    }

    const handleSubmit = async () => {
        const usernames = selectedUsers.map(user => user.userName)
        const requestData = {
            description: description,
            recipients: isPost ? null : usernames,
            createdBy: "Finn",
            mediaName: "Empire Ants",
            artistName: "Gorillaz",
            isPost: isPost,
        };
        // Sending requestData to the backend
        try {
            const response = await fetch("http://127.0.0.1:8000/createRec", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestData)
            });
            const data = await response.json();
            setDescription("");
            // Handle response data if needed
        } catch (error) {
            console.error("Error occurred:", error);
        }
    }

    async function fetchImageDownloadUrl() {
        const fileRef = ref(storage, 'album_covers/thacarterIII.jpg');
        try {
            const res = await getDownloadURL(fileRef);
            setUrl(res);
        } catch (error) {
            console.error("Error getting download URL:", error);
        }
    }

    useEffect(() => {
        fetchImageDownloadUrl();
    }, []);

    return (
<div>
    <div className="flex flex-row items-center w-full">
        <div className="text-2xl flex flex-col w-full"> {/* Adjusted width to w-3/4 */}
            <label className="text-white p-4">Recommendation Caption</label>
            <textarea className="text-black p-4 rounded-2xl" placeholder={"Caption"} onChange={handleChange} value={description}/>
        </div>
        <div className="ml-4 mt-auto flex items-center"> {/* Center the button text */}
            <button className="text-3xl bg-green-500 px-12 py-5 rounded-full" onClick={handleSubmit}>Send</button>
        </div>
    </div>
    <SearchContent handleSetSelectedUsers={setSelectedUsers} handleIsPostSelected={handleSetIsPost} />
</div>



    );
}
