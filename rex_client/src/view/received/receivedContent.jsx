import AcceptedRec from "./acceptedRec";
import CompletedRec from "./completedRec";
import CreateReview from "../reviews/createReview";

import { useState, useEffect } from "react";

function ReceivedContent() {
  const [accepted, setAccepted] = useState([]);
  const [completed, setCompleted] = useState([]);
  const [rec, setRec] = useState(null);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      await APIrequest()
    }
    fetchData()
  }, [])  
  const APIrequest = async () => {
    fetch("http://127.0.0.1:8000/getReceivedRecsForUser?username=finn").then((response) => response.json()) // Parse the response as JSON
    .then((data) => {
      setAccepted(data.accepted);
      setCompleted(data.completed);
    }
    ).catch(error => console.log(error))      
  };
  const toggleShowModal = (rec) => {
    setShowModal(!showModal);
    setRec(rec)
  }
  return (
    <div className="feed_main">
        <div className="flex w-full">
            {showModal && <CreateReview rec={rec} handleToggleShowModal={toggleShowModal}/>}
            
            <div className="w-1/2">
                <h2 className=" text-4xl font-medium mt-3">Accepted </h2>
                <div className="flex flex-wrap">
                  {accepted.map((item, index) => (
                    <button className="w-5/6" value={item} onClick={() => toggleShowModal(item)}>
                      <AcceptedRec key={index} post={item}/>
                    </button>
                  ))}
                </div> 
            </div>
            <div className="w-1/2 ml-4">
              <h2 className=" text-4xl font-medium mt-3 ">Completed</h2>
              <div className="flex flex-wrap">
                  {completed.map((item, index) => (
                    <CompletedRec key={index} post={item["rec"]} review={item["review"]}/>
                  ))}
                </div> 
            </div>
        </div>
    </div>
  );
}

export default ReceivedContent;