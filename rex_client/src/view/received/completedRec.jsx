
function completedRec({post, review}) {
  return (
    <div className="flex flex-col w-5/12 pt-5">
      <div className="flex bg-red-600 rounded-2xl pt-2 w-full">
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
              src="https://media.pitchfork.com/photos/6352cd4063dcacf1f2521078/3:2/w_1998,h_1332,c_limit/Taylor-Swift-Red.jpg"
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
