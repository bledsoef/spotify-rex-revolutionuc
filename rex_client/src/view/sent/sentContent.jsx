import AcceptedRec from "../received/acceptedRec";
import CompletedRec from "../received/completedRec";
import { useState, useEffect } from "react";
function SentContent() {
  const [accepted, setAccepted] = useState([]);
  const [completed, setCompleted] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      await APIrequest()
    }
    fetchData()
  }, [])  
  const APIrequest = async () => {
    fetch("http://127.0.0.1:8000/getSentRecsForUser?username=finn").then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      console.log(data)
      setAccepted(data.accepted);
      setCompleted(data.completed);
    }
    ).catch(error => console.log(error))      
  };
  return (
    <div className="feed_main">
        <div className="flex w-full">
            <div className="w-1/2">
              <h2 className=" text-4xl font-medium mt-3 ">Completed</h2>
              <div className="flex flex-wrap space-x-8">
                  {completed.map((item, index) => (
                    <CompletedRec key={index} post={item["rec"]} review={item["review"]}/>
                  ))}
                </div> 
            </div>
            <div className="w-1/2 ml-8">
                <h2 className=" text-4xl font-medium mt-3">Accepted </h2>
                <div className="flex flex-wrap space-x-8">
                  {accepted.map((item, index) => (
                    <AcceptedRec key={index} post={item}/>
                  ))}
                </div> 
            </div>
        </div>
    </div>
  );
}

export default SentContent;