import { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import {storage }from "../../firebase.js";
import Request  from "./request.jsx";
function RequestsContent() {
  const [requestOpen, setRequestOpen] = useState(true);
  const [requests, setRequests] = useState([]);
  const APIRequest = () => {
    fetch("http://127.0.0.1:8000/getRequestsForUser?username=Finn").then((response) => response.json()).then((data) => setRequests(data)).catch(error => console.log(error));
  }

  useEffect(() => {
    const fetchUrl = async () => {
      APIRequest()
    }
    fetchUrl()
  }, [])// Example usage

  if (requestOpen) {
    return (
      <div className="rounded-2xl w-1/3 fixed right-0 flex flex-col p-4 bg-gray-999 text-white">
        <div>
          <p className="text-3xl font-bold mb-4">Requests ({requests.length})</p>
        </div>
        {requests.map((request, index) => (
          <Request request={request}/>
        ))}
        

        {/* Repeat the structure for additional requests as needed */}
      </div>
    );
  }
}

export default RequestsContent;
