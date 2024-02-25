import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
const CreateReview = ({rec, handleToggleShowModal}) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const submit = () => {
        fetch("http://127.0.0.1:8000/createReview", 
        {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            "author": "Finn",
            "rec": rec["id"],
            "comment": comment,
            "rating": rating
            }),
    
        }).then((response) => (() => handleToggleShowModal())) // Parse the response as JSON
        .catch(error => console.log(error))      
    }
    const handleStarClick = (star) => {
        setRating(star);
      };
      const handleChange = (e) => {
        setComment(e.target.value);
      };
    return (
      <>
          <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="font-bold bg-gray-999 text-white p-12 rounded shadow-lg">
                <p className="text-5xl py-4">{rec["mediaName"]} - {rec["artistName"]}</p>
                <p className="font-semibold text-3xl py-3">Leave A Rating</p>
                <div className="flex flex-col pb-6 w-full justify-center">
                    <div className="text-center p-5">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <FontAwesomeIcon
                        key={star}
                        icon={faStar}
                        className={`text-6xl cursor-pointer ${
                            star <= rating ? 'text-yellow-500' : 'text-gray-300'
                        }`}
                        onClick={() => handleStarClick(star)}
                        />
                    ))}
                </div>        
                <p className="font-semibold text-3xl py-3">Leave A Comment</p>
                <textarea type="text" value={comment} onChange={handleChange} className="w-full p-6 text-3xl text-black rounded-lg" placeholder="Comment"/>        
            </div>
              <div className="flex flex-row justify-between">
                <button
                    className="text-4xl bg-gray-800 p-4 rounded-lg hover:text-gray-100"
                    onClick={handleToggleShowModal}
                >
                    Close
                </button>
                <button
                    className="text-4xl bg-green-600 rounded-lg p-4 hover:text-gray-100"
                    onClick={submit}
                >
                    Submit
                </button>
              </div>
            </div>
          </div>
      </>
    );
  };
  
  export default CreateReview;